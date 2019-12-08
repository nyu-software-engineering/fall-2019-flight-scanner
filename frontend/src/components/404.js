import React, { Component } from 'react';


class ErrorPage extends Component {
 
    render() {
        return (
            <div>
            <img style = {{marginTop: '10%', marginBottom: '10px'}} src={'https://coverager.com/wp-content/uploads/2017/02/oh-no.jpg'} alt={'Man in shock'}></img>
            <h2> Are you sure you are looking for the right page? </h2>
            </div>
        );
    }
}

export default ErrorPage; 