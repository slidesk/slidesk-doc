# notes

```sh
  -n, --notes              open with speakers notes
```

This option generates the speaker view in addition of your presentation.

![speaker view](./img/notes.png)

In the speaker view, you can view:

- the current slide
- the next slide
- a timer
- your notes

:::warning
When this option is active, you can't navigate directly in the presentation with keyboard. The speaker view controls the navigation.
:::

Technically, communication between the "presentation" view and the "speaker" view takes place via a websocket.

This is done via a `window.slidesk.io` object available in the "presentation" and "speaker" pages.

Example of a call to the next slide:

```js
window.slidesk.io.send(JSON.stringify({ action: "next" }));
```

This JavaScript object enables developers to add additional functionality through plugins.
