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
        height: 'auto',
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
            articles:[]
        }
    }

    componentDidMount() {
        console.log(this.props.location.state.id)
        const name = this.props.location.state.id.authorFirstName + ' ' + this.props.location.state.id.authorLastName
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

    getArticles = () => {
        //call to get all the articles 
        //what format will it come in? 
        //articles = []
        return (this.state.articles.map( (article) => { return <Grid item xs={6} sm={3}> <Miniarticle 
        banner={article.articleImg}
        teaser={article.articleTeaser}
        title={article.articleTitle}
        author={article.articleAuthor}
        slug={article.articleId}></Miniarticle> </Grid> }))
     
    }

    render() {
        const { classes } = this.props
        return (
            
            <div className={classes.root}>
                
                <Container className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <img alt={"Handsome "+ this.props.location.state.id.authorLastName} className={classes.pic} src={this.props.location.state.id.authorProfileUrl}></img>
                        </Grid>
                        <Grid item xs={12} sm={8} className={classes.bio}>
                            <div>
                                <Typography variant='h4' className={classes.name}>{this.props.location.state.id.authorFirstName + ' ' + this.props.location.state.id.authorLastName}</Typography>
                                <Typography variant='h6'  className={classes.role}>{this.props.location.state.id.authorRole}</Typography>
                                <Typography variant='body1'>{this.props.location.state.id.authorBio}</Typography>
                            </div>
                        </Grid>
                        {this.getArticles()}

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
    role: 'Chief Editor',
    bio: "Welcome to your complete guide to the best Chow Chow names, giving you plenty of ideas for what to call your beautiful and powerful Chow Chow. Chow Chow dog names should highlight this ancient Chinese breed’s best qualities. Be that their gorgeous mane of red, white, blue, cream, blue, or tawny fur; their legendary “tough dog” presence; or perhaps their Chinese roots! No matter what inspires your potential dog names for Chow Chow, there are some things to keep in mind to ensure that your pooch both knows and answers to their name.",
}


