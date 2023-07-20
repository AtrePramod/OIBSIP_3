import axios from 'axios'
export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
    dispatch({ type: 'PLACE_ORDER_REQUEST' })
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {

        const res = await axios.post('/api/orders/placeorder', { token, subTotal, currentUser, cartItems })
        dispatch({ type: 'PLACE_ORDER_SUCESS' })
        console.log(res)
    } catch (error) {
        dispatch({ type: 'PLACE_ORDER_FAIL' })
        console.log(error)


    }

}
export const placeOrders = (subTotal) => async (dispatch, getState) => {
    dispatch({ type: 'PLACE_ORDERS_REQUEST' })
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {

        const res = await axios.post('/api/orders/placeorders', { subTotal, currentUser, cartItems })
        dispatch({ type: 'PLACE_ORDERS_SUCESS' })
        console.log(res)
    } catch (error) {
        dispatch({ type: 'PLACE_ORDERS_FAIL' })
        console.log(error)


    }

}

export const getUserOrders = () => async (dispatch, getState) => {
    const currentUser = getState().loginUserReducer.currentUser
    dispatch({ type: 'USER_ORDER_REQUEST' })
    try {
        const respose = await axios.post('/api/orders/getuserorder', { userid: currentUser._id })
        console.log(respose)
        dispatch({ type: 'USER_ORDER_SUCCESS', payload: respose.data })
    } catch (error) {

        dispatch({ type: 'USER_ORDER_FAIL', payload: error })

    }
}
