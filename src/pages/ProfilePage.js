import React from "react";
import Header from "../components/Header";
import Image from "react-bootstrap/cjs/Image";
import avatarImage from "../img/avatar-image.jpg"
import {Row, Col} from "react-bootstrap";
import Post from "../components/Post";

export default class ProfilePage extends React.Component {
    render() {
        return (
            <div className="bg-peach">
                <Header/>
                <div className="shadow-sm bg-transparent pr-4 pl-4 pb-1">
                    <Row className="justify-content-md-center mt-4">
                        <Col md="auto">
                            <Image className="ml-2" height="300px" src={avatarImage} rounded/>
                            <div style={{fontSize: 20}} className="font-weight-bold m-2 text-center">Анна Озёрская</div>
                        </Col>
                    </Row>
                </div>
                <Row className="justify-content-md-center mt-4">
                    <Col md="auto">
                        <Post date="11/05/2000" innerText="Тут будет текст" image={avatarImage}/>
                        <Post date="05/05/2000" innerText="Тут будет другой текст" image={avatarImage}/>
                    </Col>
                </Row>
            </div>
        );
    }
}