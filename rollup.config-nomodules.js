import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';

export default {
  input: ["src/main-a.ts", "src/main-b.ts"],
  output: [
    {
      dir: "public/nomodule",
      format: "system",
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    typescript({
      verbosity: 3
    }),
    babel({
	  babelrc: false,
	  presets: [['@babel/env', { modules: false }]],
      exclude: 'node_modules/**',
      extensions: [
        ...DEFAULT_EXTENSIONS,
        'ts',
        'tsx'
      ]
    })
  ]
};
