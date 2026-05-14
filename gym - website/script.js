function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// Single clean openModal function
function openModal(img, name, role, desc) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = img;
  document.getElementById("modal-name").innerText = name || "";
  document.getElementById("modal-role").innerText = role || "";
  document.getElementById("modal-desc").innerText = desc || "";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Scroll animation
const elements = document.querySelectorAll("section, .card, .trainer-card, .program-card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
elements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

function toggleTheme() {
  document.body.classList.toggle("light");
}
const cards = document.querySelectorAll('.card, .trainer-card, .program-card');

cards.forEach(card => {
  card.addEventListener('touchstart', () => {
    card.style.transform = 'translateY(-10px)';
  });
  card.addEventListener('touchend', () => {
    card.style.transform = 'translateY(0)';
  });
});
