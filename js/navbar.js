// Selecciona todos los enlaces del navbar
const links = document.querySelectorAll('.nav-links a');

// Recorre cada enlace
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evita el salto instantáneo

    // Quita el subrayado de todos los enlaces
    links.forEach(l => l.classList.remove('active'));

    // Agrega el subrayado al enlace clicado
    link.classList.add('active');

    // Obtén el destino (id del enlace)
    const targetId = link.getAttribute('href');

    // Si el destino existe, haz scroll suave
    if (targetId && targetId.startsWith("#")) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // ajusta la posición (navbar)
          behavior: "smooth" // desplazamiento suave
        });
      }
    }
  });
});
