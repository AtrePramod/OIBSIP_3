import React, { useEffect } from 'react'
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import UserList from '../components/admin/UserList';
import PizzasList from '../components/admin/PizzasList';
import AddNewPizza from '../components/admin/AddNewPizza';
import OrderList from '../components/admin/OrderList';
import EditPizza from '../components/admin/EditPizza';

const AdminScreen = ({ history }) => {
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    useEffect(() => {
        if (localStorage.getItem('currentUser') === null || !currentUser.isAdmin) {
            window.location.href = "/";
        }
    })
    return (
        <>
            <Container>
                <Row>
                    <h1 className='text-center bg-dark text-light p2'>Admin Panel</h1>
                    <Col md={2}>
                        <ButtonGroup vertical style={{ minHeight: '400px' }}>
                            <Button onClick={() => history.push("/admin/userlist")}> All Users</Button>
                            <Button onClick={() => history.push("/admin/pizzalist")}> All Pizzas</Button>
                            <Button onClick={() => history.push("/admin/addnewpizza")}> Add New Pizza</Button>
                            <Button onClick={() => history.push("/admin/orderlist")}>  All Orders</Button>

                        </ButtonGroup>
                    </Col>
                    <Col md={10}>

                        <Switch>
                            <Route path="/admin" component={UserList} exact />
                            <Route path="/admin/userlist" component={UserList} exact />
                            <Route path="/admin/pizzalist" component={PizzasList} exact />
                            <Route path="/admin/editpizza/:pizzaId" component={EditPizza} exact />
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
