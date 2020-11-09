import React from "react";
import Image from "react-bootstrap/cjs/Image";

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{borderRadius: "20px"}} className="bg-post pr-3 pl-3 pb-2 pt-1 mb-5 shadow">
                <p className="ml-2 mb-0 mt-1 text-secondary">{this.props.date}</p>
                {this.props.image && <Image width="400px" src={this.props.image} style={{borderRadius: "15px"}}/>}
                <p className="ml-2 mt-1">
                    {this.props.innerText}
                    {this.props.secondRow && <div>{this.props.secondRow}</div>}
                    {this.props.thirdRow && <div>{this.props.thirdRow}</div>}
                    {this.props.fouthRow && <div>{this.props.fouthRow}</div>}
                    {this.props.fifthRow && <div>{this.props.fifthRow}</div>}
                </p>
            </div>
        );
    }
}