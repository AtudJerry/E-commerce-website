const cart = document.querySelector('.cartIcon')
const closebtn = document.querySelector('.cart-close')
const page = document.querySelector('.cart')
cart.addEventListener('click',()=>{
    console.log(cart)
    page.classList.add('cart-show')
})
closebtn.addEventListener('click',()=>{
    console.log('sfdsfdsfsd')
    page.classList.remove('cart-show')
})