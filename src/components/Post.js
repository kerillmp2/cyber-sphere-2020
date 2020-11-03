import React from "react";
import Image from "react-bootstrap/cjs/Image";

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bg-transparent pr-3 pl-3 pb-2 pt-1 mb-5 shadow">
                <p className="mb-0 mt-0 text-secondary">{this.props.date}</p>
                <Image width="400px" src={this.props.image}/>
                <p>{this.props.innerText}</p>
            </div>
        );
    }
}