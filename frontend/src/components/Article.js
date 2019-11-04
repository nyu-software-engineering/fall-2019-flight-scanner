import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    page: {
        width: "100%",
        maxWidth: "720"
    },
    bannerImage: {
        width: "100%"
    },
    title: {
        textTransform: "uppercase"
    }
});

const ArticleComponent = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.page}>
            <Typography variant="h2" className={classes.title}>
                {props.title}
            </Typography>
            <div className='bannerImage' src={props.banner}>
                {props.banner}
            </div>
        </div>
    )
}

class Article extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ArticleComponent props={this.props}/>
        )
    }
}

Article.defaultProps = {
    banner: "ASSETS/defaultBanner.png",
    title: "Dummy Title",
    teaser: "A teaser for the dummy article here",
    authors: [
        "Dummy Author 1",
        "Dummy Author 2"
    ],
    body: "Some dummy markdown here"
}

export default Article
