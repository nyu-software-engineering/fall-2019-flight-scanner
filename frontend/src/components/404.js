import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';


class ErrorPage extends Component {
 
    render() {
        return (
            <div>
            <img style = {{marginTop: '10%', marginBottom: '10px'}} src={'https://coverager.com/wp-content/uploads/2017/02/oh-no.jpg'} alt={'Man in shock'}></img>
            <Typography variant='h5'> Are you sure you are looking for the right page? </Typography>
            

            <Button><Link style ={{color:'black', textDecoration: 'none'}} to='/landing'> Travel back to Homepage</Link></Button>
            </div>
        );
    }
}

export default ErrorPage; 