function generateColor() {
  const randomColor = Math.floor(Math.random() * 16777216);

  return "#" + randomColor.toString(16).padStart(6, "0");
}

const button = document.getElementById("generateBtn");

const colors = document.querySelectorAll(".color");

button.addEventListener("click", function () {
  colors.forEach(function (color) {
    const newColor = generateColor();

    color.style.backgroundColor = newColor;
    color.textContent = newColor;
  });
});

colors.forEach(function (color) {
  color.addEventListener("click", async function () {
    const hexCode = color.textContent;

    try {
      await navigator.clipboard.writeText(hexCode);

      alert("Copied " + hexCode + "!");
    } catch (error) {
      console.log("Copy failed:", error);
    }

    color.classList.remove("animate");

    // Restart the animation
    void color.offsetWidth;

    color.classList.add("animate");
  });
});
