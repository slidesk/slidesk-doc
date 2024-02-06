---
sidebar_position: 1
---

# Usage

SliDesk has many options

```sh
slidesk -h


 ____(•)<
(SliDesk) v 2.4.0

Usage: slidesk [options] [command] [talk]

Your presentation companion

Arguments:
  talk                     the directory of your talk

Options:
  -v, --version            output the version number
  -d, --domain <string>    domain (default: "localhost")
  -p, --port <int>         port (default: 1337)
  -s, --save <path>        save the presentation
  -n, --notes              open with speakers notes
  -t, --timers             add checkpoint and slide maximum time on notes view
  -a, --transition <int>   transition timer (default: 300)
  -w, --watch              watch modification of files
  -g, --hidden             remove help information
  -c, --conf <name>        use a specific .env file (default: "")
  -i, --interactive        allow your audience to see your presentation on another device synchronously (default: false)
  -o, --open <browser>     open a browser with the presentation or notes view (browser is : chrome, edge, firefox, browser, browserPrivate)
  -h, --help               display help for command

Commands:
  create <talk>

```

We can see that there are several options, that the "talk" consists of a directory (if not specified, SliDesk takes the current directory) and that there is a command to create talks.

As far as options are concerned, the one that will undoubtedly be most frequently used is `-n`, which generates the Speaker view. Coupled with the `-t` option, this will enable you to better manage your time via the checkpoints defined in your presentation, as seen above.

To simplify the call, you can use a simplified syntax:

```sh
slidesk -tn
```

Which combines the `-t` and `-n` options.
