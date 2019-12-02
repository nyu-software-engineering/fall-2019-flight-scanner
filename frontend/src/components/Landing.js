import React, { Component } from 'react';
import Miniarticle from './Mini-article';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Teammember from './Team-member'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        textAlign: "center",
        flexWrap: "wrap",

    },

    container: {
        marginTop: "30px",
        margin: 'auto',
        // maxWidth: '1000px'
    },

    paper: {
        padding: theme.spacing(3, 2), 

    },


})

class Landing extends Component{


    

    render(){
        const { classes }  = this.props; 
        return(
            
            <div className={classes.paper}>
                <Paper className={classes.root}>
                    <Typography variant="h1" component="h3">
                        Welcome to LightShare
                    </Typography>

                </Paper>

                <Container className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={3}>
                            <Miniarticle ></Miniarticle>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Miniarticle></Miniarticle>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Teammember></Teammember>

                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Miniarticle  ></Miniarticle>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Miniarticle ></Miniarticle>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Teammember></Teammember>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Miniarticle  ></Miniarticle>

                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Miniarticle  ></Miniarticle>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Teammember></Teammember>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        )
    }
}

Landing.defaultProps = {
    picture: 'http://lorempixel.com/300/300/',
    name: 'Author Author',
    role: 'Chief Editor',
    bio: "Welcome to your complete guide to the best Chow Chow names, giving you plenty of ideas for what to call your beautiful and powerful Chow Chow. Chow Chow dog names should highlight this ancient Chinese breed’s best qualities. Be that their gorgeous mane of red, white, blue, cream, blue, or tawny fur; their legendary “tough dog” presence; or perhaps their Chinese roots! No matter what inspires your potential dog names for Chow Chow, there are some things to keep in mind to ensure that your pooch both knows and answers to their name.",
}



export default withStyles(styles)(Landing) ; 

