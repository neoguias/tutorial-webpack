// Importamos una imagen
import imagenSrc from './images/max-payne.png';

// Importamos un archivo SVG
import logoSrc from './images/remedy.svg';

// Importamos el archivo CSS
import './styles/main.scss';

// Declaramos una clase e JavaScript ES6
class Juego {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
  
// Creamos un juego
const juego = new Juego('Max Payne');
  
const parrafo = document.createElement('p');
parrafo.textContent = `Me encanta ${juego.nombre}.`;
  
// Creamos la cabecera
const encabezado = document.createElement('h1');
encabezado.textContent = 'El miedo le da alas a los hombres';

// Creamos la imagen
const imagen = document.createElement('img'); 
imagen.src = imagenSrc;

// Creamos el archivo SVG
const logo = document.createElement('img');
logo.setAttributeNS(null,'height','200');
logo.setAttributeNS(null,'width','200');
logo.src = logoSrc;

// Agrega el encabezado al div #root
const app = document.querySelector('#root');
app.append(encabezado, parrafo, imagen, logo);