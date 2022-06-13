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