import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Pizza from '../components/Pizza'
import { getAllPizzas } from '../actions/pizzaAction'
import Loader from '../components/loader'
import Error from '../components/Error'
const HomeScreen = () => {

    const dispatch = useDispatch();
    const pizzastate = useSelector(state => state.getAllPizzaReducer)
    const { loading, pizzas, error } = pizzastate;
    useEffect(() => { dispatch(getAllPizzas()) }, [dispatch])

    return (
        <>
            <Container>
                {loading ? <Loader />

                    : error ? (<Error>Error while fetching Pizzas {error}</Error>)
                        : (<Row>
                            {pizzas.map((pizza) => (
                                <Col md={4} key={pizza.name}>
                                    <Pizza pizza={pizza} />
                                </Col>
                            ))}
                        </Row>)
                }

            </Container>
        </>
    )
}

export default HomeScreen
