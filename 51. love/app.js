const main = document.querySelector(".main");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const love = document.querySelector(".love");


const mainRect = main.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () =>{
     love.innerHTML = "I Love You Too 👌:)";
});

noBtn.addEventListener("mouseover", () =>{
    const i = Math.floor(Math.random() * (mainRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (mainRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + "px";
    noBtn.style.top = j +"px";
});

