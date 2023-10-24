import setupCard from "./setupCard.js"
const displayProducts = (list)=>{
    const prod = list.map( (item)=>{
        return `<div class="card">
        <img class="featuredImages" src=${item.image}>
        <p class="productName">${item.name}</p>
        <p class="price">$${item.price/100}</p>
      

        <div class="productIcons">
          <div class="background1">
            <p class="pIcon"> <a href="product.html?id=${item.id}"><i class="fa fa-search "></i></a> </p>
    
          </div>
    
          <div class="background2">
            <p class="pIcon">   <button class="cardBut" data-id="${item.id}" ><i class="fa fa-shopping-cart" ></i></button></p>
    
          </div>
    
        </div>
      </div>`

    }).join("")
  
    
    const parent= document.querySelector('.cards')
    parent.innerHTML= prod
    
    parent.addEventListener('click',(e)=>{
      const target = e.target.parentElement
    
      if (target.classList.contains('cardBut')){
      
     
        setupCard(target.dataset.id)
        // page.classList.add('cart-show')
      }

    })


}
export  {displayProducts}