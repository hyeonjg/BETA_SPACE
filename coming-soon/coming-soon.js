const downImg = document.getElementById("down");

window.addEventListener('scroll', () => {
  const n = 200; // 남은 스크롤 px 기준
  const scrollTop = window.scrollY; // 현재 스크롤 위치
  const docHeight = document.documentElement.scrollHeight; // 문서 전체 높이
  const windowHeight = window.innerHeight; // 현재 창 높이

  const remainingScroll = docHeight - (scrollTop + windowHeight); // 남은 스크롤 양

  if (remainingScroll <= n) {
    downImg.classList.add('hiddenobj'); // n px 이하일 때 숨김 클래스 추가
  } else {
    downImg.classList.remove('hiddenobj'); // n px 이상일 때 다시 보이게
  }
});
