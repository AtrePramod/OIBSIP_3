import React, { useState } from 'react';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

const Register = () => {

    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [cpass, SetCpass] = useState('');
    const [address, SetAddress] = useState('');

    const registerhandler = () => {
        if (password != cpass) {
            alert("Both password are not match")
        }
        else {
            const user = { name, email, password, address }
            console.log(user)
        }
    }
    return (
        <>
            <Container>
                <h1>Registration</h1>
                <Form>

                    <Form.Group className='md-3' controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={e => SetName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='md-3' controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={e => SetEmail(e.target.value)}
                        />
                    </Form.Group>


                    <Form.Group className='md-3' controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => SetPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='md-3' controlId="formPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={cpass}
                            onChange={e => SetCpass(e.target.value)}
                        />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            placeholder="1234 Main St"
                            value={address}
                            onChange={e => SetAddress(e.target.value)}
                        />
                    </Form.Group>



                    <Form.Group className="mb-3" id="formCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" onClick={registerhandler}>
                        Register
                    </Button>
                </Form>

            </Container>
        </>
    )
}

export default Register
