import React, { useContext, useState } from 'react';
import { Container, Button, Card, Form, FormControl, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts';
import { registretion, login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname == LOGIN_ROUTE;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
    
            } else {
                data = await registretion(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
            
        } catch (error) {
            alert(error);
        }

    }



    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between">
                        {isLogin ?
                            <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink></div>
                            :
                            <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
                        }

                        <Button onClick={click} variant={"outline-success"} className="mt-2">{isLogin ? "Войти" : "Регистрация"}</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});


export default Auth
