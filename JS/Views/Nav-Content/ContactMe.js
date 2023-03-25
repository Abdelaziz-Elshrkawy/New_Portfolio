import data from "../../../Data/data.js";

const ContactMe = (parent) => {
    const contactMeDiv = document.createElement('div');
    contactMeDiv.id = 'contact-me-div';
    for (const contact in data.contactMe) {
        const anchor = document.createElement('a');
        anchor.id = contact
        if (contact === 'resume') {
            anchor.href = '#'
            anchor.addEventListener('click', (e) => {
                e.preventDefault()
                const resume = document.getElementById('resume-blur-parent')
                resume.style.opacity = '1'
                resume.style.zIndex = 999
                resume.style.display = 'block'
                resume.className = 'blur'
            })
        } else {
            anchor.addEventListener('click', (e) => { 
                e.preventDefault()
            })
            anchor.href = contact === 'email' ? `mailto:${data.contactMe[contact]}` : data.contactMe[contact]
            anchor.target = 'blank'
        }
        anchor.textContent = `${contact.charAt(0).toUpperCase()}${contact.slice(1)}`
        contactMeDiv.appendChild(anchor)
        const animation = bodymovin.loadAnimation({
            container: anchor,
            render: 'svg',
            loop: false,
            autoplay: false,
            path: `../../assets/lottie/${contact}.json`,
        })
        anchor.addEventListener('mouseenter', () => {
            animation.setDirection(1)
            animation.setSpeed(1.2)
            animation.play()
        })
        anchor.addEventListener('mouseleave', () => {
            animation.setDirection(-1)
            animation.play()
        })
    }
    parent.appendChild(contactMeDiv)
}

export default ContactMe;