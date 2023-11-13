document.getElementById("bold").addEventListener("click", function () {
  const textArea = document.getElementById("textField");
  textArea.style.fontWeight = "bold";
});

document.getElementById("italic").addEventListener("click", function () {
  const textArea = document.getElementById("textField");
  textArea.style.fontStyle = "italic";
});
document.getElementById("underline").addEventListener("click", function () {
  const textArea = document.getElementById("textField");
  textArea.style.textDecoration = "underline";
});

document.getElementById("left").addEventListener("click", function () {
  const textArea = document.getElementById("textField");
  textArea.style.textAlign = "left";
});
document.getElementById("center").addEventListener("click", function () {
  const textArea = document.getElementById("textField");
  textArea.style.textAlign = "center";
});
document.getElementById("right").addEventListener("click", function () {
  const textArea = document.getElementById("textField");
  textArea.style.textAlign = "right";
});
document.getElementById("justify").addEventListener("click", function () {
  const textArea = document.getElementById("textField");
  textArea.style.textAlign = "justify";
});

document.getElementById("letter").addEventListener("click", function () {
  const textArea = document.getElementById("textField");
  textArea.style.textTransform = "uppercase";
});

const font = document.getElementById("fontSizeInput");
font.addEventListener("input", function () {
  const textArea = document.getElementById("textField");
  textArea.style.fontSize = font.value + "px";
});

const colorPlate = document.getElementById("color");
color.addEventListener("input", function () {
  const textArea = document.getElementById("textField");
  textArea.style.color = color.value;
});
