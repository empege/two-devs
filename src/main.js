import { Log } from './utils/helpers'
import './styles/main.scss';
import logo from './assets/logo.png'
import testHbs from "./test.hbs";

const h1 = document.getElementsByTagName('h1')[0];
h1.innerText = "THIS IS NEW INNER TEXT!"

Log('Success', 'success')
Log('Info', 'info')
Log('Error', 'error')
Log('Warning', 'warning')

console.log(logo)
const img = document.getElementsByTagName('img')[0];
img.src = logo;

const testHbsEl = document.getElementById('testHbs')
testHbsEl.innerHTML = testHbs()