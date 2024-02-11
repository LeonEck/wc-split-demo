import { build } from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

await build({
  /**
   * Point esbuild to the TypeScript file it should build
   */
  entryPoints: ['my-component.ts'],
  /**
   * Activate bundling so that import statements are evaluated
   * and their content inlined
   */
  bundle: true,
  /**
   * .html files should be loaded as text (string) in import statements
   */
  loader: {
    '.html': 'text',
  },
  /**
   * Use esbuild-sass-plugin to compile the SCSS syntax to CSS
   */
  plugins: [
    sassPlugin({
      /**
       * Pass on the generated CSS as a string in import statements
       */
      type: 'css-text',
    }),
  ],
  /**
   * Output format should be an ECMAScript Module
   */
  format: 'esm',
  /**
   * Output from the build
   */
  outfile: 'my-component.js',
});
