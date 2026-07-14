const slidesLectura = document.querySelectorAll('.slide-carrusel');
const izquierdaBtn = document.querySelector('.carrusel-btn.izquierda');
const derechaBtn = document.querySelector('.carrusel-btn.derecha');

let index = 0;

// Manejo de errores inicial
if (!slidesLectura.length || !izquierdaBtn || !derechaBtn) {
  console.error('Elementos del carrusel de lectura no encontrados');
}

// Carrusel de lectura
function mostrarSlide(n) {
  slidesLectura.forEach((slide, i) => {
    slide.classList.remove('activo');
    if (i === n) slide.classList.add('activo');
  });
}

if (slidesLectura.length && izquierdaBtn && derechaBtn) {
  izquierdaBtn.addEventListener('click', () => {
    index = (index - 1 + slidesLectura.length) % slidesLectura.length;
    mostrarSlide(index);
  });

  derechaBtn.addEventListener('click', () => {
    index = (index + 1) % slidesLectura.length;
    mostrarSlide(index);
  });
}

// Navegación por teclado (solo para carrusel de lectura)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    izquierdaBtn.click();
  } else if (e.key === 'ArrowRight') {
    derechaBtn.click();
  }
});

// Funciones de desplazamiento
function scrollToAgua() {
  const section = document.getElementById('info-agua');
  section?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToPropiedades() {
  const section = document.getElementById('info-propiedades');
  section?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToDensidad() {
  const section = document.getElementById('info-densidad');
  section?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToEstados() {
  const section = document.getElementById('info-estados');
  section?.scrollIntoView({ behavior: 'smooth' });
}

// Mostrar/ocultar detalle en tarjetas
function toggleDetalle(elemento) {
  const detalle = elemento.querySelector('.detalle');
  if (detalle) {
    detalle.classList.toggle('oculto');
  }
}

// Inicializar carrusel de lectura
mostrarSlide(index);