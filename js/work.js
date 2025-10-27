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

const FloorBTlist = [FloorBT1, FloorBT2, FloorBT3];
const TrackBTlist = [TrackBT1, TrackBT2, TrackBT3, TrackBT4, TrackBT5, TrackBT6];

const FloorBTLabelList = document.querySelectorAll('.floorBT');
const TrackBTLabelList = document.querySelectorAll('.trackBT');




FloorBT1.onclick = () => {
	booth1.style.display = 'block';
	booth2.style.display = 'none';
	booth3.style.display = 'none';

  FloorBTLabelList.forEach(FloorBT => {
  FloorBT.classList.remove('checkedBT');
});
  FloorBTLabelList[2].classList.add('checkedBT');
	
}

FloorBT2.onclick = () => {
	booth1.style.display = 'none';
	booth2.style.display = 'block';
	booth3.style.display = 'none';

  FloorBTLabelList.forEach(FloorBT => {
  FloorBT.classList.remove('checkedBT');
});
  FloorBTLabelList[1].classList.add('checkedBT');
	
}

FloorBT3.onclick = () => {
	booth1.style.display = 'none';
	booth2.style.display = 'none';
	booth3.style.display = 'block';

  FloorBTLabelList.forEach(FloorBT => {
  FloorBT.classList.remove('checkedBT');
});
  FloorBTLabelList[0].classList.add('checkedBT');
	
}






//팝업제어
const dots = document.querySelectorAll('.work_dot');
const popup = document.getElementById('work_popup');
const popupText = document.getElementById('work_text_popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupName = document.getElementById('popup-name');

dots.forEach(dot => {
  dot.addEventListener('mouseover', () => {
    popupImg.src = dot.dataset.img;
    popupTitle.textContent = dot.dataset.title;
    popupName.textContent = dot.dataset.name;
    popup.style.display = 'block';
    popupText.style.display = 'block';
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
    popupText.style.display = 'none';
  });
});

