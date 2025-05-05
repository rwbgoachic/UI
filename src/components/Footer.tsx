import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © {currentYear} PaySurity. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}