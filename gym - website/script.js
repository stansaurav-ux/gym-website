function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

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

function toggleTheme() {
  document.body.classList.toggle("light");
}
