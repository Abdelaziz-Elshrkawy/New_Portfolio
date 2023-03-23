import data from "../../Data/data.js"

const Certificates = () => {
    const certificatesDivContainer = document.createElement('div')
    certificatesDivContainer.id = 'certificates-container-div'

    const lottieDiv = document.createElement('div')
    lottieDiv.id = 'certificates-lottie-div'

    const certificatesHeader = document.createElement('div')
    certificatesHeader.textContent = 'Certificates'
    certificatesHeader.id = 'certificates-header'

    certificatesDivContainer.appendChild(certificatesHeader)

    data.certificates.forEach(e => {
        const certificateDiv = document.createElement('div')
        certificateDiv.className = 'certificate'

        const nameP = document.createElement('p')
        nameP.className = 'certificate-name'
        nameP.textContent = e.name

        const dateP = document.createElement('p')
        dateP.className = 'certificate-date'
        dateP.innerHTML = `Completed on: <span>${e.date}</span>`

        const linkDiv = document.createElement('div')
        linkDiv.className = 'link-div'
        linkDiv.innerHTML = `<a href='${e.link}' target='blank'><button>Certificate Link</button></a>`

        const providerDiv = document.createElement('div');
        providerDiv.className = 'provider-div'
        providerDiv.innerHTML =
            `<p>Provided by <a href='${data.provider[0].website}' target='blank'>
            ${data.provider[0].name.toUpperCase()}
            </a> Sponsored by <a href='${data.provider[1].website}' target='blank'>
            ${data.provider[1].name.toUpperCase()}</a>
            </p>`

        const projectsDiv = document.createElement('div')
        projectsDiv.className = 'projects-div'

        const projectsString = document.createElement('p')
        projectsString.className = 'projects-string'
        projectsString.textContent = 'Projects:'
        e.projects ?
            projectsString.style.display = 'block'
            :
            projectsString.style.display = 'none'

        if (e.projects) {
            for (let project of e.projects) {
                const anchor = document.createElement('a');
                anchor.setAttribute('href', project.link)
                anchor.setAttribute('target', 'blank')
                anchor.innerHTML = `<button type="button" class="project-btn">${project.name}</button>`
                projectsDiv.appendChild(anchor);
            }
        }
        certificateDiv.append(nameP, providerDiv, dateP, linkDiv, projectsString, projectsDiv)
        certificatesDivContainer.appendChild(lottieDiv)
        certificatesDivContainer.appendChild(certificateDiv)
    })
    return certificatesDivContainer.outerHTML
}

export default Certificates;