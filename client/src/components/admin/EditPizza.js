import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaById } from '../../actions/pizzaAction'


const EditPizza = ({ match }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPizzaById(match.params.pizzaId))
    }, [dispatch])
    return (
        <div>
            <h2>Edit pizza components</h2>
        </div>
    )
}

export default EditPizza
