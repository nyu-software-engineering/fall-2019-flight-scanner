import React, { Component } from 'react';
import axios from 'axios';

export default class Category extends Component {

    constructor(props) {
        super(props)
        // this.categories = [
        //     {articleText: "bc"}
        // ]

        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        axios.get(`http://10.253.105.223:5000/article/getByCategory/${this.props.match.params.id}`)
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
            axios.get(`http://10.253.105.223:5000/article/getByCategory/${this.props.match.params.id}`)
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

    // componentDidMount(){
    //     axios.get(`http://10.253.105.223:5000/article/getByCategory/${this.props.match.params.id}`)
    //         .then(response => {
    //             console.log("didmount", response.data)
    //             this.categories = response.data
    //             this.forceUpdate()
    //         })
    //         .catch(error => {
    //             console.log("ERROR in Category loading ", error)
    //         })

    // }

    // componentDidUpdate(){
    //     axios.get(`http://10.253.105.223:5000/article/getByCategory/${this.props.match.params.id}`)
    //         .then(response => {
    //             console.log("update",this.props.match.params.id, response.data)
    //             this.categories = response.data
    //             // this.forceUpdate()
    //         })
    //         .catch(error => {
    //             console.log("ERROR in Category loading ", error)
    //         })
    // }


    // render() {    
    //     return (
    //         <div>
    //             {/* {this.props.match.params.id} */}
    //             {/* {this.state.categories} */}
    //             {/* <h1>Helo</h1> */}
    //             <div>
    //                 {this.categories.map(article => {
    //                     return(<p>
    //                         {article.articleText}
    //                     </p>)
    //                 })}
    //             </div>
    //         </div>
    //     )
    // }

}