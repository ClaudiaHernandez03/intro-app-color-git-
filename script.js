document.addEventListener("DOMContentLoaded", function() {
  const redInput = document.getElementById("redInput");
  const greenInput = document.getElementById("greenInput");
  const blueInput = document.getElementById("blueInput");
  const redRange = document.getElementById("redRange");
  const greenRange = document.getElementById("greenRange");
  const blueRange = document.getElementById("blueRange");
  const colorBox = document.getElementById("colorBox");
  const hexCode = document.getElementById("hexCode");
  const colorPicker = document.getElementById("colorPicker");

  function updateColor() {
    const colorValue = colorPicker.value;
    const red = parseInt(colorValue.substring(1, 3), 16);
    const green = parseInt(colorValue.substring(3, 5), 16);
    const blue = parseInt(colorValue.substring(5, 7), 16);

    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;
    redRange.value = red;
    greenRange.value = green;
    blueRange.value = blue;

    const hex = rgbToHex(red, green, blue);
    
    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    hexCode.innerText = `Código Hexadecimal: ${hex}`;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  colorPicker.addEventListener("input", updateColor);
  redInput.addEventListener("input", updateColor);
  greenInput.addEventListener("input", updateColor);
  blueInput.addEventListener("input", updateColor);
  redRange.addEventListener("input", updateColor);
  greenRange.addEventListener("input", updateColor);
  blueRange.addEventListener("input", updateColor);

  // Inicializar el color
  updateColor();
});
