function CartItemCard({item}){


    return(
        <div>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
        </div>
    )
}

export default CartItemCard