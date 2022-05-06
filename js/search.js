const urlq = new URLSearchParams(window.location.search);
const q = urlq.get("q");
//alert("hello world!")
window.onload = function() {  
	document.getElementById('query').innerHTML = "https://www.bing.com/search?q="+q;
};

