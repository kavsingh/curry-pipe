import babel from 'rollup-plugin-babel';
import typescript2 from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';

const extensions = ['.ts', '.js'];

export default {
  input: './src/index.ts',
  output: [
    { file: './dist/index.js', format: 'cjs' },
    { file: './dist/index.module.js', format: 'es' },
  ],
  plugins: [
    resolve({ extensions }),
    typescript2(),
    babel({ extensions, include: ['src/**/*'], exclude: 'node_modules/**' }),
    cleanup({ comments: ['license', 'jsdoc'], maxEmptyLines: 1 }),
  ],
  external: [],
};
