// Contador de visitas
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
document.getElementById("contador").innerText = `Visitas: ${visitCount}`;

// Abrir e fechar modal
function openModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (modal) {
    modal.classList.remove("show");
  }
}

function moveCarousel(modalId, direction) {
  const modal = document.getElementById(`modal-${modalId}`);
  const carousel = modal.querySelector(".carousel");
  const items = modal.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  let currentIndex = parseInt(carousel.dataset.currentIndex) || 0;
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  carousel.dataset.currentIndex = currentIndex;
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Scroll suave
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// Botão de voltar ao topo
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 950) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Animações ao carregar os destinos
window.addEventListener("load", () => {
  const destinos = document.querySelectorAll(".destinos-container article");
  destinos.forEach((destino, index) => {
    setTimeout(() => {
      destino.style.opacity = "1";
      destino.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener("click", function (e) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
