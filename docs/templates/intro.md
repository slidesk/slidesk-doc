---
sidebar_position: 1
---

# Templates

SliDesk has a template system since version 2.11.0. It allows you to create custom templates for your content, which can be used in various ways.

To create a template, you need to create a new folder in the `templates` directory of your SliDesk installation. In this folder, you have to create `.sdt` files.

Example:

```html
<div class="split">
  <div class="left">
    <sd-title />
  </div>
  <div class="right">
    <sd-content />
  </div>
</div>
```

You can see special tags : `sd-title` & `sd-title`. These are placeholders for the title and content of your page.

To use this template, you need to specify it in the `class` field of your slide. For example:

```
## My Slide .[#split other-classes]

My Content
```

In this example, the slide will be rendered by:

```html
<section class="sd-slide other-classes">
<div class="split">
  <div class="left">
    <h2>My Slide</h2>
  </div>
  <div class="right">
    My Content
  </div>
</div>
</section>
```