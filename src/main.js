import { testUtilFoo } from "./utils";
import './styles/main.scss';
import logo from './assets/logo.png'

const h1 = document.getElementsByTagName('h1')[0];
h1.innerText = "THIS IS NEW INNER TEXT!"
testUtilFoo()
console.log(logo)
const img = document.getElementsByTagName('img')[0];
img.src = logo;