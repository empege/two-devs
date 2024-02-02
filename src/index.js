// Styles
import './styles/main.scss';

// Assets
import logo from './assets/logo.png'

// Pages
import HTMLPage from "./pages/html/html.hbs";
import CSSPage from "./pages/css/css.hbs";

// Templates
import headerTemplate from "./components/header/header.hbs";

// JS
import './components/header/header'

// Register components
document.getElementById('HEADER').innerHTML = headerTemplate({ logo, title: 'Home' })