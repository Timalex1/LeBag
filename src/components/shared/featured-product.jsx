import { isInCart } from '../../helpers';
import React from "react";
import { withRouter } from "react-router-dom";
import './featured-product.style.scss';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

const FeaturedProduct = (props) => {

    const { title, imageUrl, price, history, id, description } = props;
    const product = { title, imageUrl, price, id, description }
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const itemInCart = isInCart(product, cartItems);

    return (
        <div className="featured-product">
            <div className="featured-image" onClick={() => history.push(`/product/${id}`)}>
                <img src={imageUrl} alt="product-" />
            </div>
            <div className="name-price">
                <h3>{title}</h3>
                <p>$ {price}</p>
                {
                    !itemInCart &&
                    < button className="button is-black nomad-btn" onClick={() => addProduct(product)}>ADD TO CART</button>
                }
                {
                    itemInCart &&
                    < button className="button is-white nomad-btn" onClick={() => increase(product)}>ADD MORE</button>
                }
            </div>
        </div >
    )
}

export default withRouter(FeaturedProduct);