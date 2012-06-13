// ==UserScript==
// @name           joyportAutoLogin
// @namespace      http://twitter.com/jir_o
// @description    AutoLogin for joyport
// @include        https://joyport.inf.in.shizuoka.ac.jp/
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.1/jquery.min.js
// ==/UserScript==


(function inputID(){
    if(GM_getValue("joyport_id") == undefined){
	hoge1 = prompt("input your id(ex.ia10XXX)","");
	GM_setValue("joyport_id", hoge1);
    }
})();

(function inputPASS(){
    if(GM_getValue("joyport_pass") == undefined){
	hoge2 = prompt("input your password","");
	GM_setValue("joyport_pass", hoge2);
    }
})();



$(document).ready(function() {
    document.forms.login_form_4858.elements.login_id.value=GM_getValue("joyport_id");
    document.forms.login_form_4858.elements.password.value=GM_getValue("joyport_pass");
    document.forms.login_form_4858.submit();
})();

