import data from '../../../Data/data.js';
import routing from '../../routing.js';
import animation from '../../Animation/lottie_animation.js';
// nav bar content 
const NavContent = (parent) => {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    data.sections.forEach((e, i) => { 
        const li = document.createElement('li');
        li.className = 'nav-li'
        const anchor = document.createElement('a');
        anchor.className = 'nav-link'
        anchor.textContent = data.intro[i]
        anchor.name = e
        anchor.id = e
        anchor.addEventListener('mouseenter', () => {
            anchor.textContent = `${e.charAt(0).toUpperCase()}${e.slice(1)}`
        })
        anchor.addEventListener('mouseleave', () => {
            anchor.textContent = data.intro[i]
        })

        anchor.addEventListener('click', (event) => {
            const containerID = document.getElementById('content').childNodes[0].id.split('-')[0]
            if (containerID && containerID !== event.target.name) {
                routing(event.target.name)
                animation()
            }
        })
        li.appendChild(anchor)
        ul.appendChild(li)
    })
    nav.appendChild(ul)
    parent.appendChild(nav)
}

export default NavContent