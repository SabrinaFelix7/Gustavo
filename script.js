const abrirBtn = document.getElementById("abrirBtn");
const surpresa = document.getElementById("surpresa");
const inicio = document.getElementById("inicio");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const final = document.getElementById("final");
const hearts = document.getElementById("hearts");

abrirBtn.addEventListener("click", () => {
  inicio.classList.add("hidden");
  surpresa.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  criarCoracoes(18);
});

yesBtn.addEventListener("click", () => {
  surpresa.classList.add("hidden");
  final.classList.remove("hidden");
  criarCoracoes(45);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function fugir() {
  const maxX = Math.max(20, window.innerWidth - noBtn.offsetWidth - 20);
  const maxY = Math.max(20, window.innerHeight - noBtn.offsetHeight - 20);

  noBtn.style.position = "fixed";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

noBtn.addEventListener("mouseenter", fugir);
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  fugir();
});

function criarCoracao() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = ["❤️", "💗", "💕", "💖", "💘"][Math.floor(Math.random() * 5)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 25) + "px";
  heart.style.animationDuration = (5 + Math.random() * 6) + "s";

  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

function criarCoracoes(quantidade = 1) {
  for (let i = 0; i < quantidade; i++) {
    setTimeout(criarCoracao, i * 100);
  }
}

setInterval(criarCoracao, 1200);
