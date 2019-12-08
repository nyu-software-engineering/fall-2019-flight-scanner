import React, { Component } from 'react';


class ErrorPage extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
            <img style = {{marginTop: '10%'}} src={'https://coverager.com/wp-content/uploads/2017/02/oh-no.jpg'} alt={'Man in shock'}></img>
            <h1> 404 </h1>
            </div>
        );
    }
}

export default ErrorPage; 