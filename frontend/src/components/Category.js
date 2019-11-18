import React, { Component } from 'react';
import axios from 'axios';
import MiniArticle from './Mini-article';
import { Grid, Container } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    container: {
        maxWidth: "80vw",
        margin: "auto"
    },
    gridContainer: {

    }
})

class Category extends Component {

    constructor(props) {
        super(props)
        // To add in some default articles for when DB does not provide any, add them to the Array Below
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/article/getByCategory/${this.props.match.params.id}`)
            .then(response => {
                console.log("didmount", response.data)
                this.setState({
                    articles: response.data
                })
            })
            .catch(error => {
                console.log("ERROR in Category loading ", error)
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            // This means that the query param has changed! We need to reload the articles
            axios.get(`http://localhost:5000/article/getByCategory/${this.props.match.params.id}`)
                .then(response => {
                    console.log("didupdate", response.data)
                    this.setState({
                        articles: response.data
                    })
                })
                .catch(error => {
                    console.log("ERROR in Category loading ", error)
                })
        }
    }

    render() {
        const { classes } = this.props
        return (
            <Container className={classes.container}>
                <Grid container spacing={3} className={classes.gridContainer} alignItems="flex-start">
                    {this.state.articles.map(article =>
                        // <p>{article.articleText}</p>
                        <Grid item xs={12} sm={6} lg={4} key={article.articleId}>
                            <MiniArticle banner={article.articleImg}
                                teaser={article.articleTeaser}
                                title={article.articleTitle}
                                author={article.articleAuthor}
                            />
                        </Grid>
                    )}
                </Grid>
            </Container>
        )
    }
}

export default withStyles(styles)(Category)