const body = document.querySelector("body");
let button = document.querySelectorAll(".btn")
button.forEach(button => {
    button.addEventListener("click", (button) => {
        console.log("h")

        forcolor = button.target.id;
        console.log(forcolor);
        body.style.backgroundColor = forcolor;
    })
})