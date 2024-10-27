document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typewriter-text");
  const contentSections = document.getElementById("content-sections");
  const about = document.querySelector(".about");
  const text = textElement.innerHTML;
  textElement.innerHTML = "";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 20);
    } else {
      contentSections.style.display = "block";
      about.style.animation = "fadeIn 3s"; // Apply fade-in animation to about section
      about.style.backgroundColor = "#4bceec"; // Change background to yellow
      about.style.color = "#ffffff"; // Change text color to blue
    }
  }

  typeWriter();
});
let dorayaki = document.getElementById("dorayaki");

dorayaki.addEventListener("click", function () {
  window.location.href = "https://vi.wikipedia.org/wiki/Dorayaki";
});