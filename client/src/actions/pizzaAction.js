import axios from 'axios'
export const getAllPizzas = () => async (dispatch) => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' })
    try {
        const res = await axios.get('/api/pizzas/getAllPizzas')

        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: res.data })

    } catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAIL', payload: error });

    }
}
export const addPizza = (pizza) => async (dispatch) => {
    dispatch({ type: 'ADD_PIZZAS_REQUEST' })
    try {
        const res = await axios.post('/api/pizzas/addpizza', { pizza })

        dispatch({ type: 'ADD_PIZZAS_SUCCESS', payload: res.data })

    } catch (error) {
        dispatch({ type: 'ADD_PIZZAS_FAIL', payload: error });

    }
}
export const getPizzaById = (pizzaId) => async (dispatch) => {
    dispatch({ type: 'GET_PIZZASBYID_REQUEST' })
    try {
        const res = await axios.post('/api/pizzas/getpizzabyid', { pizzaId })

        dispatch({ type: 'GET_PIZZASBYID_SUCCESS', payload: res.data })

    } catch (error) {
        dispatch({ type: 'GET_PIZZASBYID_FAIL', payload: error });

    }
}