import React from "react";
import Header from "../components/Header";
import {Col, Row} from "react-bootstrap";
import Tabs from "react-bootstrap/cjs/Tabs";
import {Tab} from "react-bootstrap";
import Footer from "../components/Footer";

import "../styles/MessaggesPage.css"
import Messages from "../components/Messages";

export default class MessagesPage extends React.Component {

    render() {
        let tabs

        switch (this.props.class){
            case '1':{
                tabs = null;
                break;
            }
            case '2':{
                tabs = null;
                break;
            }
            case '3':{
                tabs =  <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
                    <Tab eventKey="1" title="Кирилл">
                        <Messages type={1}/>
                    </Tab>
                    <Tab eventKey="4" title="Александр">
                        <Messages type={4}/>
                    </Tab>
                </Tabs>
                break;
            }
            case '4':{
                tabs =  <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
                    <Tab eventKey="1" title="Кирилл">
                        <Messages type={1}/>
                    </Tab>
                    <Tab eventKey="3" title="Евгения">
                        <Messages type={3}/>
                    </Tab>
                    <Tab eventKey="4" title="Александр">
                        <Messages type={4}/>
                    </Tab>
                </Tabs>
                break;
            }
            case '5':{
                tabs =  <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
                    <Tab eventKey="1" title="Кирилл">
                        <Messages type={1}/>
                    </Tab>
                    <Tab eventKey="2" title="Мария">
                        <Messages type={2}/>
                    </Tab>
                    <Tab eventKey="3" title="Евгения">
                        <Messages type={3}/>
                    </Tab>
                    <Tab eventKey="4" title="Александр">
                        <Messages type={4}/>
                    </Tab>
                </Tabs>
                break;
            }
            case '6': {
                tabs =  <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
                    <Tab eventKey="1" title="Кирилл">
                        <Messages type={1}/>
                    </Tab>
                    <Tab eventKey="2" title="Мария">
                        <Messages type={2}/>
                    </Tab>
                    <Tab eventKey="3" title="Евгения">
                        <Messages type={3}/>
                    </Tab>
                    <Tab eventKey="4" title="Александр">
                        <Messages type={4}/>
                    </Tab>
                </Tabs>
                break;
            }
            default: tabs = null;
        }

        return (
            <div className="bg-peach h-100">
                <Header class={this.props.class}/>
                <Row className="justify-content-md-center mt-4 bg-peach">
                    <Col className="bg-post shadow-lg pb-4" md="auto">
                        <div style={{width: "800px"}} className="p-2 bg-post">
                            <h5 className="text-center">Сохранённые диалоги</h5>
                            <div className="bg-post">
                                {tabs}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}