import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';

export default {
  input: ["src/main-a.ts", "src/main-b.ts"],
  output: [
    // ES module version, for modern browsers
    {
      dir: "public/module",
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    typescript({
      verbosity: 3
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: [
        ...DEFAULT_EXTENSIONS,
        'ts',
        'tsx'
      ]
    })
  ]
};
