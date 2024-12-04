let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");
let options = document.getElementsByClassName("options");

selectField.addEventListener("click", () =>{
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate")
});
 
for(options of options){
    options.onclick = function () {
        list.classList.toggle("hide");
        selectText.innerHTML = this.textContent
    }
}