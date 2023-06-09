openMenu.addEventListerner('click', () => {
    menu.style.display = 'flex'
    setTimeout(() => {
         menu.style.opacity = '1'
    })
   
}, 10)

closeMenu.addEventListerner('click', () => {
    menu.style.opacity = '0'
    menubar.removeAttribute('style')
})