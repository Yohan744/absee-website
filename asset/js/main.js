const menuWrapper = document.querySelector('.menu-wrapper')
const menu = document.querySelector('#menu')

menuWrapper.onclick = () => {
    menuWrapper.classList.toggle('active')
    menu.classList.toggle('active')
}

const menuText = document.querySelectorAll('.menuText')

Array.from(menuText).forEach(text => {

    text.addEventListener("click", function() {
        console.log("click")
        menuWrapper.classList.remove('active')
        menu.classList.remove('active')
    })

})