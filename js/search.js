const urlq = new URLSearchParams(window.location.search);
const q = urlq.get("q");
//alert("hello world!")
alert("search.js says: "+q)
function handleData(d){
	const vm = "search_metadata";
	document.getElementById("seterm").textContent = `Searched for ${d[vm]["query"]}, corrected to ${d[vm]["corrected_query"]}, ${d[vm]["estimated_results"]} results`;
	const v = d["videos"];
	for(var i in v){
		var div = document.createElement("div");
		div.setAttribute("onclick", `location.href="watch.html?id=${v[i]["id"]}"`);
		div.innerHTML = `<h4>${v[i]["title"]}</h4><p class="vdesc">${v[i]["description"]}</p><p class="sub_d">${v[i]["author"]} - ${v[i]["metadata"]["published"]} - ${v[i]["metadata"]["duration"]["simple_text"]}</p>`;
		document.getElementById("vwrap").appendChild(div);
	}
}