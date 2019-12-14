import React, { Component } from 'react';

class Header extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>
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
                    <li className={classes.nav_item} key={'team-management'}>
                        <Link className={classes.nav_link} to={`/team-management`}>Team Management</Link>
                    </li>
                </ul>
            </div>
        )
    }

}