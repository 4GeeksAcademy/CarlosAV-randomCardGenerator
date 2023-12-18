/* eslint-disable */
import "bootstrap";
import "./style.css";


/////////////////////////
//                     //
//        Datos        //
//                     //
/////////////////////////

// Array con los valores (Datos)
const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const icons = ['&diams;', '&hearts;', '&spades;', '&clubs;'];
const colorMap = { '&diams;': 'text-danger', '&hearts;': 'text-danger', '&spades;': 'text-dark', '&clubs;': 'text-dark' };
/////////////////////////
//                     //
//      Funciones      //
//                     //
/////////////////////////

// Función para obtener una carta aleatoria
function getRandomCard() {
  return { value: cards[Math.floor(Math.random() * cards.length)], icon: icons[Math.floor(Math.random() * icons.length)] };
}

// Función para mostrar la carta (Ni caso a esta mosntruosidad, usad el ejemplo de Davide que es mas legible)
function mostrarCarta(card) {
  document.getElementById('cardValue').innerHTML = card.value;
  document.getElementById('iconA').innerHTML = document.getElementById('iconB').innerHTML = card.icon
  document.getElementById('iconA').className = document.getElementById('iconB').className = document.getElementById('iconA').className.replace('text-danger', '').replace('text-dark', '') + ' ' + colorMap[card.icon];
}

/////////////////////////
//                     //
//       Codigo        //
//                     //
/////////////////////////

// Mostrar la primera carta al cargar la página
mostrarCarta(getRandomCard());

// Asignamos el "onclick" a nuestra funcion
document.getElementById('btnRepeat').onclick = function() {
  mostrarCarta(getRandomCard());
};