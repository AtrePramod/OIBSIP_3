import axios from 'axios'
import swal from 'sweetalert';

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

export const updatePizza = (updatedPizza) => async (dispatch) => {
    dispatch({ type: 'UPDATED_PIZZABYID_REQUEST' })
    try {
        const res = await axios.post('/api/pizzas/updatepizza', { updatedPizza })

        dispatch({ type: 'UPDATED_PIZZABYID_SUCCESS', payload: res.data })
        window.location.href = '/admin/pizzalist'

    } catch (error) {
        dispatch({ type: 'UPDATED_PIZZABYID_FAIL', payload: error });

    }
}
export const deletePizza = (pizzaId) => async (dispatch) => {

    try {
        const res = await axios.post('/api/pizzas/deletepizza', { pizzaId })

        swal("Good job!", "Pizza Deleted Success!", "success");
        window.location.href = "/admin/pizzalist"
        console.log(res)

    } catch (error) {
        swal("Somethings Else", "Don't Pizza Delete!", "error");

    }
}

export const filterPizza = (searchkey, category) => async dispatch => {
    let filterdPizza;
    dispatch({ type: 'GET_PIZZAS_REQUEST' })
    try {
        const res = await axios.get('/api/pizzas/getAllPizzas')
        filterdPizza = res.data.filter(pizza => pizza.name.toLowerCase().includes(searchkey))
        if (category !== 'all') {
            filterdPizza = res.data.filter(pizza => pizza.category.toLowerCase() === category)
        }

        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: filterdPizza })
    } catch (error) {
        dispatch({ type: 'GET_PIZZAS_ERROR', payload: error })

    }

}