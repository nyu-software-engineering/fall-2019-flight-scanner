import ProgressBar from "./Progress"
import React, { Component } from 'react';




class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            finished_update : false 
        }
    }



    render() {
        return (
            <div>
                <ProgressBar info = {this.props.location.state.id.info} ></ProgressBar>
                {/* <p>{this.props.location.state.id.info.articleId}</p> */}
            </div>
        );
    }
}

export default Admin;