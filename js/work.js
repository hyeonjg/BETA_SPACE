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



//팝업제어
const dots = document.querySelectorAll('.work_dot');
const popup = document.getElementById('work_popup');
const popupImg = document.getElementById('popup-img');
const popupText = document.getElementById('popup-text');

dots.forEach(dot => {
  dot.addEventListener('mouseover', () => {
    popupImg.src = dot.dataset.img;
    popupText.textContent = dot.dataset.desc;
    popup.style.display = 'block';
  });

  dot.addEventListener('mousemove', e => {
    const padding = 15; // 마우스와 간격
    const popupRect = popup.getBoundingClientRect();
    let left = e.clientX + padding;
    let top  = e.clientY + padding;

    // 화면 하단으로 튀어나갈 경우 → 위쪽에 표시
    if (e.clientY + popupRect.height + padding > window.innerHeight) {
      top = e.clientY - popupRect.height - padding;
    }

    // 화면 오른쪽으로 튀어나갈 경우 → 왼쪽에 표시
    if (e.clientX + popupRect.width + padding > window.innerWidth) {
      left = e.clientX - popupRect.width - padding;
    }

    popup.style.left = left + 'px';
    popup.style.top  = top + 'px';
  });

  dot.addEventListener('mouseout', () => {
    popup.style.display = 'none';
  });
});

