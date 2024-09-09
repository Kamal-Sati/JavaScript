// const  changetext = function(){
//     document.querySelector("h1").innerHTML = "best JS series"
// }
// const changeme = setTimeout(changetext, 3000)

// document.querySelector("#button").addEventListener("click" , function(){
//     clearTimeout(changeme)
// } )


// document.querySelector("#btn2")
// setInterval(function(){
//     console.log("kamal")
// },2000)


// const sayDate = function(str){
//     console.log(str,Date.now());
// }
// document.querySelector("#button").addEventListener("click" , function (e) {
//     const intervalid = setInterval(sayDate, 1000, "hi");

//     document.querySelector("#btn2").addEventListener("click" , function (e) {
//         clearInterval(intervalid);
//     } ) 
// })


const startButton = document.querySelector("#btn1")
const endButton = document.querySelector("#btn2")

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalid;
const startChangingColor = function () {
    if(!intervalid){
        intervalid = setInterval(changeBG, 1000)

    }
    function changeBG() {
        document.body.style.backgroundColor = randomColor();

    }
}
const stopChangingColor = function () {
    clearInterval(intervalid);
    intervalid = null;

};
startButton.addEventListener("click", startChangingColor)


endButton.addEventListener("click", stopChangingColor)


