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

    botonArriba.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
