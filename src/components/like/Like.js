import React from "react";

export default class Like  extends React.Component{
    render(){
        console.log("like render called");
        return(
            <div>
                <h2>Likes : {this.props.count}</h2>
            </div>
        )
    }
}