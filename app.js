document.addEventListener('DOMContentLoaded', () => {
    let upside = document.querySelector('#upside')
    let down = document.querySelector('#down')
    let loveOption = document.querySelector('#love')
    let happyOption = document.querySelector('#happy')
    let mehOption = document.querySelector('#meh')
    let ughOption = document.querySelector('#ugh')
    let sadOption = document.querySelector('#sad')
    let mainContainer = document.querySelector('#main-container')

    gratefulEventListener(loveOption, mainContainer)
    gratefulEventListener(happyOption, mainContainer)

    logoEventListeners(upside)
    logoEventListeners(down)

    mehOption.addEventListener('click', () => { 
        mehEventListener(mainContainer)
    })

})

function mehEventListener(mainContainer){
    mainContainer.innerHTML = "";
    let mehResponse = document.createElement('h1')
    mehResponse.innerText = `Feeling a little "meh"? We've all been there.`

    let arrowForward = document.createElement('h1')
    arrowForward.innerText = '>>'
    arrowForward.id="arrow-forward"

    mainContainer.append(mehResponse)
    mehResponse.append(arrowForward)

    arrowForward.addEventListener('click', () => {
        whatsGotYouDown(mehResponse)
    })

}

function whatsGotYouDown(mehResponse){
    mehResponse.innerText = "what's got you down?"

    let mehForm = document.createElement('form')
    mehForm.innerHTML = `
    <input type = "text" placeholder="lame thing here"></input>
    <button>store for later</button>
    <button>destroy</button>
    `


    mehResponse.append(mehForm)

}


function gratefulEventListener(option, mainContainer){
    option.addEventListener('click', () => {
        mainContainer.innerHTML = ""
        let gratefulForm = document.createElement('form')
        gratefulForm.id = 'grateful-form'
        gratefulForm.innerHTML = `
        <h1>Yay! Take a second to name five things you're grateful for.</h1>
        <input type = "text" placeholder="thing 1"></input>
        <input type = "text" placeholder="thing 2"></input>
        <input type = "text" placeholder="thing 3"></input>
        <input type = "text" placeholder="thing 4"></input>
        <input type = "text" placeholder="thing 5"></input>
        <button>LOVE BUTTON 🧡💙</button>
        `
        mainContainer.append(gratefulForm)

    })

}
function logoEventListeners(halfOfLogo){
    halfOfLogo.addEventListener('click', () => {
        headerPageRefresh()
    })
}
function headerPageRefresh(){
    window.location = 'http://localhost:3000/'
}
