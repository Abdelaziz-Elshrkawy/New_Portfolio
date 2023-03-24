import data from "../../Data/data.js";
import { root } from "../main.js";


const Resume = () => {
    const blurParent = document.createElement('div')
    blurParent.id = 'resume-blur-parent'
    const resumeContainer = document.createElement('div')

    
    resumeContainer.id = 'resume-container'
    resumeContainer.innerHTML =
        `<iframe src="https://drive.google.com/file/d/${data.contactMe.resume}/preview" 
        width="100%" height="100%" allow="autoplay"></iframe>`
    
    // download resume
    const anchor = document.createElement('a')
    anchor.id = 'resume-download-anchor'
    anchor.target = 'blank'
    anchor.href = `https://drive.google.com/uc?id=${data.contactMe.resume}&export=download`
    const downloadButton = document.createElement('button')
    downloadButton.textContent = 'Download'
    anchor.appendChild(downloadButton)
    resumeContainer.appendChild(anchor)

    blurParent.addEventListener('click', (e) => {
        if (e.target.id !== resumeContainer.id) {
            blurParent.style.display = 'none'
            blurParent.classList.remove('blur')
        }
    })
    blurParent.appendChild(resumeContainer)
    document.body.append(blurParent)
}

export default Resume