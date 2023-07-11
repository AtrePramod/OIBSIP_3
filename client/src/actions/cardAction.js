export const addToCard = (pizza, quantity, varinet) => (dispatch, getState) => {
    var cartItems = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varinet: varinet,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][varinet] * quantity,
    };
    dispatch({ type: "ADD_TO_CART", payload: cartItems });
    console.log(getState().cartReducer.cartItems)
    localStorage.setItem('cartItems',
        JSON.stringify(getState().cartReducer.cartItems)
    );
};