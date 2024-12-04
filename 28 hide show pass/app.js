const input = document.querySelector("input");
const eye = document.querySelector("#eye-icon");
eye.addEventListener("click", () => {
    if (input.type === "password"){
        input.type = "text"
    } else {
        input.type = "password"
    }
    // 2 ha     input.type === "password" ? (input.type = "text") : (input.type = "password")

});
