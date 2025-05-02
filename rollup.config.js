import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/components/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true
  },
  plugins: [typescript({
    tsconfig: './tsconfig.json',
    declaration: true,
    declarationDir: './dist'
  })],
  external: ['react']
};