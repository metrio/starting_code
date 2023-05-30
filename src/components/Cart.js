import CartItemCard from "./CartItemCard";

function Cart({cart}){
    const quantityOfItems = cart.reduce((total, item) => total + item.quantity, 0)

    const cartItems = cart.map((item) => <CartItemCard key={item.id} item={item}/>)

    return(
        <>
            <h1>Cart</h1>
            <h1>Total Number of Items: {quantityOfItems}</h1>
            {cartItems}
        </>
    )
}

export default Cart;