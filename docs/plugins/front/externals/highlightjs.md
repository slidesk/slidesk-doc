# highlightjs

This plugin uses highlightjs to highlight sourcecode in your presentation.

```js
your code
```

You have to remplace the `highlight.min.js` and css if you want to uses other languages. (default : js).
To do that, go to: https://highlightjs.org/download

If you want to use another theme, you can download it from https://highlightjs.org/download

You can add focus line through the following syntax:

```js@focus=2-4;8-9
console.log('Hello World');
if (true) {
  console.log('I am focused');
}
else {
  console.log('I am not focused');
}
console.log('I am focused too');
console.log('Me too');
console.log('Me not');
```