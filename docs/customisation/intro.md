# Customisation

To activate the customisation of your presentation, you have to add this following container on the top of your `main.sdf`:

```
/::
custom_css: path/of/custom.css
::/
```

Your `custom.css` file can have this base:

```css
:root {
  --sd-heading1-size: 8.5vw;
  --sd-heading1-line-height: 1;
  --sd-heading2-size: 5vw;
  --sd-heading2-line-height: 1;
  --sd-text-size: 2.2vw;
  --sd-text-line-height: 1.2;

  --sd-background-color: #242424;
  --sd-heading-color: rgba(255, 255, 255, 0.97);
  --sd-text-color: rgba(255, 255, 255, 0.87);
  --sd-primary-color: rgb(37, 186, 146);

  /* SpeakerView */
  --sd-sv-timer-size: 80px;
  --sd-sv-text-size: 40px;
  --sd-sv-text-line-height: 1.2;
  --sd-sv-background-color: #242424;
  --sd-sv-text-color: rgba(255, 255, 255, 0.87);
}
```

These are the css variables that can be modified to play with the colors and sizes of the elements in the SliDesk tool.

You're free to add your own styles.

For example, if you want to have a slide with 2 classes "foo" and "bar", use the following syntax:

```
## Slide 1 .[foo bar]
```

## Add styles and scripts

Since 2.4.0, you can add easily styles and scripts file with this following syntax:

```
/::
add_styles: files separated with a comma
add_scripts: files separated with a comma
::/
```

If you add a `favicon.ico` or `.png`or `.svg` file in the root of your project, it will be added to the final build and replace the default one.

## COMMON

It's possible to have a common directory to share a theme, plugins, ... for many presentations

Then in your `.env` file add:

COMMON_DIR=path/to/common

To use it in your presentation, you can use the following syntax:

```
/::
custom_css: -=[COMMON]=-/theme/custom.css
::/

!image(-=[COMMON]=-/assets/logo.png)
```
