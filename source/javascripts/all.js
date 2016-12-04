/*

  Fade-in Elements on Load

*/
//  Cache elements to be loaded
const loadElements = document.getElementsByClassName('js-load');
//  Add event listener on load
window.addEventListener('load', function(){
  for (var i = 0; i < loadElements.length; i++) {
    load(loadElements[i]);
  }
});
//  Toggle element load classes
function load(element) {
  element.classList.toggle('is-hidden');
  element.classList.toggle('is-visible');
}
