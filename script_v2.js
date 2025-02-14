const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");



function crearCorazon() {
    const burbujas = document.querySelector(".burbujas");
    const corazon = document.createElement("div");
    corazon.classList.add("emoji-corazon");
    corazon.innerHTML = "❤️🍰" ;  // Puedes cambiarlo por 💕, 💖, 💘, etc.

    // Posición aleatoria en la pantalla
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 2 + 3 + "s"; // Entre 3s y 5s

    burbujas.appendChild(corazon);

    // Elimina el corazón después de que termine la animación
    setTimeout(() => {
        corazon.remove();
    }, 5000);
}
// Crear corazones cada 500ms
setInterval(crearCorazon, 500);



document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
    
})