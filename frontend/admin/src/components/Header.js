import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    nav: {
        background: "#2E3B55",
        boxShadow: "none",
        marginBottom: "15px",
    },
    container: {
        textAlign: "center",
        background: "#2E3B55",
        marginBottom: "15px"
    },
    nav_item: {
        listStyleType: "none",
        float: "left",
        margin: "10px",
    },
    nav_link: {
        textTransform: "uppercase",
        fontFamily: "sans-serif",
        textDecoration: "none",
        color: "white",
        "&:hover": {
            color: "grey"
        }
    },
    wrapperUL: {
        margin: "auto",
        display: "inline-block",
        padding: "0px"
    },
    topsection: {
        color: "white",
        padding: "12px"
    },
    logout: {
        display: "inline-flex",
        float: "right",
        textDecoration: "none",
        marginEnd: "15px",
        color: "white"
    }
})

class Header extends Component {

    handleLogout = () => {
        sessionStorage.clear()
        // this.props.history.push("/")
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <Typography variant='h6' className={classes.topsection}>The LightShare News</Typography>
                <Link to={'/'} className={classes.logout} onClick={this.handleLogout} >Logout</Link>
                <ul className={classes.wrapperUL}>
                    <li className={classes.nav_item} key={'my-article'}>
                        <Link className={classes.nav_link} to={`/my-articles`}>My Articles</Link>
                    </li>
                    <li className={classes.nav_item} key={'create'}>
                        <Link className={classes.nav_link} to={`/create`}>Create</Link>
                    </li>
                    <li className={classes.nav_item} key={'my-account'}>
                        <Link className={classes.nav_link} to={`/my-account`}>My Account</Link>
                    </li>
                    {JSON.parse(sessionStorage.getItem("user")).authorAccess === "Admin" ? (
                        <li className={classes.nav_item} key={'team-management'}>
                            <Link className={classes.nav_link} to={`/team-management`}>Team Management</Link>
                        </li>
                    ) : null}

                </ul>
            </div>
        )
    }

}

export default withStyles(styles)(Header)