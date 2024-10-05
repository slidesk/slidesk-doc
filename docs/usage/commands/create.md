# Create a talk

To present a talk, SliDesk needs a `main.sdf` file.

You can create it by yourself or using the `create` command.

```sh
slidesk create mytalk
```

SliDesk will create a directory named "mytalk".

It will ask you some questions:

> What is the title of talk?

Then you can input the title you want.

> Do you want to customize the presentation? [yN]

If you choose Yes, then a `custom.css` file will be created in addition of the `main.sdf`.


The command has an option `--theme` that allows you to choose a theme available in https://github.com/slidesk/slidesk-extras.

```sh
slidesk create --theme default mytalk
```

A theme must have a `main.sdf` file which contains `# TITLE`.

To list all file the theme needs, you have to add a `files.json` which contains an array of file names.