import React, { useState } from 'react'
import { CartContext } from '../context/cart-context'
import './checkout.styles.scss'
import Layout from '../shared/layout'
import { useContext } from 'react'
import ShippingAddress from './custom-checkout/shipping-address'

const Checkout = () => {
    const { itemCount, total } = useContext(CartContext);
    const { shipping, setShipping } = useState(null)
    const addressShown = {
        display: (shipping ? 'none' : 'block')
    }

    return (
        <Layout>
            <div className='checkout'>
                <h2>Checkout Summary</h2>
                <h3>{`Total Items: ${itemCount}`}</h3>
                {console.log(addressShown)}
                <h4>{`Amount to Pay: $${total}`}</h4>
                <div style={addressShown}>
                    <ShippingAddress setShipping={setShipping} />
                </div>
            </div>
        </Layout>
    )
}

export default Checkout