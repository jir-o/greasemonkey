// ==UserScript==
// @name           gakujoAutologin
// @namespace      http://twitter.com/jir_o
// @description    AutoLogin for Gakujo-system.
// @include        https://gakujo.shizuoka.ac.jp/portal/init.do?userDivision=2&locale=ja
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.1/jquery.min.js
// ==/UserScript==


(function inputID(){
	if(GM_getValue("gakuban") == undefined){
		hoge1 = prompt("input your id(ex.70XXXXXXX)","");
		GM_setValue("gakuban", hoge1);
	}
})();

(function inputPASS(){
		if(GM_getValue("pass") == undefined){
		hoge2 = prompt("input your password","");
		GM_setValue("pass", hoge2);
		}
})();

$("img").remove();
$("html > body.main > div#container > form > table > tbody > tr > td >input").attr("src", "null");
$("html > head > link").attr({type:"null", href:"null", rel:"null"});
//$("link").remove();

$(document).ready(function() {
	document.getElementsByName("loginID")[0].value=GM_getValue("gakuban");
	document.getElementsByName("password")[0].value=GM_getValue("pass");
	document.getElementsByName("loginForm")[0].submit();
})();

