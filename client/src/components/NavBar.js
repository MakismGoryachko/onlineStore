import React, { useContext } from "react";
import { Context } from "..";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {Button} from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";


const NavBar = observer( () => {
    const navigate = useNavigate()
    const {user} = useContext(Context)

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      console.log(user.isAuth)
      navigate(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{color: 'white', textDecoration: 'none', fontSize: '22pt'}} to = {SHOP_ROUTE}>MaksiShop</NavLink>
        {user.isAuth ?
        <Nav className="ms-auto">
            <Button variant={"outline-light"}
                    onClick={() => {
                      navigate(ADMIN_ROUTE)
                    }}
            >
              Админ Панель
              </Button>
            <Button variant={"outline-light"} className="ms-2"
                    onClick={() => logOut()}
            >
              Выйти
              </Button>
          </Nav>
          :
          <Nav className="mr-auto">
            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE) }>Авторизация</Button>
          </Nav>
        } 
        </Container>
      </Navbar>
    );
});


export default NavBar;