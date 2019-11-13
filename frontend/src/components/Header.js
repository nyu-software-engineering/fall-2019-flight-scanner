import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export default class Header extends Component{

    constructor(props){
        super(props)
        this.state = {categories: []}
    }

    componentDidMount() {
        axios.get("")
        .then(response => {
            this.setState({categories: response.data})
        })
        .catch(error => {
            console.log("Error! ", error)
        })
    }

    loadCategories = (categories, styles) => {
        return categories.map(category => {
            return (<li className={styles.nav_item}>
                <Link className={styles.nav_link} to={`/${category}`}>{category}</Link>
            </li>)
        })
    }

    styles = makeStyles({
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

    render() {
        return (
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <ul className="Nav__item-wrapper"> {loadCategories(tempCategories, styles)} </ul>
                </div>
            </nav>
        );
    }
}