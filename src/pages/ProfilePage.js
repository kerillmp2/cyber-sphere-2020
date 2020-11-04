import React from "react";
import Header from "../components/Header";
import Image from "react-bootstrap/cjs/Image";
import {Row, Col} from "react-bootstrap";
import Post from "../components/Post";
import avatarImage from "../img/avatar-image.jpg"
import newYear2019 from "../img/new-year-2019.jpg"

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
                        <Post date="11/05/2019" innerText="Что-то про мою жизнь" image={avatarImage}/>
                        <Post date="05/05/2019" innerText="Тут будет другой текст" image={avatarImage}/>
                        <Post date="02/04/2019" innerText="Тут будут какие-то подсказки" image={avatarImage}/>
                        <Post date="01/01/2019" innerText="С Новым Годом всех!!!" image={newYear2019}/>

                    </Col>
                </Row>
            </div>
        );
    }
}