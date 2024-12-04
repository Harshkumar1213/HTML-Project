let images = document.querySelectorAll("img");
let Wrapper = document.getElementById("Wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(`img${index}.jpg`);
    });
});

close.addEventListener("click", ()=> (Wrapper.style.display = "none"))

function openModal(pic){
    Wrapper.style.display = "flex";
    imgWrapper.src = pic;
}


