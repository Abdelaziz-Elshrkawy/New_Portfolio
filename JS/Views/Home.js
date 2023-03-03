const Home = () => {
    const div = document.createElement('div');
    div.id = 'home-div'
    const imgDiv = document.createElement('div')
    imgDiv.id = 'img-div-home'
    imgDiv.style.backgroundImage = `url('../../assets/IMG.png')`
    const lottie = document.createElement('div')
    lottie.id = 'home-lottie-div'
    const intro = document.createElement('div')
    intro.id = 'intro-div'
    intro.innerHTML = '<p>Welcome to My Portfolio</P>'
    const lottieIntroDiv = document.createElement('div')
    lottieIntroDiv.id = 'lottie-intro-div'
    lottieIntroDiv.append(lottie, intro)
    div.appendChild(lottieIntroDiv)
    div.appendChild(imgDiv)

    return div.outerHTML
}

export default Home;
