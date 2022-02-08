'use strict';
var member = new Object();
var member = [
  {
    name: "じん",
    grade: "父",
    kanji: "2"
  },
  {
    name: "こうへい",
    grade: "朗",
    kanji: "2"
  },
  {
    name: "ともあき",
    grade: "農",
    kanji: "2.5"
  },
  {
    name: "ことき",
    grade: "喜",
    kanji: "2.5"
  },
  {
    name: "おのかん",
    grade: "大将",
    kanji: "2"
  },
  {
    name: "ぽんた",
    grade: "匠",
    kanji: "2.5"
  },
  {
    name: "てらし",
    grade: "理",
    kanji: "2.5"
  },
  {
    name: "もも",
    grade: "才",
    kanji: "2"
  },
  {
    name: "つよし",
    grade: "強",
    kanji: "2.5"
  },
  {
    name: "まいの",
    grade: "芯",
    kanji: "2.5"
  },
  {
    name: "かずのり",
    grade: "唱",
    kanji: "2.5"
  },
  {
    name: "かずき",
    grade: "神",
    kanji: "2.5"
  },
  {
    name: "さち",
    grade: "静",
    kanji: "2"
  },
  {
    name: "みゆき",
    grade: "完璧",
    kanji: "2.5"
  },
  {
    name: "かれん",
    grade: "母",
    kanji: "2"
  },
  {
    name: "れい",
    grade: "時",
    kanji: "2"
  },
  {
    name: "えいき",
    grade: "陽",
    kanji: "2"
  },
  {
    name: "かしけん",
    grade: "Harbors",
    kanji: "2"
  },
  {
    name: "あきら",
    grade: "健康",
    kanji: "2"
  },
  {
    name: "たいき",
    grade: "中分",
    kanji: "2"
  },
  {
    name: "なおき",
    grade: "惰",
    kanji: "2"
  },
  {
    name: "けんと",
    grade: "高尚",
    kanji: "2.5"
  },
  {
    name: "りさ",
    grade: "眠",
    kanji: "2.5"
  }
];

let introduction_box = document.getElementById("introduction_box");
let ViewMoreButton = document.getElementById("ViewMoreButton");

for (let i = 1; i < 13; i++) {
  let introduction =
    `<div class="introduction-card">`
    + `<div class="introduction-picture">`
    + `<a href="transition/index.html?id=${i}">`
    + `<img class="members" src="./picture/members${i}.jpg">`
    + `</a>`
    + `</div>`
    + `<div class="introduction">`
    + `<p class="introduction-name">${member[i - 1].name}</p>`
    + `<p class="introduction-grade">${member[i - 1].kanji}期生</p>`
    + `</div>`
    + `</div>`;
  introduction_box.insertAdjacentHTML('beforeend', introduction);
};

function viewmore() {
  ViewMoreButton.classList.add('hide-view-more-button');
  for (let i = 13; i < 24; i++) {
    let introduction =
      `<div class="introduction-card">`
      + `<div class="introduction-picture">`
      + `<a href="transition/index.html?id=${i}">`
      + `<img class="members" src="./picture/members${i}.jpg">`
      + `</a>`
      + `</div>`
      + `<div class="introduction">`
      + `<p class="introduction-name">${member[i - 1].name}</p>`
      + `<p class="introduction-grade">${member[i - 1].kanji}期生</p>`
      + `</div>`
      + `</div>`;
    introduction_box.insertAdjacentHTML('beforeend', introduction);
  }
};

const loading = document.getElementById('loading');
const keyName = 'visited';
const keyValue = true;

if (!sessionStorage.getItem(keyName)) {
    //sessionStorageにキーと値を追加
    sessionStorage.setItem(keyName, keyValue);

    //ここに初回アクセス時の処理
    console.log("初めての訪問です");
    // loading.style.display = "none";
    setTimeout(() => {
      loading.style.display= "none";
   }, 5000);

} else {
    //ここに通常アクセス時の処理
    console.log("訪問済みです");
    loading.style.display = "none";
}
