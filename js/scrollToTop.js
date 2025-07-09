const scrollTopBT = document.getElementById('scrollTopBT');

scrollTopBT.onclick = () =>{
	scrollToTop();
}

function scrollToTop(){
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth"
	})
}