export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PLACE_ORDER_REQUEST': return {
            loading: true
        }
        case 'PLACE_ORDER_SUCESS': return {
            loading: false,
            success: true
        }
        case 'PLACE_ORDER_FAIL': return {
            loading: false,
            error: action.payload
        }
        default: return state;
    }

}
