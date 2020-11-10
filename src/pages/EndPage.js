import React from "react";
import Footer from "../components/Footer";

export default class EndPage extends React.Component{
    render() {
        return(
            <div className="h-100 bg-peach">
                <div className="bg-peach p-4 text-center">
                   <h2 className="mt-4">Время на выполнение задания истекло!</h2>
                    <h3 className="mt-3">Не забудьте выполнить вторую часть</h3>
                </div>
                <Footer />
            </div>
        );
    }
}