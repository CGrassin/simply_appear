# Simply Appear

Simply Appear is an extremely lightweight native Javascript and CSS framework for web apparition animations. It is easy to use and comes with basic animations.

See original article on my website for examples: http://charleslabs.fr/en/project-Simply+Appear

## Features

* Native JS (no jQuery!), compatible with IE8+ (although animations are supported IE10+)
* Uses CSS transitions (less messy than JS animations that override the "style" tag)
* Lightweight and lightning fast
* Page still works with JS disabled
* Comes with the basic animations : fade-in, slide-up, slide-down, slide-left, slide-right, zoom-in. Super easy to add more!

## Usage 

Using this library is super easy:

0. Download the lib and put it to your website's directory
1. In your `head`, add `<link rel="stylesheet" href="/sappear/sappear.min.css" type="text/css">`
2. Before the closing tag of your `body`, add `<script src="/sappear/sappear.min.js"></script><script>SAinit();</script>`
3. Wrap all of your content in `<div id="bodywrapper"></div>`
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

## Add your own animations

Adding your animations is super easy. For instance, add this to your CSS code :

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

You may want to import animations from the Animate.css lib.

## Known issues

Due to performance optimisation, any element added to the DOM after the lib is initiated (through Ajax calls for instance) will not be animated unless you rerun SAinit(), which I would _not recommend_.