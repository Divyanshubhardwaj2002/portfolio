// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// Typing effect
const text = "Hi, I'm Divyanshu Bhardwaj";
let i = 0;
const speed = 70;
const typewriter = document.getElementById("typewriter");

function type() {
  if (i < text.length) {
    typewriter.textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
type();

// AOS animation
AOS.init({
  duration: 1000,
  once: true,
});
