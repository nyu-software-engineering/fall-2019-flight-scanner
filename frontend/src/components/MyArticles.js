import React, { Component } from 'react';
import Miniarticle from './Mini-article';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({

    container: {
        margin: 'auto',
        maxWidth: '1000px',
    },

    section: {
        marginBottom: "0.5%",
        marginLeft: "7%",
        textAlign: "left",
        color: 'grey',
        marginTop: '5%'
    },

    divider: {
        marginBottom: "4%",
    }

})


class MyArticles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedArticles: [1,2,3,4], //dummy for now, will be a list of json objects
            waitingArticles: [1,2,3]
        }
    }

    showWaiting = () => {
        // parsing throught the json to get the necessary details 
      
        let banner = "https://lorempixel.com/960/540"
        let title = "Dummy Title"
        let teaser= "A dummy article waiting to be published"
        // let author="KertuKertu "
        // let slug="waiting-publishing"

        return <Grid container spacing={3}>
            {this.state.waitingArticles.map(() => { return <Grid item xs={6} sm={3}><Miniarticle banner={banner} teaser={teaser} title={title} /> </Grid> })}
            </Grid>
    }

    showSaved = () => {

        let banner = "https://lorempixel.com/960/540"
        let title = "Dummy Saved Title"
        let teaser= "A dummy article that has been saved"
        // let author="KertuKertu "
        // let slug="saved"

        return <Grid container spacing={3}>
            {this.state.savedArticles.map(() => { return <Grid item xs={6} sm={3}><Miniarticle banner={banner} teaser={teaser} title={title} /> </Grid> })}
            </Grid>
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Container className={classes.container}>
                    <p className={classes.section}>Waiting Final Review ({this.state.waitingArticles.length})</p>
                    <Divider className={classes.divider} variant="middle" />

                    {this.showWaiting()}

                    <p className={classes.section}>My Saved Articles ({this.state.savedArticles.length})</p>
                    <Divider className={classes.divider} variant="middle" />

                    {this.showSaved()}

                </Container>

            </div>
        );
    }
}

export default withStyles(styles)(MyArticles); 