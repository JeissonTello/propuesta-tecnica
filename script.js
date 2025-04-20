document.addEventListener("DOMContentLoaded", function () {
  // Crear el botón de "Scroll to Top"
  let botonArriba = document.createElement("button");
  botonArriba.innerText = "↑";
  botonArriba.id = "scrollToTopBtn"; // ID para la referencia CSS
  botonArriba.style.position = "fixed";
  botonArriba.style.bottom = "20px";
  botonArriba.style.right = "20px";
  botonArriba.style.background = "#007bff";
  botonArriba.style.color = "white";
  botonArriba.style.border = "none";
  botonArriba.style.padding = "10px";
  botonArriba.style.cursor = "pointer";
  botonArriba.style.borderRadius = "50%";
  botonArriba.style.opacity = "0.8";
  botonArriba.style.transition = "opacity 0.3s ease";
  document.body.appendChild(botonArriba);

  // Hacer que el botón de "Scroll to Top" se muestre solo cuando se hace scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      botonArriba.style.opacity = "1";
    } else {
      botonArriba.style.opacity = "0.8";
    }
  });

  // Acción del botón "Scroll to Top"
  botonArriba.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Animaciones de entrada
  gsap.from(".animated-title", {
    opacity: 0,
    y: -50,
    duration: 1,
    stagger: 0.3,
  });

  gsap.from(".animated-description", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.5,
  });

  // Detecta cuando el usuario ha hecho scroll y agrega la clase para animación
  const sections = document.querySelectorAll(".section");

  function checkVisibility() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add("animate-on-scroll", "visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Para las secciones que ya están visibles al cargar la página
});

gsap.from(".alcance-section", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out"
});

gsap.from(".feature", {
  duration: 0.8,
  opacity: 0,
  scale: 0.8,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// Animar títulos
gsap.from(".section-title", {
  duration: 1,
  y: -50,
  opacity: 0,
  stagger: 0.3
});

// Animar cards al entrar
gsap.from(".card", {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2
});

// Botón scroll to top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
