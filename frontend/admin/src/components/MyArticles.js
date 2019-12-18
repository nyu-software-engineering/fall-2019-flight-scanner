import React, { Component } from 'react';
import AdminMiniArticle from './AdminMiniArticle';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios';
import { Typography } from '@material-ui/core';

const styles = theme => ({

    container: {
        margin: 'auto',
        maxWidth: '1100px',
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
            savedArticles: [],
            waitingArticles: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/article/getByState/pendingreview`)
            .then(response => {
                console.log("didmount", response.data)
                this.setState({
                    waitingArticles: response.data
                })
            })
            .catch(error => {
                console.log("Could not get the pending review articles: ", error)
            })

        const myAuthor = JSON.parse(sessionStorage.getItem("user"))
        let name = myAuthor.authorFirstName + ' ' + myAuthor.authorLastName

        axios.get(`http://localhost:5000/article/getSavedByAuthorName/${name}`)
            .then(response => {
                console.log("didmount", response.data)
                this.setState({
                    savedArticles: response.data
                })
            })
            .catch(error => {
                console.log("Could not get the unpublished articles: ", error)
            })
    }


    showWaiting = () => {


        return <Grid container spacing={3}>
            {this.state.waitingArticles.map((article) => { return <Grid item xs={6} sm={4}><AdminMiniArticle info={article} redirection="/approve" /> </Grid> })}
        </Grid>
    }

    showSaved = () => {

        return <Grid container spacing={3}>
            {this.state.savedArticles.map((article) => { return <Grid item xs={6} sm={4}><AdminMiniArticle info={article} redirection="/edit" /> </Grid> })}
        </Grid>
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Container className={classes.container}>

                    {JSON.parse(sessionStorage.getItem("user")).authorAccess === "Admin" ? (
                        <div>
                            <Typography variant='body1' className={classes.section}>Waiting Final Review ({this.state.waitingArticles.length})</Typography>
                            <Divider className={classes.divider} variant="middle" />
                        </div>
                    ) : null}

                    {JSON.parse(sessionStorage.getItem("user")).authorAccess === "Admin" ?
                        this.showWaiting() : null}

                    <Typography variant='body1' className={classes.section}>Saved Drafts ({this.state.savedArticles.length})</Typography>
                    <Divider className={classes.divider} variant="middle" />

                    {this.showSaved()}

                </Container>

            </div>
        );
    }
}

export default withStyles(styles)(MyArticles); 