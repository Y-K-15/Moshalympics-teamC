function GetQueryString() {
  var result = {};
  if (1 < window.location.search.length) {
    // 最初の1文字 (?記号) を除いた文字列を取得する
    var query = window.location.search.substring(1);

    // クエリの区切り記号 (&) で文字列を配列に分割する
    var parameters = query.split("&");

    for (var i = 0; i < parameters.length; i++) {
      // パラメータ名とパラメータ値に分割する
      var element = parameters[i].split("=");

      var paramName = decodeURIComponent(element[0]);
      var paramValue = decodeURIComponent(element[1]);

      // パラメータ名をキーとして連想配列に追加する
      result[paramName] = paramValue;
    }
  }
  return result;
}
url = GetQueryString();

var member = new Object();
var member = [
  {
    name: "じん",
    grade: "父",
    kanji: "2",
  },
  { name: "こうへい", grade: "朗", kanji: "2" },
  {
    name: "ともあき",
    grade: "農",
    kanji: "2.5",
  },
  {
    name: "ことき",
    grade: "喜",
    kanji: "2.5",
  },
  {
    name: "おのかん",
    grade: "大将",
    kanji: "2",
  },
  {
    name: "ぽんた",
    grade: "匠",
    kanji: "2.5",
  },
  {
    name: "てらし",
    grade: "理",
    kanji: "2.5",
  },
  {
    name: "もも",
    grade: "才",
    kanji: "2",
  },
  {
    name: "つよし",
    grade: "強",
    kanji: "2.5",
  },
  {
    name: "まいの",
    grade: "芯",
    kanji: "2.5",
  },
  {
    name: "かずのり",
    grade: "唱",
    kanji: "2.5",
  },
  {
    name: "かずき",
    grade: "神",
    kanji: "2.5",
  },
  {
    name: "さち",
    grade: "静",
    kanji: "2",
  },
  {
    name: "みゆき",
    grade: "完璧",
    kanji: "2.5",
  },
  {
    name: "かれん",
    grade: "母",
    kanji: "2",
  },
  {
    name: "れい",
    grade: "時",
    kanji: "2",
  },
  {
    name: "えいき",
    grade: "陽",
    kanji: "2",
  },
  {
    name: "かしけん",
    grade: "Harbors",
    kanji: "2",
  },
  {
    name: "あきら",
    grade: "健康",
    kanji: "2",
  },
  {
    name: "たいき",
    grade: "中分",
    kanji: "2",
  },
  {
    name: "なおき",
    grade: "惰",
    kanji: "2",
  },
  {
    name: "けんと",
    grade: "高尚",
    kanji: "2.5",
  },
  {
    name: "りさ",
    grade: "眠",
    kanji: "2.5",
  },
];
const information = document.getElementById("information");
var contents = `
<div class="member-whole-wrapper">

<div class="member-title-wrapper">
    <a href="../index.html?view-more=${url["view-more"]}#introduction-card${url["id"]}">
    <img
    src="https://posse.anti-pattern.co.jp/img/posseLogo.png" alt="POSSEのロゴ"/>
    </a>
    <span class="member-tittle">
    member${url["id"]}
    </span>
</div>
<div class="member-wrapper">
    <div class="member-img-wrapper">
        <img src="../picture/members${url["id"]}.jpg" alt="" class="member-img">
    </div>
    <div class="member-information">
        <p class="member-information-name">${member[url["id"] - 1].name}</p>
        <p class="member-information-grade">${
          member[url["id"] - 1].kanji
        }期生</p>
        <span class="member-information-span">このメンバーを一言で表すと、、、
        <p class="member-information-kanji">${member[url["id"] - 1].grade}
        </p>
        です！
        </span>
    </div>
</div>
</div>`;

information.insertAdjacentHTML("beforeend", contents);
