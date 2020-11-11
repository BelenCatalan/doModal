'use strict';

//Primera forma
if(document.querySelector('.btn__modal')){
let modal = document.querySelector('.modal__container');
let btn = document.querySelector('.btn__modal');
let span = document.querySelector('.modal__close');
let body= document.getElementsByTagName('.body')[0];

btn.onclick = function(){
  modal.style.display = "block";
  body.style.position ="static";
  body.style.height="100%";
  body.style.overflow="hidden";
}
span.onclick = function() {
  modal.style.display = "none";

  body.style.position = "inherit";
  body.style.height = "auto";
  body.style.overflow = "visible";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  }
}

}

//Segunda forma
