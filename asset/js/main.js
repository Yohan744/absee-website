const menuWrapper = document.querySelector('.menu-wrapper')
const menu = document.querySelector('#menu')
const body = document.querySelector('body')

menuWrapper.onclick = () => {
    menuWrapper.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('activeMenu')
}

const menuText = document.querySelectorAll('.menuText')

Array.from(menuText).forEach(text => {

    text.addEventListener("click", function() {
        menuWrapper.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('activeMenu')
    })

})


function changeBackground() {

    const firstSectionBackground = document.querySelector('#firstSectionBackground'),
        style = window.getComputedStyle(firstSectionBackground),
        background = style.getPropertyValue('background-color')

    const textHome = document.querySelector(".underline")

    if (background === "rgb(29, 90, 252)") {
        setTimeout(() => {
            console.log("orange")
            textHome.classList.toggle('transition')
            setTimeout(() => {
                firstSectionBackground.style.backgroundColor = "rgb(253, 68, 7)"
                textHome.innerHTML = `de chez soi`
            }, 300)
            changeBackground()
        }, 3000)
    }

    if (background === "rgb(253, 68, 7)") {
        setTimeout(() => {
            console.log("pink")
            textHome.classList.toggle('transition')
            setTimeout(() => {
                firstSectionBackground.style.backgroundColor = "rgb(255, 127, 223)"
                textHome.innerHTML = `en autonomie`
            }, 300)
            changeBackground()
        }, 3000)
    }

    if (background === "rgb(255, 127, 223)") {
        setTimeout(() => {
            console.log("blue")
            textHome.classList.toggle('transition')
            setTimeout(() => {
                firstSectionBackground.style.backgroundColor = "rgb(29, 90, 252)"
                textHome.innerHTML = `à son rythme`
            }, 300)
            changeBackground()
        }, 3000)
    }

}

changeBackground()

