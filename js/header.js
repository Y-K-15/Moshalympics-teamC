'use strict';
let body = document.getElementById('body');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 =document.getElementById('line3');
let navi = document.getElementById('navi');
let burger = document.getElementById('hamburger')
let header = document.getElementById('header')


function hamburger() {
  line1.classList.toggle('line_1');
  line2.classList.toggle('line_2');
  line3.classList.toggle('line_3');
  navi.classList.toggle('in');

  document.getElementById('popupCover').classList.toggle('black-out');

  header.classList.toggle('header')
}

document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
  if($('.header').hasClass('header')){
    $('#body').removeClass('scroll-prevent');
    } else {
      $('#body').addClass('scroll-prevent');
      console.log('a')
  }
} );