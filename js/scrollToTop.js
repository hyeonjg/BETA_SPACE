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

// 기존 내용에서 영어/숫자만 span으로 감싸기 자동 섞어짜기 코드 
document.querySelectorAll("p").forEach(p => {
  // 클래스가 이미 지정되어 있다면 스킵
  if (p.classList.length > 0) return;

  // 영어와 숫자를 자동 감싸기
  p.innerHTML = p.textContent.replace(
    /([A-Za-z0-9]+)/g,
    '<span class="en">$1</span>'
  );
});