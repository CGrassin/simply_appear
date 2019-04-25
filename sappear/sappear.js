var animated = [];

function SAinit() {
  var temp = document.querySelectorAll(".SAppear");
  var i,n;
  var s = document.createElement('p').style,
        supportsTransitions = 'transition' in s ||
                              'WebkitTransition' in s ||
                              'MozTransition' in s ||
                              'msTransition' in s ||
                              'OTransition' in s;

  if (!supportsTransitions) return;
  for(i = 0, n; n = temp[i]; ++i) animated.push(n);
  for (i=0;i<animated.length;i++){
    //We add the class that turn the elements off. This is for no-JS support.
    animated[i].className +=  " SAenabled";
  }
  // We trigger it once to display the elements that are already in screen.
  SAupdate();
  // We add event listeners to the window (with IE8 support)
  if (window.addEventListener) {
    window.addEventListener("scroll",SAupdate,false);
    window.addEventListener("resize",SAupdate,false);
  }
  else {
    window.attachEvent("scroll",SAupdate);
    window.attachEvent("resize",SAupdate);
  }
}
function SAupdate() {
  for (var i=animated.length-1;i>=0;i--){
    //If element is ABOVE view, we consider it viewed.
    // if ((animated[i].getBoundingClientRect().top-animated[i].offsetHeight/2-window.innerHeight*4/5)<0) {
    if ((animated[i].getBoundingClientRect().top-window.innerHeight*4/5)<0) {
      animated[i].className +=  " SAviewed";
      //Already viewed : we remove it from the array.
      animated.splice(i,1);
    }
  }
}
