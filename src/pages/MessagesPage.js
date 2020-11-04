import React from "react";
import Header from "../components/Header";
import {Col, Row} from "react-bootstrap";
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import Container from "react-bootstrap/cjs/Container";

export default class MessagesPage extends React.Component {
    render() {
        return (
            <div className="bg-peach h-100">
                <Header/>
                <Row className="justify-content-md-center mt-4">
                    <Col md="auto">
                        <div style={{width: "800px"}} className="bg-peach shadow-lg p-2">
                            <h5 className="text-center">Сохранённые диалоги</h5>
                            <Navbar bg="light" variant="light">
                                <Navbar.Brand href="#kekw">Сохранённые</Navbar.Brand>
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                            </Navbar>
                            <Container>
                                <Row className="bg-white">
                                    <Col className="border border-dark">qqq</Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}