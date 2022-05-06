function Search(){
	var q = document.getElementById("yt_term").value;
	alert('If you see this, You are problary a beta tester!')
	alert('This is what you searched up!')
	if(q!=""){
		location.href="search.html?q="+q;
	}
}