const Home = () => {
    const div = document.createElement('div');
    div.id = 'home-div'
    const imgDiv = document.createElement('div')
    imgDiv.id = 'img-div-home'
    imgDiv.style.backgroundImage = `url('../../assets/IMG.png')`
    const intro = document.createElement('div')
    intro.id = 'intro-div'
    intro.innerHTML = '<p>Welcome to My Portfolio</P>'

    div.appendChild(imgDiv)
    div.appendChild(intro)

    return div.outerHTML
}

export default Home;
