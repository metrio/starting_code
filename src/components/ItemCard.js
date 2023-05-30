function ItemCard({item, setCart, cart}){

    function handleAddToCart(newItem){
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


    return(
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
    )
}

export default ItemCard