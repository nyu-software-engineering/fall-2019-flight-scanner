import React, { Component } from 'react';
import Miniarticle from './Mini-article';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const styles = theme => ({
    root: {
        textAlign: "center",
        flexWrap: "wrap"
    },
    pic: {
        width: '80%',
        padding: '10%',
        borderRadius: '50%'

    },
    container: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '1000px'
    }
})

class Profile extends Component {
    // constructor(props) {
    //     super(props)
    // }

    getArticles = (classes) => {
        //call to get all the articles 
        //what format will it come in? 
        //articles = []
        // return (articles.map( () => { return <Grid item xs={6} sm={3} <Miniarticle key={} value={}></Miniarticle> </Grid> }))
        return <Grid container>
            <Grid item xs={6} sm={3}>
                <Miniarticle ></Miniarticle>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Miniarticle ></Miniarticle>

            </Grid>
            <Grid item xs={6} sm={3}>
                <Miniarticle  ></Miniarticle>

            </Grid>
            <Grid item xs={6} sm={3}>
                <Miniarticle  ></Miniarticle>

            </Grid>
        </Grid>

    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Container className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <img alt={this.props.name} className={classes.pic} src={this.props.picture}></img>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <h1>{this.props.name}</h1>
                            <p>{this.props.bio}</p>
                        </Grid>
                        {this.getArticles(classes)}

                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Profile);

Profile.defaultProps = {
    picture: 'http://lorempixel.com/300/300/',
    name: 'Author Author',
    bio: "Welcome to your complete guide to the best Chow Chow names, giving you plenty of ideas for what to call your beautiful and powerful Chow Chow. Chow Chow dog names should highlight this ancient Chinese breed’s best qualities. Be that their gorgeous mane of red, white, blue, cream, blue, or tawny fur; their legendary “tough dog” presence; or perhaps their Chinese roots! No matter what inspires your potential dog names for Chow Chow, there are some things to keep in mind to ensure that your pooch both knows and answers to their name.",
}


