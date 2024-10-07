# xterm

Add a `<div class="xterm"></div>` code in your slide to activate this plugin on it.

Preview: https://www.youtube.com/watch?v=pxwCcCFix78

You can specify your shell into the `xterm.ws.mjs` file: `	const shell = "/bin/zsh";`
You can change cols and rows in the same file (lines 58) and in the `xterm.js` file (line 6).

On linux, be sure to install `expect` package to have `unbuffer`.