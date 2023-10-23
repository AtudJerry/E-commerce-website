
const fetchProducts = async(url)=>{
    const list = await fetch(url).catch( (err)=>{    console.log(err)})
if (list){
    return list.json()
}else{
    return list
}
    // return list.json()
}
export default fetchProducts