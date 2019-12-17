import React, { Component } from 'react';
import Miniarticle from './Mini-article';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import axios from 'axios';


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
        margin: 'auto',
        maxWidth: '1200px'
    },
    bio: {
        textAlign: "left",
        display:'flex',
        alignItems: 'center',

    },
    role: {
        marginBottom: "1%",
        marginTop: '0%',
        paddingTop: '0%',
        textTransform: "uppercase"
    },
    name: {
        marginBottom: "0%",
        marginTop: '0%',
        paddingTop: '0%',
        fontWeight: 'bold'

    }
})

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sessionVar: JSON.parse(sessionStorage.getItem("user")),
            author: "",
            articles: [],
            is_admin_window: (window.location.href.slice(-10) === 'my-account')
        }
    }

    componentDidMount(){
        let myAuthor = ""; 
        if(this.state.is_admin_window){
            myAuthor = this.state.sessionVar; 
        }
        else{
            myAuthor = this.props.location.state.id; 
        }

        axios.get(`http://localhost:5000/author/${myAuthor._id}`)
        .then(response => {

            console.log("didmount", response.data)
            this.setState({
                author: response.data,

            });

        })
        .catch(error => {
            console.log("ERROR in Category loading ", error)
        })

        let name = myAuthor.authorFirstName + ' ' + myAuthor.authorLastName; 

        axios.get(`http://localhost:5000/article/getByAuthorName/${name}`)
        .then(response => {
            console.log("didmount", response.data)
            this.setState({
                articles: response.data
            })
        })
        .catch(error => {
            console.log("ERROR in Teammember loading ", error)
        })
    }



    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Container className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <img alt={this.props.name} className={classes.pic} src={this.state.author.authorProfileUrl}></img>
                        </Grid>
                        <Grid item xs={12} sm={8} className={classes.bio}>
                            <div>
                                <Typography variant='h4' className={classes.name}>{this.state.author.authorFirstName + " " + this.state.author.authorLastName}</Typography>
                                <Typography variant='h6'  className={classes.role}>{this.state.author.authorRole}</Typography>
                                <Typography variant='body1'>{this.state.author.authorBio}</Typography>
                            </div>
                        </Grid>
                        
                        {this.state.articles.map( article =>  <Grid item xs={6} sm={3}> <Miniarticle 
                            banner={article.articleImg}
                            teaser={article.articleTeaser}
                            title={article.articleTitle}
                            author={article.articleAuthor}
                            slug={article.articleId}>
                            </Miniarticle> </Grid> )}

                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Profile);



