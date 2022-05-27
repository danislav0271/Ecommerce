import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let fountProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if(checkProductInCart) {
            const updateCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updateCartItems);
        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, { ...product }]);
        }

        toast.success(`${qty} ${product.name} added to the cart.`);
    }

    const onRemove = (product) => {
        fountProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - fountProduct.price * fountProduct.quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - fountProduct.quantity);
        setCartItems(newCartItems);
    }

    const toggleCartItemsQuantity = (id, value) => {
        fountProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id);

        if (value === 'inc') {
            setCartItems([...newCartItems, { ...fountProduct, quantity: fountProduct.quantity + 1}]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + fountProduct.price);
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
        } else if (value === 'dec') {
            if (fountProduct.quantity > 1) {
                setCartItems([...newCartItems, { ...fountProduct, quantity: fountProduct.quantity - 1}]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - fountProduct.price);
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
            }
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    }

    return (
        <Context.Provider 
            value={{
                showCart, 
                setShowCart, 
                cartItems, 
                totalPrice, 
                totalQuantities, 
                qty, 
                incQty, 
                decQty, 
                onAdd, 
                toggleCartItemsQuantity, 
                onRemove, 
                setCartItems, 
                setTotalPrice,
                setTotalQuantities,
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);