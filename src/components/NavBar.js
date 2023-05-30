import {NavLink} from "react-router-dom"

function NavBar({cart}) {
    
    const numberOfItems = cart.length
    
    return (
        <div>
            <h1>Cart Items: {numberOfItems}</h1>
            <button>
                <NavLink to="/Cart">
                    Go To Cart
                </NavLink>
            
            </button>

        </div>
    )
}

export default NavBar