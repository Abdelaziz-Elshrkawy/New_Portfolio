import Home from "./Views/Home.js";
import Skills from "./Views/Skills.js";
import Certificates from "./Views/Certificates.js";
import { contentDiv } from "./main.js";

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
}

//forcing home view on load
window.onload = () => {
    routing('home')
}

export default routing;