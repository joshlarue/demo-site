// math.html
const numInput = document.querySelector(".num-input");
const calcOutput = document.querySelector(".calc-output");

function squared(num) {
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num;
}

numInput.addEventListener("change", () => {
    const num = parseFloat(numInput.value);
    if (isNaN(num)) {
        calcOutput.textContent = "Numbers are the only input type allowed.";
    } else {
        calcOutput.textContent = `${num} squared is ${squared(num)}.`;
        calcOutput.textContent += `${num} cubed is ${cubed(num)}.`;
        calcOutput.textContent += `${num} factorial is ${factorial(num)}.`;
    }
});