
let setItem = (name,item)=>{
    localStorage.setItem(name,JSON.stringify(item))
}


const getItem = (item)=>{
    let  storeItem = localStorage.getItem(item)
    if (storeItem){
        storeItem = JSON.parse(localStorage.getItem(item))
    }else{
        storeItem = []
    }
    return storeItem
}
export {setItem, getItem}