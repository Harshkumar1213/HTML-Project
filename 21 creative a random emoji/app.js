const btn = document.querySelector("#emoji");
const emoji = ["😀", "😃", "😄", "😁", "😆", "🥹", "😅", "😂", "🤣", "🥲", "😊", "😇", "🙂", "🙃", "😉", "😉", "😌", "😍", "🥰"];
btn.addEventListener("mouseover", () => {
    btn.innerHTML = emoji[Math.floor(Math.random () * emoji.length )];
});