// const clock = document.getElementById("clock").addEventListener("click", samay) 

//     function samay() {
//         setInterval(function (){
//     let date = new Date()
//     let result = (date.toLocaleTimeString());
    
//     console.log(date);
//     document.querySelector("#ans").innerHTML = result;
//         },1000)
    
// }
const clock = document.getElementById("clock");
setInterval(function () {
let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
}, 1000);