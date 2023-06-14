function ItemCard({item, setCart, cart}){
  
  function handleAddToCart(){
    if(cart.find(itemObj => itemObj.id === item.id)){
     
      
      const updatedCart = cart.map((itemObj) => {
        if(item.id === itemObj.id){
          return {...item, quantity: itemObj.quantity + 1}
        }
        return itemObj
      })
      
      setCart(updatedCart)
      return

    } else {
      const addToCart = {...item, quantity: 1}
      setCart([...cart, addToCart])
    }
  } 
  


    return(
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default ItemCard

/**
 * function handleAddToCart(newItem){
        if(cart.find(item => item.id === newItem.id)){
         
          
          const updatedCart = cart.map((item) => {
            if(item.id === newItem.id){
              return {...item, quantity: item.quantity + 1}
            }
            return item
          })
          
          setCart(updatedCart)
          return
    
    
        } else {
          const addToCart = {...newItem, quantity: 1}
          setCart([...cart, addToCart])
        }
      } 
      */