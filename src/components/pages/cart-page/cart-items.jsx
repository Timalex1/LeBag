import React from 'react'
import { PlusSignIcon, MinusSignIcon, TrashSignIcon } from '../../icons'

const CartItem = (props) => {

    const { id, description, title, imageUrl, price, quantity, increase, decrease, removeProduct } = props;

    const product = { title, imageUrl, price, quantity, id, description }

    return (
        <div className='cart-item'>
            <div className='item-image'>
                <img src={imageUrl} alt="product" />
            </div>
            <div className='name-price'>
                <h4>{title}</h4>
                <p>${price}</p>
            </div>
            <div className='quantity'>
                <p>{`Quantity : ${quantity}`}</p>
            </div>
            <div className="btns-container">
                <button onClick={() => increase(product)} className='btn-increase'>
                    <img src={PlusSignIcon} className="btn-img " alt="" />
                </button>
                {
                    quantity === 1 &&
                    <button onClick={() => removeProduct(product)} className='btn-trash'>
                        <img src={TrashSignIcon} className="btn-img" alt="" />
                    </button>
                }
                {
                    quantity > 1 &&
                    <button onClick={() => decrease(product)} className='btn-decrease'>
                        <img src={MinusSignIcon} className="btn-img " alt="" />
                    </button>
                }
            </div>
        </div>
    )
}

export default CartItem