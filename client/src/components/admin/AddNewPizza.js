import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'

const AddNewPizza = () => {

    const [name, setName] = useState('');
    const [smallPrice, setSmallPrice] = useState();
    const [largePrice, setLargePrice] = useState();
    const [mediumPrice, setMediumPrice] = useState();
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [cate, setCate] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        const pizza = {
            name, image, desc, cate, prices: {
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }
        }
        console.log(pizza)

        setName('');
        setCate("");
        setDesc('');
        setImage("");
        setLargePrice();
        setMediumPrice();
        setSmallPrice();

    }
    return (
        <>
            <Form onSubmit={submitForm}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name"
                        />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPrice1">
                            <Form.Label>Small Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={smallPrice}
                                onChange={(e) => setSmallPrice(e.target.value)}
                                placeholder="Enter smallPrice"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPrice2">
                            <Form.Label>Medium Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={mediumPrice}
                                onChange={(e) => setMediumPrice(e.target.value)}
                                placeholder="Enter mediumPrice"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPrice3">
                            <Form.Label>large Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={largePrice}
                                onChange={(e) => setLargePrice(e.target.value)}
                                placeholder="Enter LargePrice"
                            />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridImage">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Enter Image URL"
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Enter Description"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" value={cate}
                        onChange={(e) => setCate(e.target.value)}
                        placeholder="Enter Category" />
                </Form.Group>


                <Button variant="primary" type='submit' >
                    Add New
                </Button>
            </Form>
        </>
    )
}

export default AddNewPizza
