const menuHamburguesa = document.getElementById('menuHamburguesa');
const menuLateral = document.getElementById('menuLateral');
const overlay = document.getElementById('overlay');

menuHamburguesa.addEventListener('click', () => {
  menuLateral.classList.add('activo');
  overlay.classList.add('activo');
  document.body.classList.add('no-scroll');
});

overlay.addEventListener('click', () => {
  menuLateral.classList.remove('activo');
  overlay.classList.remove('activo');
  document.body.classList.remove('no-scroll');
});
