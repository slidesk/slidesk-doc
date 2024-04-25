# Image

You can integrate images in your presentation using the following component:

```
!image(path, alternative text, width, height, additional styles, addCaption)
```

`width` & `height`are specified in `px`.

Only the path is mandatory.

If you want to specify the height, write you component like this:

```
!image(my-image.png,,,200)
```

Example:

```
!image(path/of/your/image, my alternative text, 13, 12, float: left; background-color: #131282, true)
```

will render

```
<figure class="sd-img" style="float: left; background-color: #131282">
  <img src="path/of/your/image" loading="lazy" width="13" height="12" alt="my alternative text" />
  <figcaption>my alternative text</figcaption>
</figure>
```

Using the `.env` file with the "WIDTH" key, images will be resized to be reponsive.
