// Efecto hover en botones
const neonButtons = document.querySelectorAll('.neon-btn');

neonButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.2s ease-in-out';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});

// Mensaje al hacer clic en botones
neonButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert(`¡Has seleccionado ${button.textContent}!`);
  });
});


// Inicialización de AOS para animaciones al hacer scroll
AOS.init({
    duration: 1000,  // Duración de las animaciones en milisegundos
    once: true,      // Las animaciones solo se activan una vez
  });
  
  // Configuración de Swiper.js (Slider)
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
  