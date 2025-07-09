//이 js 파일은 module 형식입니다. script가 아닌 module 타입으로 index.html에 연결됩니다.

import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export function setupGuestbook(db) {
  const form = document.getElementById("guestbook-form");
  const messagesList = document.getElementById("messages-list");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nickname = document.getElementById("nickname").value;
    const message = document.getElementById("message").value;

     if (containsBadWords(nickname) || containsBadWords(message)) {
      alert("부적절한 단어가 포함되어 있습니다.");
      return;
    }


    await addDoc(collection(db, "guestbook"), {
      nickname,
      message,
      createdAt: serverTimestamp()
    });

    form.reset();
    loadMessages();
  });

  async function loadMessages() {
    messagesList.innerHTML = "";
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const li = document.createElement("li");
      li.textContent = `${data.nickname} : ${data.message}`;
      messagesList.appendChild(li);
    });
  }

    function containsBadWords(text) {
    return badWords.some((word) => text.includes(word));
  }

  loadMessages();
}