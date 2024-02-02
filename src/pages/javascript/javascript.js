// Styles
import '../../styles/main.scss';

// Assets
import logo from '../../assets/logo.png'

// Templates
import headerTemplate from "../../components/header/header.hbs";

// JS
import '../../components/header/header'

// Register components
document.getElementById('HEADER').innerHTML = headerTemplate({ logo, title: 'Javascript' })