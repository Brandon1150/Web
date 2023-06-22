// console.log("HOLA")

//Constante para seleccionar elementos
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    // Evento de limpiado de pantalla
    if (item.id == "clear") {
      display.innerText = "";
    }
    // Evento de borrado backspace
    else if (item.id == "borrar") {
      let string = display.innerText.toString();
      display.innerText = string.substring(0, string.length - 1);
    }
    // Evento de igual
    else if (display.innerText != "" && item.id == "igual") {
      display.innerText = eval(display.innerText);
    }
    // Evento igual si no hay información
    else if (display.innerText == "" && item.id == "igual") {
      display.innerText = "Coloca una operaci;on para evaluar ANIMAL";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggle = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;

themeToggle.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggle.classList.toggle("active");
  isDark = !isDark;
};
