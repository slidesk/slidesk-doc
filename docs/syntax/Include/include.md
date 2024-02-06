# Include

Sometimes, presentation can be very long, and finding a slide is fastiduous.

SliDesk offers the possibility to split your `main.sdf` file and use "includes" to simplify the writting of your presentation.

```
!include(path/of/sdf)
```

Then you can have a nice `main.sdf` to manage easily your time of your parts.

```
# 3615 Twitch

!include(slides/introduction.sdf)

//@ < 05:00

!include(slides/history.sdf)

//@ < 15:00

!include(slides/videotex.sdf)

!include(slides/conversion.sdf)

//@ < 30:00

!include(slides/electronic.sdf)

//@ < 35:00

!include(slides/twitch.sdf)

//@ < 40:00

!include(slides/conclusion.sdf)
```
