# Gitpod

You can use SliDesk in gitpod using this `.gitpod.yml` (directly in the directory of your `main.sdf`):

```yml
image: gitpod/workspace-bun

tasks:
  - name: Execute SliDesk
    command: bunx slidesk -wi

ports:
  - port: 1337
    onOpen: open-preview
```

It will be run your presentation into a gitpod environment.

To display a Gitpod button in your readme.md, add this snippet:

```md
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/slidesk/slidesk/-/tree/main/)
```

Replace the repository url by yours.

If you have a directory where your presentation is, then change the `.gitpod.yml` by:

```yml
image: gitpod/workspace-bun

tasks:
  - name: Execute SliDesk
    command: bunx slidesk -wi YOURDIRECTORY

ports:
  - port: 1337
    onOpen: open-preview
```
