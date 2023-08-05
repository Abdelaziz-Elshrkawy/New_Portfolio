
const animation = () => {
    const loadingPageAnimation = bodymovin.loadAnimation({
        container: document.getElementById('load'),
        render: 'svg',
        loop: true,
        autoplay: true,
        path: '../../assets/lottie/loading.json'
    })

    const skillsAnimation = bodymovin.loadAnimation({
        container: document.getElementById('skills-lottie-div'),
        render: 'svg',
        loop: true,
        autoplay: true,
        path: '../../assets/lottie/skills.json',
    })
    skillsAnimation.setSpeed(0.5)

    const certificatesAnimation = bodymovin.loadAnimation({
        container: document.getElementById('certificates-lottie-div'),
        render: 'svg',
        loop: true,
        autoplay: true,
        path: '../../assets/lottie/certificate.json',
    })
    certificatesAnimation.setSpeed(0.6)
}

export default animation;