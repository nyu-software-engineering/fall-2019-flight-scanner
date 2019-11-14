import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [
                "dummy", 
                "not",
                "dynamic"
            ]
        }
        this.styles = makeStyles({
            nav: {

            },
            container: {

            },
            nav_item: {

            },
            nav_link: {
                textTransform: "uppercase",
                fontFamily: "sans-serif"
            },

        })
    }

    componentDidMount() {
        // Engineer's Note: the call will return dummy categories only unless you run the node server in the /backend folder too
        axios.get("http://localhost:5000/category/getAllCategories")
            .then(response => {
                console.log("response rcvd", response)
                this.setState({
                    categories: response.data
                })
            })
            .catch(error => {
                console.log("Error! ", error)
            })
    }

    loadCategories = (categories, styles) => {
        return categories.map(category => {
            // Temporarily converting everything to lower case
            category = category.toLowerCase()
            return (<li className={styles.nav_item} key={category}>
                <Link className={styles.nav_link} to={`/category/${category}`}>{category}</Link>
            </li>)
        })
    }

    render() {
        return (
            <nav className={this.styles.nav}>
                <div className={this.styles.container}>
                    <ul className="Nav__item-wrapper"> {this.loadCategories(this.state.categories, this.styles)} </ul>
                </div>
            </nav>
        );
    }
}