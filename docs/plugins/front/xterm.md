# xterm

Add a `<div class="xterm"></div>` code in your slide to activate this plugin on it.

Preview: https://www.youtube.com/watch?v=pxwCcCFix78

You can specify your shell into the `xterm.ws.mjs` file: `	const shell = "/bin/zsh";`
You can change cols and rows in the same file (lines 58) and in the `xterm.js` file (line 6).

You can reduce the default terminal prompt by keeping only the current directory name. To do so, replace the empty command (`data: '\n'`) in the `xterm.js` file (line 32) by `data: 'export PS1="\\033[1;34m\\W\\033[0m\\$ "\n'`.

On linux, be sure to install `expect` package to have `unbuffer`.

## JavaScript event commands

This plugin also let you run a command from a JavaScript event.

Create some custom JavaScript functions that will be called from your slides.

```javascript
/**
 * Open the 'project' dir in VS Code and set the window fullscreen after 2 sec (need to wait the window to be open).
 */
function openCode() {
	window.slidesk.io.send(
		JSON.stringify({
			plugin: "xterm",
			data: 'code project\nsleep 2\nxdotool key "F11"\n'
		})
	);
}

/**
 * Open the Slidesk documentation in a browser
 */
function openSlideskDoc() {
	window.slidesk.io.send(
		JSON.stringify({
			plugin: "xterm",
			data: 'firefox --new-window https://slidesk.github.io/slidesk-doc/docs/plugins/front/externals/xterm/\n'
		})
	);
}
```

Then, you can call this function from your slides.

```md
/::
add_scripts: commands.js
::/

<button onclick="openCode()">VS Code</button>

<button onclick="openSlideskDoc()">Slidesk documentation</button>

<div class="xterm" style="display: none;"></div>
```