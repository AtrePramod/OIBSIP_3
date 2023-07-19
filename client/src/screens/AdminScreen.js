import React from 'react'
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserList from '../components/admin/UserList';
import PizzasList from '../components/admin/PizzasList';
import AddNewPizza from '../components/admin/AddNewPizza';
import OrderList from '../components/admin/OrderList';
import { LinkContainer } from 'react-router-bootstrap';

const AdminScreen = ({ history }) => {
    return (
        <>
            <Container>
                <Row>
                    <h1 className='text-center bg-dark text-light p2'>Admin Panel</h1>
                    <Col md={4}>
                        <ButtonGroup vertical style={{ minHeight: '400px' }}>
                            <Button onClick={() => history.push("/admin/userlist")}> All Users</Button>
                            <Button onClick={() => history.push("/admin/pizzalist")}> All Pizzas</Button>
                            <Button onClick={() => history.push("/admin/addnewpizza")}> Add New Pizza</Button>
                            <Button onClick={() => history.push("/admin/orderlist")}>  All Orders</Button>

                        </ButtonGroup>
                    </Col>
                    <Col md={8}>

                        <Switch>
                            <Route path="/admin" component={UserList} exact />
                            <Route path="/admin/userlist" component={UserList} exact />
                            <Route path="/admin/pizzalist" component={PizzasList} exact />
                            <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
                            <Route path="/admin/orderlist" component={OrderList} exact />
                        </Switch>


                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default AdminScreen;
