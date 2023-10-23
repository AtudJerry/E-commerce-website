import './src/toggleMenu.js'
import './src/toggleCart.js'
import fetchProducts from './src/fetchProducts.js'
import { store } from './src/store.js'
import { products } from './src/store.js'
const URL = 'https://course-api.com/javascript-store-products'
const func = async()=>{
    const data = await fetchProducts(URL)
    // console.log(data)


    products(data)
    const featured = store.filter( (product)=>{
        product.featured ===true
        // if(product.featured){
        //     const parent= document.querySelector('.featured')
        //     parent.innerHTML =   `  <div class="cards">
        //     <div class="card">
        //       <img class="featuredImages" src=${product.image}>
        //       <p class="productName">nice fruit</p>
        //       <p class="price">$87</p>
            
      
        //       <div class="productIcons">
        //         <div class="background1">
        //           <p class="pIcon"> <i class="fa fa-search "></i></p>
          
        //         </div>
          
        //         <div class="background2">
        //           <p class="pIcon"> <i class="fa fa-shopping-cart"></i></p>
          
        //         </div>
          
        //       </div>
        //     </div>`
          

        // } 
        
        
    })
    console.log(featured)
    // console.log(featured)
    return featured






}

window.addEventListener("DOMContentLoaded",()=>{
    func()
    // console.log(lis)

})
