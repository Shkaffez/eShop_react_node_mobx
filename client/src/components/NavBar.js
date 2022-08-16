import React, { useContext } from 'react';
import { Context } from '..';
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../pages/utils/consts';
import {observer} from 'mobx-react-lite';

const NavBar = observer( () => {

    const {user} = useContext(Context);

    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                    {user.isAuth ?
                    <Nav className="ms-auto">
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button className="ms-2" variant={"outline-light"} >Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button onClick={() => user.setIsAuth(true)} variant={"outline-light"}>Авторизация</Button>
                    </Nav>
                    }
                </Container>
            </Navbar>
    );
})  

export default NavBar;
