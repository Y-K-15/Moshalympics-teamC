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
    kanji: "父",
    grade: "2",
  },
  { name: "こうへい", kanji: "朗", grade: "2" },
  {
    name: "ともあき",
    kanji: "農",
    grade: "2.5",
  },
  {
    name: "ことき",
    kanji: "喜",
    grade: "2.5",
  },
  {
    name: "おのかん",
    kanji: "大将",
    grade: "2",
  },
  {
    name: "ぽんた",
    kanji: "匠",
    grade: "2.5",
  },
  {
    name: "てらし",
    kanji: "理",
    grade: "2.5",
  },
  {
    name: "もも",
    kanji: "才",
    grade: "2",
  },
  {
    name: "つよし",
    kanji: "強",
    grade: "2.5",
  },
  {
    name: "まいの",
    kanji: "芯",
    grade: "2.5",
  },
  {
    name: "かずのり",
    kanji: "唱",
    grade: "2.5",
  },
  {
    name: "かずき",
    kanji: "神",
    grade: "2.5",
  },
  {
    name: "さち",
    kanji: "静",
    grade: "2",
  },
  {
    name: "みゆき",
    kanji: "完璧",
    grade: "2.5",
  },
  {
    name: "かれん",
    kanji: "母",
    grade: "2",
  },
  {
    name: "れい",
    kanji: "時",
    grade: "2",
  },
  {
    name: "えいき",
    kanji: "陽",
    grade: "2",
  },
  {
    name: "かしけん",
    kanji: "Harbors",
    grade: "2",
  },
  {
    name: "あきら",
    kanji: "健康",
    grade: "2",
  },
  {
    name: "たいき",
    kanji: "中分",
    grade: "2",
  },
  {
    name: "なおき",
    kanji: "情",
    grade: "2",
  },
  {
    name: "けんと",
    kanji: "高尚",
    grade: "2.5",
  },
  {
    name: "りさ",
    kanji: "眠",
    grade: "2.5",
  },
];
const information = document.getElementById("information");
var contents = `
<div class="member-whole-wrapper">

<div class="member-title-wrapper">
    <a href="../index.html?view-more=${url["view-more"]}#introduction-card${
  url["id"]
}">
    <img
    src="https://posse.anti-pattern.co.jp/img/posseLogo.png" alt="POSSEのロゴ"/>
    </a>
    <span class="member-title">
    member${url["id"]}
    </span>
</div>
<div class="member-wrapper">
    <div class="member-img-wrapper">
        <img src="../picture/members${url["id"]}.jpg" alt="" class="member-img">
    </div>
    <div class="member-information">
        <p class="member-information-name">${member[url["id"] - 1].name}</p>
        <p class="member-information-kanji">${
          member[url["id"] - 1].grade
        }期生</p>
        <span class="member-information-span">このメンバーを一言で表すと、、、
        <p class="member-information-grade">${member[url["id"] - 1].kanji}
        </p>
        です！
        </span>
    </div>
</div>
</div>`;

information.insertAdjacentHTML("beforeend", contents);
