//메인로고 hover 이벤트

const mainlogo_box = document.getElementById("mainlogo_box")
const mainlogo = document.getElementById("mainlogo")
const maintext_ko = document.getElementById("maintext")
const maintext_en = document.getElementById("maintext-en")


	mainlogo_box.addEventListener("mouseenter", () => {
	    mainlogo.src='img/logo_pink.png';
	    mainlogo.style.filter = "blur(20px)";
	    maintext.classList.remove("hiddenobj");
	  });

	  mainlogo_box.addEventListener("mouseleave", () => {
	    mainlogo.src='img/logo_pink.png';
	    mainlogo.style.filter = "";
	    maintext.classList.add("hiddenobj");

	  });

const toggleBT = document.getElementById('dot_bt');
const toggle_section = document.getElementById('hidden_section');

toggleBT.addEventListener('click', () => {
  toggle_section.classList.toggle('open');
  toggleBT.classList.add('hiddenobj');
});




