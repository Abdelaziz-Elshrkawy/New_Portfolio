import data from '../../Data/data.json' assert {type: 'json'};

const Home = () => {
    const div = document.createElement('div');
    div.id = 'home-div'
    const img = document.createElement('img');
    img.src = '../../assets/IMG.png'
    const lottie = document.createElement('div')
    lottie.id = 'home-lottie-div'
    const intro = document.createElement('div')
    intro.id = 'intro-div'
    intro.innerHTML = '<p>Welcome to My Portfolio</P>'
    div.appendChild(lottie)
    div.appendChild(img)
    div.appendChild(intro)
    return div.outerHTML
}

export default Home;
