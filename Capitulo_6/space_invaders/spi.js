const juego = document.getElementById('juego');
const nave = document.getElementById('nave');
const vidasSpan = document.getElementById('vidas');
const puntosSpan = document.getElementById('puntos');
const gameoverDiv = document.getElementById('gameover');
const puntajeFinal = document.getElementById('puntaje-final');

let vidas = 3;
let puntos = 0;
let nivel = 1;
let maxVidas = 10;
let juegoTerminado = false;

const enemigos = [];
const disparos = [];
const disparosEnemigos = [];

// Mover nave con el mouse
document.addEventListener('mousemove', e => {
  nave.style.left = e.clientX - nave.offsetWidth / 2 + 'px';
  nave.style.top = e.clientY - nave.offsetHeight / 2 + 'px';
});

// Disparo del jugador al hacer click
document.addEventListener('click', () => {
  if (juegoTerminado) return;
  const laser = document.createElement('div');
  laser.classList.add('laser');
  laser.style.left = nave.offsetLeft + nave.offsetWidth / 2 - 2 + 'px';
  laser.style.top = nave.offsetTop + 'px';
  juego.appendChild(laser);
  disparos.push(laser);
});

// Crear enemigos
function crearEnemigo() {
  if (juegoTerminado) return;
  const enemigo = document.createElement('img');
  enemigo.src = 'naveenemiga.png';
  enemigo.classList.add('enemigo');
  enemigo.style.left = Math.random() * (window.innerWidth - 50) + 'px';
  enemigo.style.top = '-60px';
  juego.appendChild(enemigo);
  enemigos.push(enemigo);

  // Enemigo dispara cada 2.5 segundos
  const intervaloDisparo = setInterval(() => {
    if (juegoTerminado || !document.body.contains(enemigo)) {
      clearInterval(intervaloDisparo);
      return;
    }
    dispararEnemigo(enemigo);
  }, 1700);
}

// Disparo del enemigo
function dispararEnemigo(enemigo) {
  const laser = document.createElement('div');
  laser.classList.add('laser-enemigo');
  laser.style.left = enemigo.offsetLeft + enemigo.offsetWidth / 2 - 2 + 'px';
  laser.style.top = enemigo.offsetTop + enemigo.offsetHeight + 'px';
  juego.appendChild(laser);
  disparosEnemigos.push(laser);
}

// Aumentar dificultad y nivel
function aumentarNivel() {
  if (juegoTerminado) return;
  nivel++;
  if (vidas < maxVidas) vidas++;
  vidasSpan.textContent = 'Vidas: ' + vidas;
}

// Actualizar juego
function actualizarJuego() {
  if (juegoTerminado) return;

  // Mover disparos del jugador
  for (let i = disparos.length - 1; i >= 0; i--) {
    const laser = disparos[i];
    laser.style.top = laser.offsetTop - 10 + 'px';
    if (laser.offsetTop < -20) {
      laser.remove();
      disparos.splice(i, 1);
    }
  }

  // Mover disparos enemigos
  for (let i = disparosEnemigos.length - 1; i >= 0; i--) {
    const laser = disparosEnemigos[i];
    laser.style.top = laser.offsetTop + 4 + 'px';
    if (laser.offsetTop > window.innerHeight) {
      laser.remove();
      disparosEnemigos.splice(i, 1);
      continue;
    }
    if (colision(laser, nave)) {
      laser.remove();
      disparosEnemigos.splice(i, 1);
      perderVida();
    }
  }

  // Mover enemigos
  for (let i = enemigos.length - 1; i >= 0; i--) {
    const enemigo = enemigos[i];
    enemigo.style.top = enemigo.offsetTop + (2 + nivel * 0.5) + 'px';

    if (enemigo.offsetTop > window.innerHeight) {
      enemigo.remove();
      enemigos.splice(i, 1);
      perderVida();
      continue;
    }

    // Colisión con disparo del jugador
    for (let j = disparos.length - 1; j >= 0; j--) {
      const laser = disparos[j];
      if (colision(enemigo, laser)) {
        enemigo.remove();
        laser.remove();
        enemigos.splice(i, 1);
        disparos.splice(j, 1);
        puntos += 100;
        puntosSpan.textContent = 'Puntos: ' + puntos;
        break;
      }
    }
  }

  requestAnimationFrame(actualizarJuego);
}

// Colisión simple
function colision(a, b) {
  const rect1 = a.getBoundingClientRect();
  const rect2 = b.getBoundingClientRect();
  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

// Pierde vida
function perderVida() {
  vidas--;
  vidasSpan.textContent = 'Vidas: ' + vidas;
  if (vidas <= 0) {
    terminarJuego();
  }
}

// Game Over
function terminarJuego() {
  juegoTerminado = true;
  gameoverDiv.style.display = 'block';
  puntajeFinal.textContent = puntos;
}

// Reiniciar
function reiniciarJuego() {
  location.reload();
}

// Iniciar lógica
setInterval(crearEnemigo, 1500);
setInterval(aumentarNivel, 15000);
actualizarJuego();