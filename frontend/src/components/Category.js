import React, { Component } from 'react';
import axios from 'axios';

export default class Category extends Component {

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
        return (
            <div>
                {this.state.articles.map(article =>
                    <p>{article.articleText}</p>
                )}
            </div>
        )
    }
}