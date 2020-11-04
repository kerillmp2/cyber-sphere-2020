import React from 'react';
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";

export default class Header extends React.Component{
    render() {
        return(<>
            <Navbar className="shadow-sm" bg="primary" variant="dark">
                <Navbar.Brand href="/profile">Кибер-Сфера</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/profile">Моя страница</Nav.Link>
                    <Nav.Link href="/messages">Мои сообщения</Nav.Link>
                    <Nav.Link href="/subs">Мои группы</Nav.Link>
                </Nav>
            </Navbar>
        </>)
    }
}