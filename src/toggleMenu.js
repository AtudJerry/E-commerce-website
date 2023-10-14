const bar = document.querySelector(".menubar")
const menuPage = document.querySelector(".menu-overlay")
const closebtn = document.querySelector(".fa-close")
console.log('toggle')
bar.addEventListener('click',()=>{
    console.log(menuPage)
    menuPage.classList.add('show')
   

})
closebtn.addEventListener('click',()=>{
    menuPage.classList.remove('show')

})
if (menuPage.classList.contains("show")){

    window.addEventListener('click',()=>{
        menuPage.classList.remove('show')
    
    })
}