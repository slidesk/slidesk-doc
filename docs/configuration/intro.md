# Configuration of SliDesk

SliDesk uses a `.env` file to be configured for your presentation.

This file can be used for plugins (values are readable in an object `window.slidesk.env`) or presentation (values are readable with the syntax `++KEY++`).

Some keys are reserved for SliDesk:

## PLUGINS

```
PLUGINS="autonext,keyboard-notes,steps"
```

Separated with a comma, you can load internal plugins:

**autonext:**

This plugin allows you to define a duration for the display of a slide, and to move on to the next slide automatically as soon as the time is exceeded.

To do this, you need to add a class to the auto-NNN slide, where NNN is the duration in milliseconds.

Example:

```
## A slide that changes after 3 seconds .[auto-3000]
```

**gamepad / gamepad-notes:**

This plugin lets you control the presentation from a gamepad. A gamepad.json file can be added to the root of your presentation to modify the button/action association.

```json
{
  "1": "next",
  "3": "previous",
  "6": "notes_down",
  "7": "start_timer",
  "9": "notes_up"
}
```

The key corresponds to the button number, and the action corresponds to a function of the window.slidesk object.

**qrcode:**

This plugin adds a qrcode to the page (bottom left) whose content is the url of the current slide. This makes sharing easier.

**source:**

This plugin adds a button to the page (bottom right) that displays a modal window with the slide's source code in SliDesk format.

**steps:**

This plugin allows you to display a list as you go by overloading SliDesk's "next" function.
For lists to be active, a "steps" class must be added to the desired slide.

So you can create your own actions by overloading the object.

**keyboard / keyboard-notes:**

This plugin lets you control the presentation from a keyboard. A keyboard.json file can be added to the root of your presentation to modify the key/action association.

```json
{
  "a": "next",
  "b": "previous",
  "d": "notes_down",
  "f": "start_timer",
  "g": "notes_up"
}
```

The key corresponds to the key, and the action corresponds to a function of the window.slidesk object.

So you can create your own actions by overloading the object.

**progress:**

Displays a progress bar at the bottom of the slide according to progress in the presentation.

## HTTPS

If this key is set to "true", you'll need to specify the "KEY", "CERT", and optionaly the "PASSPHRASE".

Then you can browse your presentation with https.

## KEY

The path of the certificat key file.

## CERT

The path of the certificat cert file.

## PASSPHRASE

The passphrase if needed.

## WIDTH

This parameter is used for responsive design. If this value is specified, then images are recalculated to fit the ratio with this original width of the presentation.

## TITLE

You can specify a title that will be displayed at the title tag.