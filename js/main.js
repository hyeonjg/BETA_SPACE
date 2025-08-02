const pages = [
  document.getElementById("main"),
  document.getElementById("program"),
  document.getElementById("designer"),
  document.getElementById("work"),
  document.getElementById("message-book"),
];

const buttons = [
  document.getElementById("mainBT"),
  document.getElementById("programBT"),
  document.getElementById("designerBT"),
  document.getElementById("workBT"),
  document.getElementById("message-bookBT"),
];

const menus = document.querySelectorAll(".menu")

const booth1 = document.getElementById('booth_layout_1');
const booth2 = document.getElementById('booth_layout_2');
const booth3 = document.getElementById('booth_layout_3');
const FloorBT1 = document.getElementById('F1');
const FloorBT2 = document.getElementById('F2');
const FloorBT3 = document.getElementById('F3');
const TrackBT1 = document.getElementById('IDT');
const TrackBT2 = document.getElementById('CX');
const TrackBT3 = document.getElementById('UX');
const TrackBT4 = document.getElementById('IL');
const TrackBT5 = document.getElementById('ED');
const TrackBT6 = document.getElementById('VD');


function leftIn(element){
	element.animate(
		[{left:'-100%'}, {left: '0%'}],
		{duration: 500, easing: 'ease-in-out', fill: 'forwards'}
		);
}

function leftOut(element){
	element.animate(
		[{left:'0%'}, {left: '-110%'}],
		{duration: 500, easing: 'ease-in-out', fill: 'forwards'}
		);
}

function rightIn(element){
	element.animate(
		[{left:'100%'}, {left: '0%'}],
		{duration: 500, easing: 'ease-in-out', fill: 'forwards'}
		);
}

function rightOut(element){
	element.animate(
		[{left:'0%'}, {left: '100%'}],
		{duration: 500, easing: 'ease-in-out', fill: 'forwards'}
		);
}

let nowIndex = 0;

buttons.forEach((button, targetIndex) => {
  button.onclick = () => {
    if (nowIndex === targetIndex) return; // 같은 페이지면 무시

      buttons.forEach((b, i) => {
		    b.checked = i === targetIndex;
		  });

		  // 현재 선택된 라벨에 .selected 추가하고 나머지 제거
    document.querySelectorAll("label.menu").forEach((label) => {
      label.classList.remove("selected");
    });
    const activeLabel = document.querySelector(`label.menu[for='${buttons[targetIndex].id}']`);
    if (activeLabel) activeLabel.classList.add("selected");
    //

    const currentPage = pages[nowIndex];
    const targetPage = pages[targetIndex];

    if (targetIndex > nowIndex) {
    	scrollToTop();
      leftOut(currentPage);
      rightIn(targetPage);
    } else {
    	scrollToTop();
      rightOut(currentPage);
      leftIn(targetPage);
    }

    // 다른 페이지는 위치 초기화 (겹침 방지)
    pages.forEach((page, i) => {
	  if (i !== nowIndex && i !== targetIndex) {
	    page.style.left = '150%'; //완전히 화면 밖으로 제거
	  }

	  if (targetIndex == 3){
	  	scrollTopBT.style.display = 'none';
	  }
	  if (targetIndex != 3){
	  	scrollTopBT.style.display = 'block';
	  }
	});

    // ✅ 배경색 처리
		  const body = document.body;
		  if (targetPage.id === "message-book") {
		    body.classList.remove("main-mode");
		    body.classList.add("message-mode");
		    scrollTopBT.src="./img/scrollTopBT_B.png";
		   	for (const menu of menus) {
				menu.classList.remove('t-pink');
}
		  } 
		  else if(targetPage.id ==="main"){
		  	body.classList.remove("message-mode");
		  	body.classList.add("main-mode");
		  	scrollTopBT.src="./img/scrollTopBT.png";
		  	for (const menu of menus) {
				menu.classList.add('t-pink');
}
		  }
		  else {
		    body.classList.remove("message-mode");
		    body.classList.remove("main-mode");
		    scrollTopBT.src="./img/scrollTopBT_B.png";
		    for (const menu of menus) {
				menu.classList.remove('t-pink');
}

		  }

    nowIndex = targetIndex;
  };
});




//panzoom을 zoomInstace 변수에 담고 프로퍼티를 설정합니다. = 즉시 panzoom 실행
const zoomInstance = panzoom(booth3, {
  maxZoom: 4.5,
  minZoom: 0.5
});

FloorBT1.onclick = () => {
	booth1.style.display = 'block';
	booth2.style.display = 'none';
	booth3.style.display = 'none';
	const zoomInstance= panzoom(booth1,{
		maxZoom: 4.5,
		minZoom: 0.5
	});
}

FloorBT2.onclick = () => {
	booth1.style.display = 'none';
	booth2.style.display = 'block';
	booth3.style.display = 'none';
	const zoomInstance= panzoom(booth2,{
		maxZoom: 4.5,
		minZoom: 0.5
	});
}

FloorBT3.onclick = () => {
	booth1.style.display = 'none';
	booth2.style.display = 'none';
	booth3.style.display = 'block';
	const zoomInstance= panzoom(booth3,{
		maxZoom: 4.5,
		minZoom: 0.5
	});
}


document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("main-mode");
});



//아래 스크롤 방지

  const limit = 2100; // px 기준
  let locked = false;

  window.addEventListener("scroll", () => {
    if (window.scrollY > limit && !locked) {
      document.body.style.overflow = "hidden"; // 스크롤 막기
      locked = true;

      // 현재 위치 유지 (스크롤 막히기 전에 마지막 위치 유지)
      window.scrollTo(0, limit);
    }

    // 다시 limit보다 위로 올라오면 스크롤 해제
    if (window.scrollY <= limit && locked) {
      document.body.style.overflow = "auto"; // 다시 스크롤 가능
      locked = false;
    }
  });


//메인로고 hover 이벤트

const mainlogo_box = document.getElementById("mainlogo_box")
const mainlogo = document.getElementById("mainlogo")
const maintext_ko = document.getElementById("maintext")
const maintext_en = document.getElementById("maintext-en")


	mainlogo_box.addEventListener("mouseenter", () => {
	    mainlogo.src='./img/logo_pink.png';
	    mainlogo.style.filter = "blur(20px)";
	    maintext.classList.remove("hiddenobj");
	  });

	  mainlogo_box.addEventListener("mouseleave", () => {
	    mainlogo.src='./img/logo_pink.png';
	    mainlogo.style.filter = "";
	    maintext.classList.add("hiddenobj");

	  });


//html 조각 불러오기

	  fetch('designer_list.html')
	  .then(res => res.text())
	  .then(html => {
	  	document.getElementById('designer_list').innerHTML = html
	  });