const buttonsList = document.querySelectorAll(".num-btn");
const display = document.querySelector(".input-value");

let input = "";
buttonsList.forEach(button => {
    button.addEventListener("click", () => {
        input += button.value;
        display.value = input;
        console.log(input);
    });
});

