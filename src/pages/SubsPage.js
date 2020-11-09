import React from "react";
import Header from "../components/Header";
import Group from "../components/Group";
import CardDeck from "react-bootstrap/CardDeck"
import {Col, Row} from "react-bootstrap";
import Footer from "../components/Footer";

import shpic from "../img/groups/shpic.jpg";
import barselona from "../img/groups/fkb-before.jpg";
import alpinism from "../img/groups/Alpi.jpg";
import skydiving from "../img/groups/skydiving.jpg";
import camping from "../img/groups/camping.jpg";
import netflix from "../img/groups/netflix.jpg";
import catfun from "../img/groups/catfun.jpg";
import news from "../img/groups/news.png";
import AI from "../img/groups/II.jpg";
import harry from "../img/groups/harrypotter.jpg"
import gossip from "../img/groups/gossip.jpg";
import britain from "../img/groups/britain.png";

export default class SubsPage extends React.Component {
    render() {
        let cardDeck = (<CardDeck>
            <Group name="Японские шпицы" description="Клуб любителей японских шпицов" image={shpic}/>
        </CardDeck>);

        switch (this.props.class){
            case '1':{
                cardDeck = (
                    <CardDeck>
                        <Group name="Японские шпицы" description="Клуб любителей японских шпицов" image={shpic}/>
                        <Group name="Kitty_fun" description="Смешные картинки с котами" image={catfun}/>
                        <Group name="Походы" description="Ночные походы с палатками и кострами" image={camping}/>
                        <Group name="Новости" description="Самые актуальные события недели" image={news}/>
                    </CardDeck>
                );
                break;
            }
            case '2':{
                cardDeck = (
                    <CardDeck>
                        <Group name="Японские шпицы" description="Клуб любителей японских шпицов" image={shpic}/>
                        <Group name="Kitty_fun" description="Смешные картинки с котами" image={catfun}/>
                        <Group name="Новости" description="Самые актуальные события недели" image={news}/>
                        <Group name="Скалолазы" description="Групповое скалолазание по выходным" image={alpinism}/>
                        <Group name="Learn English" description="Учим английский язык вместе!" image={britain}/>
                        <Group name="Походы" description="Ночные походы с палатками и кострами" image={camping}/>
                    </CardDeck>
                );
                break;
            }
            case '3':{
                cardDeck = (
                    <CardDeck>
                        <Group name="Японские шпицы" description="Клуб любителей японских шпицов" image={shpic}/>
                        <Group name="FCB" description="Фанаты футбольного клуба Барселона" image={barselona}/>
                        <Group name="Kitty_fun" description="Смешные картинки с котами" image={catfun}/>
                        <Group name="SkyDiving" description="Полёты в открытом пространстве" image={skydiving}/>
                        <Group name="Походы" description="Ночные походы с палатками и кострами" image={camping}/>
                        <Group name="Новости" description="Самые актуальные события недели" image={news}/>
                        <Group name="Скалолазы" description="Групповое скалолазание по выходным" image={alpinism}/>
                        <Group name="Learn English" description="Учим английский язык вместе!" image={britain}/>
                    </CardDeck>
                );
                break;
            }
            case '4':{
                cardDeck = (
                    <CardDeck>
                        <Group name="Японские шпицы" description="Клуб любителей японских шпицов" image={shpic}/>
                        <Group name="FCB" description="Фанаты футбольного клуба Барселона" image={barselona}/>
                        <Group name="Kitty_fun" description="Смешные картинки с котами" image={catfun}/>
                        <Group name="SkyDiving" description="Полёты в открытом пространстве" image={skydiving}/>
                        <Group name="Походы" description="Ночные походы с палатками и кострами" image={camping}/>
                        <Group name="Новости" description="Самые актуальные события недели" image={news}/>
                        <Group name="Скалолазы" description="Групповое скалолазание по выходным" image={alpinism}/>
                        <Group name="Learn English" description="Учим английский язык вместе!" image={britain}/>
                    </CardDeck>
                );
                break;
            }
            case '5':{
                cardDeck = (
                    <CardDeck>
                        <Group name="Японские шпицы" description="Клуб любителей японских шпицов" image={shpic}/>
                        <Group name="FCB" description="Фанаты футбольного клуба Барселона" image={barselona}/>
                        <Group name="Kitty_fun" description="Смешные картинки с котами" image={catfun}/>
                        <Group name="SkyDiving" description="Полёты в открытом пространстве" image={skydiving}/>
                        <Group name="Походы" description="Ночные походы с палатками и кострами" image={camping}/>
                        <Group name="NetflixRU" description="Группа, посвящённая сервису Netflix" image={netflix}/>
                        <Group name="Новости" description="Самые актуальные события недели" image={news}/>
                        <Group name="Скалолазы" description="Групповое скалолазание по выходным" image={alpinism}/>
                        <Group name="Gossip Girl" description="Самые захватывающие сплетни о знаметитостях" image={gossip}/>
                        <Group name="Learn English" description="Учим английский язык вместе!" image={britain}/>
                    </CardDeck>
                );
                break;
            }
            case '6':{
                cardDeck = (
                    <CardDeck>
                        <Group name="Японские шпицы" description="Клуб любителей японских шпицов" image={shpic}/>
                        <Group name="AI & IT" description="Новинки искуственного интеллекта" image={AI}/>
                        <Group name="FCB" description="Фанаты футбольного клуба Барселона" image={barselona}/>
                        <Group name="Kitty_fun" description="Смешные картинки с котами" image={catfun}/>
                        <Group name="SkyDiving" description="Полёты в открытом пространстве" image={skydiving}/>
                        <Group name="Походы" description="Ночные походы с палатками и кострами" image={camping}/>
                        <Group name="NetflixRU" description="Группа, посвящённая сервису Netflix" image={netflix}/>
                        <Group name="Новости" description="Самые актуальные события недели" image={news}/>
                        <Group name="Скалолазы" description="Групповое скалолазание по выходным" image={alpinism}/>
                        <Group name="Гарри Поттер и все-все-все!" description="Фанаты серии книг" image={harry}/>
                        <Group name="Gossip Girl" description="Самые захватывающие сплетни о знаметитостях" image={gossip}/>
                        <Group name="Learn English" description="Учим английский язык вместе!" image={britain}/>
                    </CardDeck>
                );
                break;
            }
        }

        return (
            <div className="bg-peach">
                <Header class={this.props.class}/>
                <Row className="justify-content-md-center mt-3 ml-5 mr-5">
                    <Col md="auto">
                        {cardDeck}
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}