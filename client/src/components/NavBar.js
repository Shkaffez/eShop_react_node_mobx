import React, { useContext } from 'react';
import { Context } from '..';
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../pages/utils/consts';
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../pages/utils/consts';

const NavBar = observer( () => {
    const {user} = useContext(Context);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }


    const navigate = useNavigate();
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                    {user.isAuth ?
                    <Nav className="ms-auto">
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                            >
                            Админ панель
                        </Button>
                        <Button
                            className="ms-2"
                            variant={"outline-light"} 
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button onClick={() => navigate(LOGIN_ROUTE)} variant={"outline-light"}>Авторизация</Button>
                    </Nav>
                    }
                </Container>
            </Navbar>
    );
})  

export default NavBar;
