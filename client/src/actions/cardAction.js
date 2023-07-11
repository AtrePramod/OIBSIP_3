export const addToCard = (pizza, quantity, varinet) => (dispatch) => {
    var carItem = {
        name: pizza.name,
        _id: pizza._id,
        varinet: varinet,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][varinet] * quantity,
    };
    dispatch({ type: "ADD_TO_CART", payload: carItem });

};