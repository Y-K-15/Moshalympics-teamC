function GetQueryString()
{
    var result = {};
    if( 1 < window.location.search.length)
    {
        // 最初の1文字 (?記号) を除いた文字列を取得する
        var query = window.location.search.substring( 1 );

        // クエリの区切り記号 (&) で文字列を配列に分割する
        var parameters = query.split( '&' );

        for( var i = 0; i < parameters.length; i++ )
        {
            // パラメータ名とパラメータ値に分割する
            var element = parameters[ i ].split( '=' );

            var paramName = decodeURIComponent( element[ 0 ] );
            var paramValue = decodeURIComponent( element[ 1 ] );

            // パラメータ名をキーとして連想配列に追加する
            result[ paramName ] = paramValue;
        }
    }
    return result;
}
url = GetQueryString();
console.log(url["id"]);

let members = [
    {name:"rei", age:"21", introduction:"れいれいだよ"},
    {name:"kento", age:"20", introduction:"けんてぃーだよ"},
    {name:"tuyoshi", age:"19", introduction:"つよちゃんだよ"},
    {name:"momo", age:"18", introduction:"ももちだよ"},
];
const information = document.getElementById('information');

var contents = `<div>
<span class="member-tittle">member${url["id"]}</span>
<div class="member-wrapper">
    <div class="member-img-wrapper">
        <img src="../picture/members${url["id"]}.jpg" alt="" class="member-img">
    </div>
    <div class="member-information">
        <p class="">${members[url["id"]].name}</p>
        <p class="">${members[url["id"]].age}</p>
        <p class="">${members[url["id"]].introduction}</p>
        
    </div>
</div>
</div>`;

information.insertAdjacentHTML('beforeend', contents);
