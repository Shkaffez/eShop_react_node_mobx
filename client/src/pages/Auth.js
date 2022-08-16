import React from 'react';
import {Navbar, Nav, Container, Button, Card, Form, FormControl, Row} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts';

const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname == LOGIN_ROUTE;
    return (
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
          <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
            <Form className="d-flex flex-column">
                <FormControl className="mt-3" placeholder="Введите ваш email..." />
                <FormControl className="mt-3" placeholder="Введите пароль..." />
                <Row className="d-flex justify-content-between">
                    {isLogin ?
                        <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink></div>
                        :
                        <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
                    }
                    
                    <Button variant={"outline-success"} className="mt-2">{isLogin ? "Войти" : "РегистрацияЫ"}</Button>
                </Row>
            </Form>
          </Card>
        </Container>
    );
}

export default Auth;
