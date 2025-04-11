document.addEventListener("DOMContentLoaded", function () {
    let botonArriba = document.createElement("button");
    botonArriba.innerText = "↑";
    botonArriba.style.position = "fixed";
    botonArriba.style.bottom = "20px";
    botonArriba.style.right = "20px";
    botonArriba.style.background = "#007bff";
    botonArriba.style.color = "white";
    botonArriba.style.border = "none";
    botonArriba.style.padding = "10px";
    botonArriba.style.cursor = "pointer";
    document.body.appendChild(botonArriba);

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


    botonArriba.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
