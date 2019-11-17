import React, { Component } from 'react';
import Miniarticle from './Mini-article';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
    root:{
        textAlign: "center",
    },


})

class Profile extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div>
                    <img alt={this.props.name} className={classes.pic} src={this.props.picture}></img>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.bio}</p>
                    
                </div>
                <div>
                    <Miniarticle></Miniarticle>
                    <Miniarticle></Miniarticle>
                    <Miniarticle></Miniarticle>
                </div>
            </div>
        );
    }
}

export default  withStyles(styles)(Profile);

Profile.defaultProps = {
    picture: 'https://thehappypuppysite.com/wp-content/uploads/2018/10/chow-chow-names-CR-long-1024x555.jpg',
    name: 'Author Author',
    bio: "Welcome to your complete guide to the best Chow Chow names, giving you plenty of ideas for what to call your beautiful and powerful Chow Chow. Chow Chow dog names should highlight this ancient Chinese breed’s best qualities. Be that their gorgeous mane of red, white, blue, cream, blue, or tawny fur; their legendary “tough dog” presence; or perhaps their Chinese roots! No matter what inspires your potential dog names for Chow Chow, there are some things to keep in mind to ensure that your pooch both knows and answers to their name. Such as, how the name is pronounced, whether the name is long or short, and how different it is from the names of your other household members.",
    articles: []
}


