'use strict';
let sentence = ['カレン','わあ']
for (let i = 1; i < 24; i++) {
  let introduction = `<img class="members" src='./picture/members${i}.jpg'>`
  +`<li>sentence${i}</li>`
  let introduction_box = document.getElementById("introduction_box");
  introduction_box.insertAdjacentHTML('beforebegin',introduction);
}
