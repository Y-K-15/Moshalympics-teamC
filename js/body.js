'use strict';
// let sentence = ['','わあ']
let introduction_box = document.getElementById("introduction_box");
for (let i = 1; i < 24; i++) {
  let introduction = 
  `<div class="introduction-card">`
    +`<div class="introduction-picture">`
      +`<a href="transition/index.html?id=1">`
      +`<img class="members" src="./picture/members${i}.jpg">`
      +`</a>`
    +`</div>`
    +`<div class="introduction">`
      +`<p>ホニャホニャ</p>`
      +`<p>人人</p>`
    +`</div>`
  +`</div>`;
  introduction_box.insertAdjacentHTML('beforeend',introduction);
}

