import React from "react";
import Header from "../components/Header";
import Group from "../components/Group";
import CardDeck from "react-bootstrap/CardDeck"
import {Col, Row} from "react-bootstrap";

import cosmos from "../img/space.jpg"
import shpitz from "../img/spitz.jpg"

export default class SubsPage extends React.Component {
    render() {
        return (
            <div className="bg-peach">
                <Header/>
                <Row className="justify-content-md-center mt-3 ml-5 mr-5">
                    <Col md="auto">
                        <CardDeck>
                            <Group name="Cosmos" description="Группа любителей космоса" image={cosmos}/>
                            <Group name="Cosmos" description="Ещё одна группа любителей космоса" image={cosmos}/>
                            <Group name="Японские шпицы" description="Клуб любителей японских шпицов" image={shpitz}/>
                            <Group name="Cosmos" description="Ещё одна группа любителей космоса" image={cosmos}/>
                            <Group name="Cosmos" description="Ещё одна группа любителей космоса" image={cosmos}/>
                            <Group name="Cosmos" description="Ещё одна группа любителей космоса" image={cosmos}/>
                            <Group name="Cosmos" description="Ещё одна группа любителей космоса" image={cosmos}/>
                            <Group name="Cosmos" description="Ещё одна группа любителей космоса" image={cosmos}/>
                        </CardDeck>
                    </Col>
                </Row>
            </div>
        );
    }
}