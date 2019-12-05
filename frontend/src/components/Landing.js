import React, { Component } from 'react';
import Miniarticle from './Mini-article';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';


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

    displayRight: {
        // marginTop: "10%",
        // marginBottom: "10%"
    }



})

class Landing extends Component{

    constructor(props) {
        super(props)
        // To add in some default articles for when DB does not provide any, add them to the Array Below
        this.state = {
            articles: [],


        }
    }


    componentDidMount() {
        axios.get(`http://localhost:5000/article`)
            .then(response => {

                console.log("didmount", response.data)
                this.setState({
                    articles: response.data,

                })
            })
            .catch(error => {
                console.log("ERROR in Category loading ", error)
            })


    }



    

    render(){
        const { classes }  = this.props; 
        
        return(
            
            <div className={classes.paper}>


                <Container className={classes.container}>
                    <Grid container spacing={6}>
                    {/* First row. Three in a row */}
                    {this.state.articles.slice(0, 3).map(article =>
                        // <p>{article.articleText}</p>
                        <Grid item xs={12} sm={12} md={4} key={article.articleId}>
                            <Miniarticle banner={article.articleImg}
                                teaser={article.articleTeaser}
                                title={article.articleTitle}
                                author={article.articleAuthor}
                                slug={article.articleId}
                            />
                        </Grid>
                    )}

                    {this.state.articles.slice(0,1).map(article =>
                    // row 2 left, one 
                        <Grid item xs={12} sm={12} md={9} key={article.articleId} >
                            <Miniarticle banner={article.articleImg}
                                teaser={article.articleTeaser}
                                title={article.articleTitle}
                                author={article.articleAuthor}
                                slug={article.articleId}
                            />
                        </Grid>
                    )}

                    
                    {this.state.articles.slice(0,1).map(article =>
                        // row 2 right, one
                        <Grid item xs={12} sm={12} md={3} className={classes.displayRight}>
                            <Miniarticle banner={article.articleImg}
                                teaser={article.articleTeaser}
                                title={article.articleTitle}
                                author={article.articleAuthor}
                                slug={article.articleId}
                                
                            />
                        </Grid>
                        
                    )}
                    


                    {this.state.articles.slice(0,3).map(article =>
                        // row three, 3 mini articles
                        <Grid item xs={12} sm={12} md={4} key={article.articleId}>
                            <Miniarticle banner={article.articleImg}
                                teaser={article.articleTeaser}
                                title={article.articleTitle}
                                author={article.articleAuthor}
                                slug={article.articleId}
                            />
                        </Grid>
                    )}

                    {this.state.articles.slice(0,1).map(article =>
                    // row 4 left, one 
                        <Grid item xs={12} sm={12} md={3} key={article.articleId} >
                            <Miniarticle banner={article.articleImg}
                                teaser={article.articleTeaser}
                                title={article.articleTitle}
                                author={article.articleAuthor}
                                slug={article.articleId}
                            />
                        </Grid>
                    )}

                    
                    {this.state.articles.slice(0,1).map(article =>
                        // row 4 right, one
                        <Grid item xs={12} sm={12} md={9} className={classes.displayRight}>
                            <Miniarticle banner={article.articleImg}
                                teaser={article.articleTeaser}
                                title={article.articleTitle}
                                author={article.articleAuthor}
                                slug={article.articleId}
                                
                            />
                        </Grid>
                        
                    )}

                    {this.state.articles.slice(0,3).map(article =>
                        // row 5, 3 mini articles
                        <Grid item xs={12} sm={12} md={4} key={article.articleId}>
                            <Miniarticle banner={article.articleImg}
                                teaser={article.articleTeaser}
                                title={article.articleTitle}
                                author={article.articleAuthor}
                                slug={article.articleId}
                            />
                        </Grid>
                    )}

                    
                    

                    </Grid>
                </Container>
            </div>
        )
    }
}



export default withStyles(styles)(Landing); 

