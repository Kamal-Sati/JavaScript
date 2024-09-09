
document.getElementById("btn").addEventListener('click', (e) => {
    e.preventDefault();
    var bill = Number(document.getElementById("bill").value);
    var tip = Number (document.getElementById("tip").value);
    var para = document.getElementById("para2");
    console.log(bill);
    console.log(tip);
    // console.log("kamal");
   let result1 = bill + (bill)/ (tip);
  
   console.log(result1);
   para.innerHTML = ` Total:  ${result1} .00`;
});

