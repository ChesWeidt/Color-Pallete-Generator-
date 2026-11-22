
function generateColor() {
    const randomColor = Math.floor(
        Math.random() * 16777216
    );

    return "#" + randomColor
        .toString(16)
        .padStart(6, "0");
}

// Find the button
const button = document.getElementById("generateBtn");

// Find all color blocks
const colors = document.querySelectorAll(".color");

// Listen for button clicks
button.addEventListener("click", function() {

    colors.forEach(function(color) {

        const newColor = generateColor();

        color.style.backgroundColor = newColor;
        color.textContent = newColor;

    });

});
