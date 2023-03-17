import data from "../../Data/data.js"

const Skills = () => {
    const skillsDiv = document.createElement('div')
    skillsDiv.id = 'skills-div'
    const style = document.createElement('style')
    let finalStyle = ''
    const lottieDiv = document.createElement('div')
    lottieDiv.id = 'skills-lottie-div'
    data.skills.forEach((e, i) => {
        const div = document.createElement('div')
        div.className = 'skill'
        div.id = e.name === 'node.js' || e.name === 'express.js' ? e.name.slice(0, -3) : e.name

        const imgDiv = document.createElement('div')
        imgDiv.className = 'skill-img-div'
        imgDiv.style.backgroundImage = `url(${e.logo})`

        const textP = document.createElement('p')
        textP.className = 'text-p'
        textP.textContent = e.name === 'html' || e.name === 'css' ?
            `${e.name.toUpperCase()}` :
            `${e.name.charAt(0).toUpperCase()}${e.name.slice(1)}`


        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        svg.style.color = 'white'
        svg.setAttribute('viewBox', '0 0 36 36')
        svg.classList.add('circular-chart')

        const path = document.createElement('path');
        path.className = 'circle'
        path.setAttribute('stroke-dasharray', `${e.percent.slice(0, -1)}, 100`)
        path.setAttribute('d', 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831')
        svg.appendChild(path)

        const styleText = `.img-div:nth-child(${i + 1}){
            animation-delay: ${Math.random(0.01).toFixed(3)}s;
        };`

        finalStyle += styleText
        style.innerHTML = finalStyle
        document.body.append(style)

        div.appendChild(svg)

        div.appendChild(imgDiv)
        div.appendChild(textP)
        skillsDiv.appendChild(div)
    })
    skillsDiv.appendChild(lottieDiv)
    return skillsDiv.outerHTML
}
export default Skills;


/* <svg viewBox="0 0 36 36" class="circular-chart">
        <path class="circle" stroke-dasharray="90, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
    </svg> */