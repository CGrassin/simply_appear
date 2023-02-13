# Simply Appear

Simply Appear is an extremely lightweight native Javascript and CSS framework to animate objects appearing on web pages.

It is easy to integrate and comes with 8 basic animations styles (see examples below).

See original article on my website for examples: http://charleslabs.fr/en/project-Simply+Appear

## Features

* **Lightweight** and lightning fast: less than 2&nbsp;KB (CSS+JS)
* **Native JS** (no jQuery required!)
* **Compatible with IE9+** (although animations are supported IE10+)
* Uses **CSS transitions** (less messy than JS animations that override the "style" tag)
* Page still works with JS disabled (without animations)
* Comes with the basic animations: fade-in, slide-up, slide-down, slide-left, slide-right, zoom-in. Easy to add more!

## Usage 

Using this library is easy:

0. Download/clone the lib from [Github](https://github.com/CGrassin/simply_appear) and put it somewhere your website's directory
1. In your `<head>`, add `<link rel="stylesheet" href="/sappear/sappear.min.css" type="text/css">`
2. Before the closing tag of your `<body>`, add `<script src="/sappear/sappear.min.js"></script><script>SAinit();</script>`
3. Wrap all of your content in `<div id="bodywrapper"></div>` or give the containing body the `overflow-x: hidden;` CSS property
4. Add animations to your elements! To do so, add the following classes `SAppear ANIMATION-NAME`. The available animations are :
    * SA-fade-in
    * SA-slide-up
    * SA-slide-down
    * SA-slide-left
    * SA-slide-right
    * SA-zoom-in
    * SA-roll-left
    * SA-roll-right
    * ... Your own animations!

In a single example:
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="/sappear/sappear.min.css" type="text/css">
  </head>
  <body style="overflow-x: hidden;">
    <!-- Page content... -->
    <p class="alert alert-info SAppear SA-fade-in">This "p" will be animated with a fade in effect.</p>
    <!-- More page content... -->
    <script src="/sappear/sappear.min.js"></script><script>SAinit();</script>
  </body>
</html>
```

## Adding custom animations

Should you want more options, adding your own animations is very easy. For instance, add this to the CSS code:

```css
.SAenabled.SA-ANIMATION-NAME{
  /* You can choose the animation length. If you do
   not put this line, it will default to 500ms.*/
  -webkit-transition: 1s;
  transition: 1s;
  /* The state of the element before the appear. It 
  transitions to its default state when appearing.*/
  -webkit-transform: rotate(90deg) scale(0);
          transform: rotate(90deg) scale(0);
}
```

This code makes the element appear with a spinning and zooming effect of 1 second.

A good source of inspiration is the [Animate.css](https://animate.style/) framework.

## Known limitations

Due to some performance optimisation, any element added to the DOM after the lib is initiated (through Ajax calls for instance) will not be animated. The solution is to rerun `SAinit()` after loading the new content.
