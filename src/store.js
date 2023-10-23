import { setItem } from "./utils.js"
import { getItem } from "./utils.js"
let store = getItem('store')
const products = (product)=>{
  store = product.map( (prod)=>{
    const {id,fields:{featured,name,price,company,colors,image:img},} = prod
    const image = img[0].thumbnails.large.url
    return {id,featured,name,price,company,colors,image}

   })
   
 setItem('store',store)
   console.log(store)
   return  store
    

}
export {store, products};
