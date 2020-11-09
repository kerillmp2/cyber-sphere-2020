import React from "react";
import Header from "../components/Header";
import Image from "react-bootstrap/cjs/Image";
import {Row, Col} from "react-bootstrap";
import Post from "../components/Post";
import Footer from "../components/Footer";

import avatarImage from "../img/avatar-image.jpg"
import ny2020 from "../img/posts/ny2020.jpg"
import ny2019 from "../img/posts/ny2019.jpg"
import ny2018 from "../img/posts/ny2018.jpg"
import notes from "../img/posts/notes.png"
import ship from "../img/posts/ship.jpg"
import shpic from "../img/posts/shpic.jpg"
import hb2019 from "../img/posts/hb2019.jpg"
import books from "../img/posts/books.jpg"
import baikal from "../img/posts/baikal.jpg"
import cinema from "../img/posts/cinema.jpg"
import things from "../img/posts/things.jpg"
import train from "../img/posts/train.jpg"

export default class ProfilePage extends React.Component {
    render() {

        let posts = (<div>
            <Post date="04/17/2020" innerText='Если вы есть – будьте первыми,'
                  secondRow='Первыми, кем бы вы ни были.' thirdRow='Из песен - лучшими песнями,'
                  fouthRow='Из книг - настоящими книгами' fifthRow='(C) Роберт Рождественский'/>

            <Post date="02/02/2020" innerText='Сегодня, в мой день рождения, мне подарили'
                  secondRow='нового друга! Знакомьтесь, Арчибальд!' image={shpic}/>
            <Post date="01/01/2020" innerText='Поздравляю всех с Новым Годом!'
                  secondRow='Надеюсь, 2020-й принесёт всем радость и счастье!' image={ny2020}/>

            <Post date="19/07/2019" innerText='Сегодня с друзьями посмотрели фильм "Прятки".'
                  secondRow='Всем срочно в кино!!!' image={cinema}/>

            <Post date="28/05/2019" innerText='Как вы боьлше любите путешествовать?'
                  secondRow='Мне больше всего нравятся поезда' image={train}/>

            <Post date="02/02/2019" innerText='Вот и наступил мой очередной день рождения!'
                  secondRow='Огромное спасибо всем, кто меня поздравил!' image={hb2019}/>

            <Post date="01/24/2019" innerText='Год только начался, а на учёбе уже завал...' image={books}/>

            <Post date="01/01/2019" innerText='Ух, тяжёлый был 2018-й...'
                  secondRow='Поздравляю всех с Новым 2019-ым годом!' image={ny2019}/>

            <Post date="22/07/2018" innerText='Вчера вернулись из поездки на Байкал)'
                  secondRow='Самое живописное место, которое я посещала!' image={baikal}/>

            <Post date="14/04/2018" innerText='' image={things}/>

            <Post date="02/02/2018" innerText='Сегодня мне исполнилось 15 лет!'
                  secondRow='Такими темпами скоро школу закончу)' image={hb2019}/>
            <Post date="01/01/2018" innerText='Всем удачи в Новом 2018-ом году!' image={ny2018}/>

            <Post date="14/11/2017" innerText='Сходили сегодня с сестрой на фильм'
                  secondRow='"Пираты Балтийского моря 3". Всем советую!' image={ship}/>
            <Post date="05/11/2017" innerText='Мой первый день в социальных сетях!' image={notes}/>
        </div>);

        return (
            <div className="bg-peach">
                <Header class={this.props.class}/>
                <div className="shadow pr-4 pl-4 pb-2">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Image className="ml-2 mt-4" height="300px" src={avatarImage} rounded/>
                            <div style={{fontSize: 20}} className="font-weight-bold m-2 text-center">Анна Озёрская</div>
                        </Col>
                    </Row>
                </div>
                <Row className="justify-content-md-center mt-4">
                    <Col md="auto">
                        <h2 className="text-center mb-3">Последние записи Анны:</h2>
                        {posts}
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}