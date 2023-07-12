import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { addToCard } from '../actions/cardAction'


const CardScreen = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>My Cart Items</h1>
                        <Row> {
                            cartItems.map(item => (
                                <>
                                    <hr />
                                    <Col md={7}>
                                        <h5>{item.name} [{item.varinet}]</h5>
                                        <h6>
                                            Price:{item.quantity}*{item.prices[0][item.varinet]}={" "}{item.price}
                                        </h6>
                                        <h6>Quantity: &nbsp;
                                            <AiFillMinusCircle className='text-danger' style={{ cursor: 'pointer' }}
                                                onClick={() => { dispatch(addToCard(item, item.quantity - 1, item.varinet)); }}
                                            />&nbsp;&nbsp;
                                            {item.quantity}&nbsp; &nbsp;
                                            <AiFillPlusCircle className='text-success' style={{ cursor: 'pointer' }}
                                                onClick={() => { dispatch(addToCard(item, item.quantity + 1, item.varinet)); }}
                                            /></h6 >
                                    </Col>
                                    <Col md={5}>
                                        <img alt={item.name} src={item.image} style={{ width: '80px', height: '60px' }} />
                                    </Col>

                                </>
                            ))
                        }
                        </Row>
                    </Col>
                    <Col md={2}><h1>Payment Info</h1> </Col>
                </Row>
            </Container>
        </>
    )
}

export default CardScreen;