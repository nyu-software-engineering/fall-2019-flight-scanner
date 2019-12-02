import React, { Component } from 'react';
import Miniarticle from './Mini-article';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


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



})

class Landing extends Component{


    

    render(){
        const { classes }  = this.props; 
        return(
            
            <div className={classes.paper}>


                <Container className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={3}>
                            <Miniarticle ></Miniarticle>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Miniarticle></Miniarticle>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Miniarticle></Miniarticle>

                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Miniarticle  ></Miniarticle>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Miniarticle ></Miniarticle>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Miniarticle></Miniarticle>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Miniarticle  ></Miniarticle>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Miniarticle  ></Miniarticle>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Miniarticle></Miniarticle>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        )
    }
}



export default withStyles(styles)(Landing) ; 

