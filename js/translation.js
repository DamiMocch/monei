const translations = {
  es: {
    bienvenido: "Bienvenido",
    nosotros: "Nosotros",
    productos: "Nuestros productos",
    contactanos: "Contáctanos",
    signin: "Iniciar sesión"
  },
  en: {
    bienvenido: "Welcome",
    nosotros: "About Us",
    productos: "Our Products",
    contactanos: "Contact Us",
    signin: "Sign In"
  }
};

let currentLang = 'es';

function changeLanguage(lang) {
  // Seleccionamos todos los elementos con data-translate
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    el.textContent = translations[lang][key];
  });
}

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  changeLanguage(currentLang);
}
