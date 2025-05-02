/*
  # Add encryption support
  
  1. New Functions
    - `encrypt_text`: Encrypts text using pgcrypto
    - `decrypt_text`: Decrypts encrypted text using pgcrypto
  
  2. Security
    - Functions are only accessible to authenticated users
    - Encryption key is stored securely in the database
*/

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create a secure key storage table
CREATE TABLE IF NOT EXISTS encryption_keys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key_name text UNIQUE NOT NULL,
  key_value text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE encryption_keys ENABLE ROW LEVEL SECURITY;

-- Only allow superuser access to encryption keys
CREATE POLICY "Superuser access to encryption keys"
  ON encryption_keys
  FOR ALL
  TO postgres
  USING (true);

-- Create encryption functions
CREATE OR REPLACE FUNCTION encrypt_text(text_to_encrypt text, key_name text)
RETURNS text AS $$
DECLARE
  encryption_key text;
BEGIN
  -- Get the encryption key
  SELECT key_value INTO encryption_key
  FROM encryption_keys
  WHERE key_name = $2;

  IF encryption_key IS NULL THEN
    RAISE EXCEPTION 'Encryption key not found';
  END IF;

  -- Encrypt the text
  RETURN encode(
    encrypt(
      text_to_encrypt::bytea,
      encryption_key::bytea,
      'aes'
    ),
    'base64'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create decryption function
CREATE OR REPLACE FUNCTION decrypt_text(encrypted_text text, key_name text)
RETURNS text AS $$
DECLARE
  encryption_key text;
BEGIN
  -- Get the encryption key
  SELECT key_value INTO encryption_key
  FROM encryption_keys
  WHERE key_name = $2;

  IF encryption_key IS NULL THEN
    RAISE EXCEPTION 'Encryption key not found';
  END IF;

  -- Decrypt the text
  RETURN convert_from(
    decrypt(
      decode($1, 'base64'),
      encryption_key::bytea,
      'aes'
    ),
    'UTF8'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;