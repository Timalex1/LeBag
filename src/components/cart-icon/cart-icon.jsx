import shoppingBag from '../../assets/shopping-bag.png';
import './cart-icon.styles.scss';
import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { Link } from 'react-router-dom';


const CartIcon = () => {
    const { itemCount, cartItems } = useContext(CartContext);

    return (
        <div className='cart-container'>
            <Link to="/cart">
                <img src={shoppingBag} alt="shpping-cart-icon" />
                {
                    itemCount > 0 ? <span className='cart-count'> {itemCount} </span> : null
                }
            </Link>
        </div>
    )
}

export default CartIcon