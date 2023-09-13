// Selecciona el elemento HTML con la clase "display" y lo almacena en la variable "display".
const display = document.querySelector(".display");

// Selecciona todos los elementos HTML con la clase "button" y los almacena en la variable "buttons" como un array.
const buttons = document.querySelectorAll(".button");

// Itera a través de cada botón en la colección de botones.
buttons.forEach((btn) => {
  // Agrega un event listener para el evento "click" en cada botón.
  btn.addEventListener("click", () => {
    // Obtiene el texto contenido en el botón actual y lo almacena en la variable "buttonPress".
    const buttonPress = btn.textContent;

    // Verifica si el botón presionado es "C" (borrar todo).
    if (buttonPress === "C") {
      // Restablece el contenido del elemento "display" a 0.
      display.textContent = 0;
      return;
    }

    // Verifica si el botón presionado es "←" (eliminar un carácter).
    if (buttonPress === "←") {
      // Verifica si el contenido en "display" tiene una longitud de 1 o si es "Error!".
      if (display.textContent.length === 1 || display.textContent === "Error!") {
        // Si es así, establece el contenido en "display" a "0".
        display.textContent = "0";
      } else {
        // De lo contrario, elimina el último carácter del contenido en "display".
        display.textContent = display.textContent.slice(0, -1);
      }
      return;
    }

    // Verifica si el botón presionado es "=" (evaluar la expresión).
    if (buttonPress === "=") {
      // Intenta evaluar la expresión contenida en "display" utilizando la función eval().
      try {
        display.textContent = eval(display.textContent);
      } catch {
        // Si ocurre un error durante la evaluación, establece el contenido en "display" a "Error!".
        display.textContent = "Error!";
      }
      return;
    }

    // Verifica si el contenido en "display" es "0" o "Error!".
    if (display.textContent === "0" || display.textContent === "Error!") {
      // Si es así, reemplaza el contenido en "display" con el texto del botón presionado.
      display.textContent = buttonPress;
    } else {
      // De lo contrario, agrega el texto del botón presionado al contenido existente en "display".
      display.textContent += buttonPress;
    }
  });
});
