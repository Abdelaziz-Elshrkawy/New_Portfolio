import NavContent from "./Views/Nav-Content/Nav.js";
import ContactMe from "./Views/Nav-Content/ContactMe.js";
import animation from "./Animation/lottie_animation.js";
import Resume from "./Views/Resume.js";





// adding nav and content div
const root = document.getElementById('root')
root.style.display = 'none'
const navDiv = document.createElement('div')
navDiv.id = 'nav'
const contentDiv = document.createElement('div')
contentDiv.id = 'content'
document.body.insertBefore(navDiv, root)
navDiv.style.display = 'none'
root.appendChild(contentDiv)

//appending nav to navDiv
NavContent(navDiv)
//appending contactMe to navDiv
ContactMe(navDiv)

Resume()


document.addEventListener('DOMContentLoaded', () => {
    const loaderContainer = document.createElement('div')
    loaderContainer.id = 'load-container'
    const loadDiv = document.createElement('div')
    loadDiv.id = 'load'
    const loadText = document.createElement('p')
    loadText.id = 'load-text'
    loadText.innerHTML = 'My Portfolio is Loading <span class="loading-dot" id="dot1">.</span><span class="loading-dot" id="dot2">.</span><span class="loading-dot" id="dot1">.</span>'
    loaderContainer.appendChild(loadDiv)
    loaderContainer.appendChild(loadText)
    document.body.prepend(loaderContainer)
    //removing the loading element
    setTimeout( async() => {
        root.style.display = 'flex'
        navDiv.style.display = 'flex'
        document.body.removeChild(loaderContainer)
    }, 2000)
    animation()
})

export { contentDiv, root };


