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
import AboutPage from "../pages/AboutPage";

export default function SimpleRouter() {
    return (
        <BrowserRouter>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/subs">
                        <SubsPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/messages">
                        <MessagesPage />
                    </Route>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                    <Route path="/">
                        <Header/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}