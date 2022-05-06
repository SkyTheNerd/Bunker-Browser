function Search(){
	var q = document.getElementById("yt_term").value;
	if(q!=""){
		location.href="search.html?q="+q;
	}
}