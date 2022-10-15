import 'regenerator-runtime';
import '../styles/main.css';
import './views/component/appBar';
import swRegister from './utils/swRegister';
import Main from './views/main';

const main = new Main({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  main.renderPage();
});

window.addEventListener('load', () => {
  main.renderPage();
  swRegister();
});
