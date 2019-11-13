import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = { categories: [] }
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
        axios.get("http://10.253.105.223:5000/category/getAllCategories")
            .then(response => {
                this.setState({
                    categories: response.data.forEach((cat, id) => {
                        return {
                            _id: id, 
                            category: cat
                        }
                    })
                })
            })
            .catch(error => {
                console.log("Error! ", error)
            })
    }

    loadCategories = (categories, styles) => {
        return categories.map((key, category) => {
            console.log(key, category)
            return (<li className={styles.nav_item}>
                <Link className={styles.nav_link} to={`/${category}`} key={key}>{category}</Link>
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