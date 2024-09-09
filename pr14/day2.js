// const btnEl = document.getElementById("btn");
// const birthdayEl = document.getElementById("dateofBirth");
// let result;
// function calculateAge() {
//     const birthdayValue = birthdayEl.value;
//     console.log(birthdayValue);

// }
// function getAge(birthdayValue) {
//     const currentDate = new Date();
//     const birthdayDate = new Date(birthdayValue);
//     let age = currentDate.getFullYear() - birthdayDate.getFullYear();
//     const month = currentDate.getMonth() - birthdayDate.getMonth();

// }
// btnEl.addEventListener("click", calculateAge);
// console.log(calculateAge);

const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("dateofBirth");
const resultEl = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday");
    } else {
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    // if (
    //     month < 0 ||
    //     (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    // ) {
    //     age--;
    // }

    return age;
}

btnEl.addEventListener("click", calculateAge);
