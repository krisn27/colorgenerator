const colorBox = document.getElementById("colorBox");
const colorPicker = document.getElementById("colorPicker");

    colorPicker.addEventListener("change", (event) => {
      colorBox.style.backgroundColor = event.target.value;
    });