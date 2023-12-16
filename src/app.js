/* eslint-disable */
import "bootstrap";
import "./style.css";

// Array de valores de cartas
const valoresCartas = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// Array de iconos de cartas
const iconosCartas = ['&diams;', '&hearts;', '&spades;', '&clubs;'];

// Función para obtener una carta aleatoria
function obtenerCartaAleatoria() {
  const valorAleatorio = valoresCartas[Math.floor(Math.random() * valoresCartas.length)];
  const iconoAleatorio = iconosCartas[Math.floor(Math.random() * iconosCartas.length)];
  return { valor: valorAleatorio, icono: iconoAleatorio };
}

// Función para mostrar la carta
function mostrarCarta() {
  const carta = obtenerCartaAleatoria();
  document.getElementById('valorCarta').innerHTML = carta.valor;
  document.getElementById('iconoCarta').innerHTML = carta.icono;
}

// Mostrar la primera carta al cargar la página
mostrarCarta();

// Manejador de eventos para el botón
document.getElementById('btnOtraCarta').addEventListener('click', function() {
  mostrarCarta();
});

