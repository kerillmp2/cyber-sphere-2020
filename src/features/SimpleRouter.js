import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Header from "../components/Header";
import ProfilePage from "../pages/ProfilePage";
import MessagesPage from "../pages/MessagesPage";
import SubsPage from "../pages/SubsPage";
import WelcomePage from "../pages/WelcomePage";
import Footer from "../components/Footer";
import AnswerPage from "../pages/AnswerPage";

export default class SimpleRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem("name"),
            class: localStorage.getItem("class"),
            start: localStorage.getItem("start")
        }
    }

    handleUpdate = (name, c, st) => {
        this.setState({
            name: name,
            class: c,
            start: st
        })
    }

    render() {

        if (localStorage.getItem("name") === null ||
            localStorage.getItem("class") === null ||
            localStorage.getItem("start") === null) {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route path="/">
                            <WelcomePage onEnter={this.handleUpdate}/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            )
        }

        let msg = null

        if (this.state.class > 2) {
            msg = <Route path="/messages">
                <MessagesPage class={this.state.class}/>
            </Route>
        }

        return (
            <BrowserRouter>
                <div className="h-100">
                    <Switch>
                        <Route path="/subs">
                            <SubsPage class={this.state.class}/>
                        </Route>

                        {msg}

                        <Route path="/profile">
                            <ProfilePage class={this.state.class}/>
                        </Route>

                        <Route path="/answers">
                            <AnswerPage class={this.state.class}/>
                        </Route>

                        <Route path="/">
                            <div className="bg-peach h-100">
                                <Header class={this.state.class}/>
                                <Footer/>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}