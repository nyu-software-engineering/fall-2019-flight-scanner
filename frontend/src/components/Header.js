import React, { Component } from 'react';
import { Link } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles({
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

const tempCategories = [
    "sport", 
    "politics", 
    "agile"
]

const loadCategories = (categories) => {
    return categories.map(category => {
        <li className={styles.nav_item}>
            <Link className={styles.nav_link} to={`/${category}`}>{category}</Link>
        </li>
    })
}

export default function Header(props) {
    const styles = makeStyles();
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <ul className="Nav__item-wrapper"> {loadCategories(temCategories)} </ul>
            </div>
        </nav>
    );
}