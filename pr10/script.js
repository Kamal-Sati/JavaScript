let decrement = document.querySelector("#decrement");
let increment = document.querySelector("#increment");
let showResult = document.querySelector("#showResult");
let inputField = document.querySelector("#inputfild")
let Reset = document.querySelector("#Reset");


decrement.addEventListener('click', function () {
    const countValue = parseInt(showResult.innerHTML)
    const inputResult = parseInt(inputField.value);
    showResult.innerHTML = countValue - inputResult
})


increment.addEventListener('click', function () {
    const countValue = parseInt(showResult.innerHTML)
    const inputResult = parseInt(inputField.value);
    showResult.innerHTML = countValue + inputResult
})

Reset.addEventListener('click', function () {
    showResult.innerHTML = "0"
})