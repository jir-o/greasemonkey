// ==UserScript==
// @name           gakujoAutoLogin
// @namespace      http://twitter.com/jir_o
// @description    AutoLogin for joyport
// @include        https://joyport.inf.in.shizuoka.ac.jp/
// ==/UserScript==


(function inputID(){
	if(GM_getValue("joyport_id") == undefined){
		hoge1 = prompt("input your id(ex.70XXXXXXX)","");
		GM_setValue("joyport_id", hoge1);
	}
})();

(function inputPASS(){
		if(GM_getValue("joyport_pass") == undefined){
		hoge2 = prompt("input your password","");
		GM_setValue("joyport_pass", hoge2);
		}
})();



javascript:(function(){
document.forms.login_form_4858.elements.login_id.value=GM_getValue("joyport_id");
document.forms.login_form_4858.elements.password.value=GM_getValue("joyport_pass");
document.forms.login_form_4858.submit();
})();

