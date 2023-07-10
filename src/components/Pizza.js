import React, { useState } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { FaRupeeSign } from 'react-icons/fa'

const Pizza = ({ pizza }) => {
    const [varient, setVaritent] = useState('small');
    const [qauantity, setQauantity] = useState(1);
    return (
        < >
            <Card style={{ width: '18rem', marginTop: '20px' }}>
                <Card.Img variant="top" src={pizza.image} />
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md={6}>
                                <h6> Varients</h6>
                                <select value={varient} onChange={e => setVaritent(e.target.value)}>
                                    {pizza.varients.map((varients) => (
                                        <option>{varients}</option>
                                    ))
                                    }
                                </select>
                            </Col>
                            <Col md={6}>
                                <h6>Quantity </h6>
                                <select value={qauantity} onChange={e => setQauantity(e.target.value)}>
                                    {[...Array(10).keys()].map((v, i) => (
                                        <option value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Row>
                        <Col md={6}>Price : {pizza.prices[0][varient] * qauantity} <FaRupeeSign /></Col>
                        <Col md={6}>
                            <Button className='bg-success text-white'>Add to cart</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default Pizza
