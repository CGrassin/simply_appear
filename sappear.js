var SAanims = [];

function SAinit() {
  // Check if browser supports animations
  var s = document.createElement('p').style,
        supportsTransitions = ('transition' in s ||
                              'WebkitTransition' in s ||
                              'MozTransition' in s ||
                              'msTransition' in s ||
                              'OTransition' in s);
  if (!supportsTransitions) return;

  // Get all the not viewed SA objects
  SAanims = Array.prototype.slice.call(document.querySelectorAll(".SAppear:not(.SAviewed)"));
  
  // We add the class that turn the elements off. This is for no-JS support.
  for (var i=0;i<SAanims.length;i++){
    SAanims[i].classList.add('SAenabled');
  }

  // We trigger it once to display the elements that are already in screen.
  SAupdate(null,1.0);

  // We add event listeners to the window
  window.addEventListener("scroll",SAupdate,false);
  window.addEventListener("resize",SAupdate,false);
}
window.addEventListener('DOMContentLoaded', SAinit)

function SAupdate(e,ratio = 0.8) {
  for (var i=SAanims.length-1;i>=0;i--){
    //If element is ABOVE view, we consider it viewed.
    if ((SAanims[i].getBoundingClientRect().top-window.innerHeight*ratio)<0) {
      //animated[i].className +=  " SAviewed";
      SAanims[i].classList.add('SAviewed');
      //Already viewed : we remove it from the array.
      SAanims.splice(i,1);
    }
  }
}
