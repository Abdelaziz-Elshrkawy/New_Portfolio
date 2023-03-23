import Home from "./Views/Home.js";
import Skills from "./Views/Skills.js";
import Certificates from "./Views/Certificates.js";
import { contentDiv } from "./main.js";
import data from "../Data/data.js";

const routes = {
    home: Home(),
    skills: Skills(),
    certificates: Certificates()
}
const routing = (view) => {
    contentDiv.innerHTML = routes[view]
    view === 'home' ?
        document.title = 'Portfolio'
        :
        document.title = `Portfolio-${view.charAt(0).toUpperCase()}${view.slice(1)}`
    
    // const navLinks = Array.from(document.getElementsByClassName('nav-li')).map(e => e.childNodes[0]);

    // navLinks.forEach((e,i) => {

    // })
}

//forcing home view on load
window.onload = () => {
    routing('home')
}

export default routing;