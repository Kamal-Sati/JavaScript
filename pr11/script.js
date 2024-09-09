let inputFeild = document.querySelector("#inputFeild");
let UpperCase = document.querySelector(".UpperCase");
let LowerCase = document.querySelector(".LowerCase");
let CamelCaseout = document.querySelector(".CamelCase");
let SnakeCaseout = document.querySelector(".SnakeCase");
let KebabCaseout = document.querySelector(".KebabCase");
let TrimCaseout = document.querySelector(".TrimCase");




function captilizestring(str) {
    return str[0].toUpperCase() + str.slice(1, str.length);
}
function CamelCase(str) {
    const lowerCaseString = str.toLowerCase();
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        if (i === 0) return word
        return captilizestring(word)
    })
    return finalArray.join("");
}

function SnakeCase(str) {
    const wordsArray = str.split(' ');
    return wordsArray.join('_');
}


function KebabCase(str) {
    const wordsArray = str.split(' ');
    return wordsArray.join('-');
}

function TrimCase(str) {
    const wordsArray = str.split(' ');
    return wordsArray.join('');
}

function updateScreen() {
    UpperCase.innerHTML = inputFeild.value.toUpperCase();
    LowerCase.innerHTML = inputFeild.value.toLowerCase();
    CamelCaseout.innerHTML = CamelCase(inputFeild.value);
    SnakeCaseout.innerHTML = SnakeCase(inputFeild.value);
    KebabCaseout.innerHTML = KebabCase(inputFeild.value);
    TrimCaseout.innerHTML = TrimCase(inputFeild.value);
}

updateScreen();
inputFeild.addEventListener("input", updateScreen)





