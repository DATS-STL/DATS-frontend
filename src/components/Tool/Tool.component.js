import { render } from "@testing-library/react";
import React from "react";

class Tool extends React.Component {



    state = {
        error_message: 'no error message YET'
    }


    render() {
        return (
            <div>
                <h3> {this.props.tool.name}</h3>
                <p>{this.props.tool.type}</p>
                <p>{this.props.tool.brand}</p>
                <p>{this.props.tool.description}</p>
            </div>
        )
    }
}

export default Tool;