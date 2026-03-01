
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile hamburger menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Typing animation
const text = "Python Full Stack Developer";
const typingEl = document.getElementById('typing-text');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingEl.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
    i++;
    setTimeout(typeWriter, 80);
  } else {
    typingEl.innerHTML = text + '<span class="cursor">|</span>';
  }
}

typeWriter();