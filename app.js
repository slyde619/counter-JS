// Set counter = 0
let counter = 0;

// Select all btns and value
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

// loop through each btn and add an eventListener to get the classList
btns.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    // Get classList of  each element and assign to a variable
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      // Counter decreases
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }
    // Add colors based on increase/decrease/reset value
    if (counter > 0) value.style.color = "green";
    if (counter < 0) value.style.color = "red";
    if (counter === 0) value.style.color = "#222";

    value.textContent = counter;
  });
});
