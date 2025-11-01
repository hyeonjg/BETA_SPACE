const booth1 = document.getElementById('booth_layout_1');
const booth2 = document.getElementById('booth_layout_2');
const booth3 = document.getElementById('booth_layout_3');
const FloorBT1 = document.getElementById('F1');
const FloorBT2 = document.getElementById('F2');
const FloorBT3 = document.getElementById('F3');

const TrackBT_IDT = document.getElementById('IDT');
const TrackBT_CX = document.getElementById('CX');
const TrackBT_UX = document.getElementById('UX');
const TrackBT_IL = document.getElementById('IL');
const TrackBT_ED = document.getElementById('ED');
const TrackBT_VD = document.getElementById('VD');

const IDT_grid = document.getElementById('IDT_grid');
const CX_grid = document.getElementById('CX_grid');
const UX_grid = document.getElementById('UX_grid');
const IL_grid = document.getElementById('IL_grid');
const ED_grid = document.getElementById('ED_grid');
const VD_grid = document.getElementById('VD_grid');

const FloorBTlist = [FloorBT1, FloorBT2, FloorBT3];
const TrackBTlist = [TrackBT_IDT, TrackBT_CX, TrackBT_UX, TrackBT_IL, TrackBT_ED, TrackBT_VD];

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

//track BT

IDT_grid.className = 'work_grid';
  CX_grid.className = 'hiddenobj';
  UX_grid.className = 'hiddenobj';
  IL_grid.className = 'hiddenobj';
  ED_grid.className = 'hiddenobj';
  VD_grid.className = 'hiddenobj';

TrackBT_IDT.onclick = () => {
  IDT_grid.className = 'work_grid';
  CX_grid.className = 'hiddenobj';
  UX_grid.className = 'hiddenobj';
  IL_grid.className = 'hiddenobj';
  ED_grid.className = 'hiddenobj';
  VD_grid.className = 'hiddenobj';

  TrackBTLabelList.forEach(TrackBT => {
  TrackBT.classList.remove('checkedBT');
});
  TrackBTLabelList[0].classList.add('checkedBT');
}

TrackBT_CX.onclick = () => {
  IDT_grid.className = 'hiddenobj';
  CX_grid.className = 'work_grid';
  UX_grid.className = 'hiddenobj';
  IL_grid.className = 'hiddenobj';
  ED_grid.className = 'hiddenobj';
  VD_grid.className = 'hiddenobj';

  TrackBTLabelList.forEach(TrackBT => {
  TrackBT.classList.remove('checkedBT');
});
  TrackBTLabelList[1].classList.add('checkedBT');
}

TrackBT_UX.onclick = () => {
  IDT_grid.className = 'hiddenobj';
  CX_grid.className = 'hiddenobj';
  UX_grid.className = 'work_grid';
  IL_grid.className = 'hiddenobj';
  ED_grid.className = 'hiddenobj';
  VD_grid.className = 'hiddenobj';

  TrackBTLabelList.forEach(TrackBT => {
  TrackBT.classList.remove('checkedBT');
});
  TrackBTLabelList[2].classList.add('checkedBT');
}

TrackBT_IL.onclick = () => {
  IDT_grid.className = 'hiddenobj';
  CX_grid.className = 'hiddenobj';
  UX_grid.className = 'hiddenobj';
  IL_grid.className = 'work_grid';
  ED_grid.className = 'hiddenobj';
  VD_grid.className = 'hiddenobj';

  TrackBTLabelList.forEach(TrackBT => {
  TrackBT.classList.remove('checkedBT');
});
  TrackBTLabelList[3].classList.add('checkedBT');
}

TrackBT_ED.onclick = () => {
  IDT_grid.className = 'hiddenobj';
  CX_grid.className = 'hiddenobj';
  UX_grid.className = 'hiddenobj';
  IL_grid.className = 'hiddenobj';
  ED_grid.className = 'work_grid';
  VD_grid.className = 'hiddenobj';

  TrackBTLabelList.forEach(TrackBT => {
  TrackBT.classList.remove('checkedBT');
});
  TrackBTLabelList[4].classList.add('checkedBT');
}

TrackBT_VD.onclick = () => {
  IDT_grid.className = 'hiddenobj';
  CX_grid.className = 'hiddenobj';
  UX_grid.className = 'hiddenobj';
  IL_grid.className = 'hiddenobj';
  ED_grid.className = 'hiddenobj';
  VD_grid.className = 'work_grid';

  TrackBTLabelList.forEach(TrackBT => {
  TrackBT.classList.remove('checkedBT');
});
  TrackBTLabelList[5].classList.add('checkedBT');
}







//팝업제어
const dots = document.querySelectorAll('.work_dot');
const popup = document.getElementById('work_popup');
const popupText = document.getElementById('work_text_popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupName = document.getElementById('popup-name');
const popupMsg = document.getElementById('popup-msg');

dots.forEach(dot => {
  dot.addEventListener('mouseover', () => {
    popupImg.src = dot.dataset.img;
    popupTitle.textContent = dot.dataset.title;
    popupName.textContent = dot.dataset.name;
    popup.style.display = 'block';
    popupText.style.display = 'block';

    if (popupMsg && popupMsg.style.display !== 'none') {
      popupMsg.style.display = 'none';
    }
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

