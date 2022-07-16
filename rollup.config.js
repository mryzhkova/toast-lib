import { babel } from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import image from '@rollup/plugin-image';
import alias from '@rollup/plugin-alias';
import path from 'path';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      alias({
        resolve: ['.js', '.ts', 'tsx', 'jsx'],
        entries: [
          {
            find: '@',
            replacement: path.join(__dirname, './src'),
          },
          {
            find: '@assets',
            replacement: path.resolve(__dirname, './assets'),
          },
        ],
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve(),
      typescript(),
      terser(),
      image()
    ],
  },
];
