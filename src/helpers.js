export const isInCart = (product, cartItems) => {
    return cartItems.find(item => item.id === product.id);
}

const API = process.env.REACT_APP_API;

export async function fetchFromAPI(endpoint, opts) {

    const { method, body } = { method: 'POST', body: null, ...opts }

    const res = await fetch(`${API}/${endpoint}`, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    })

    return res.json();
}