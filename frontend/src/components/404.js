import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';


class ErrorPage extends Component {
 
    render() {
        return (
            <div>
            <img style = {{marginTop: '10%', marginBottom: '10px'}} src={'https://coverager.com/wp-content/uploads/2017/02/oh-no.jpg'} alt={'Man in shock'}></img>
            <Typography variant='h5'> #2E3B55 Are you sure you are looking for the right page? </Typography>
            <Typography variant='h1'>h1 Are you sure you are looking for the right page</Typography>
            <Typography variant='h2'>h2 Are you sure you are looking for the right page</Typography>
            <Typography variant='h3'>h3 Are you sure you are looking for the right page</Typography>
            <Typography variant='h4'>h4 Are you sure you are looking for the right page</Typography>
            <Typography variant='h5'>h5 Are you sure you are looking for the right page</Typography>
            <Typography variant='h6'>h6 Are you sure you are looking for the right page</Typography>
            <Typography variant='subtitle1'>subtitle 1 Are you sure you are looking for the right page</Typography>
            <Typography variant='subtitle2'>subtitle 2 Are you sure you are looking for the right page</Typography>
            <Typography variant='body1'> body 1 Are you sure you are looking for the right page</Typography>
            <Typography variant='body2'>body 2 Are you sure you are looking for the right page</Typography>
            <Typography variant='caption'>caption Are you sure you are looking for the right page</Typography>
            <Typography variant='button'>button Are you sure you are looking for the right page</Typography>
            <Typography variant='overline'>overline Are you sure you are looking for the right page</Typography>
            <Typography variant='srOnly'>AsrOnly re you sure you are looking for the right page</Typography>
            <Typography variant='inherit'>inherit Are you sure you are looking for the right page</Typography>


            <Button><Link style ={{color:'black', textDecoration: 'none'}} to='/landing'> Travel back to Homepage</Link></Button>
            </div>
        );
    }
}

export default ErrorPage; 