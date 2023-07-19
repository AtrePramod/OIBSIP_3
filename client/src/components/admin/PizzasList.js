import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image, Table } from 'react-bootstrap'
import { getAllPizzas } from '../../actions/pizzaAction'
import { FiEdit } from "react-icons/fi"
import { AiTwotoneDelete } from "react-icons/ai"
import Pizza from '../Pizza'
import Loader from '../loader'
import Error from '../Error'

const PizzasList = () => {

    const dispatch = useDispatch();
    const pizzastate = useSelector(state => state.getAllPizzaReducer)
    const { loading, pizzas, error } = pizzastate;
    useEffect(() => { dispatch(getAllPizzas()) }, [dispatch])

    return (
        <>
            {loading ? (<Loader />) : error ? (<Error error="Something went wrong" />) : (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Pizzas Name</th>
                                <th>Prices</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {pizzas && pizzas.map(pizza => (
                                <tr>
                                    <td> <Image src={pizza.image} alt={pizza.name} width='200px' /></td>
                                    <td>{pizza.name}</td>
                                    <td>
                                        Small = {pizza.prices[0]['small']}<br />
                                        Medium = {pizza.prices[0]['medium']}
                                        <br />
                                        Large = {pizza.prices[0]['large']}
                                    </td>
                                    <td>{pizza.category}</td>
                                    <td><FiEdit /> &nbsp; <AiTwotoneDelete /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </div >
            )}




        </>
    )
}

export default PizzasList
