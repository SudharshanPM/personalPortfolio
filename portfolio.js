/*---about------*/
var tabcontents=document.getElementsByClassName("contents");

function opentab(tab_name){
	for(content of tabcontents){
		content.classList.remove("active-tab");
	}
	document.getElementById(tab_name).classList.add("active-tab");
}

/*---Services------*/

