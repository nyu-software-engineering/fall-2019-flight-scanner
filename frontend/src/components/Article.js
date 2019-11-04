import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { minWidth } from '@material-ui/system';

const useStyles = makeStyles({
    root: {
        textAlign: "center"
    },
    page: {
        display: "inline-block",
        width: "100%",
        maxWidth: "1080px"
    },
    bannerImage: {

    },
    title: {
        textTransform: "uppercase",
        fontWeight: "600",
        objectFit: "contain",
        textAlign: "left",
        marginBottom: "10px"
    },
    teaser: {
        textAlign: "left",
        fontStyle: "italic"
    },
    author: {
        textAlign: "left"
    },
    articleBody: {
        marginTop: "15px",
        textAlign: "left"
    }
});

const ArticleComponent = (props) => {
    const classes = useStyles()
    props = props.props
    return (
        <div className={classes.root}>
            <div className={classes.page}>

                <img className='bannerImage' src={props.banner} style={{ maxWidth: "100%" }} />

                <Typography variant="subtitle1" className={classes.teaser}>{
                    props.teaser}
                </Typography>
                <br />
                <Typography variant="h4" className={classes.title}>
                    {props.title}
                </Typography>
                <Typography variant="h5" className={classes.author}>
                    {props.author}
                </Typography>
                <Typography variant="body1" className={classes.articleBody}>
                    {props.body}
                </Typography>

            </div>
        </div>
    )
}

class Article extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <ArticleComponent props={this.props} />
        )
    }
}

Article.defaultProps = {
    banner: "ASSETS/trumpCartoon.jpg",
    title: "Dummy Title goes here and here and here",
    teaser: "A teaser for the dummy article here.Integer laoreet, felis vitae tempor ultricies, quam metus condimentum massa, sed porttitor ante sapien nec nibh. Nam dictum vel augue non gravida. ",
    author: "Dummy Author 1",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pretium nisl, eleifend pellentesque metus. Quisque maximus leo purus, non tempus enim blandit quis. Sed at tristique nulla. Suspendisse pulvinar quam nibh, a posuere sapien scelerisque at. Nunc elementum dolor in facilisis auctor. Maecenas faucibus diam at ante euismod, vitae lobortis justo auctor. In dignissim urna a massa pulvinar, et pulvinar ligula auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ullamcorper leo a magna posuere, sed pretium enim consectetur. Etiam dignissim blandit aliquet. Proin in ullamcorper quam, sed tincidunt nulla. Aliquam eget quam ullamcorper, porttitor nisi non, congue urna. Suspendisse a eleifend libero, tempus fermentum ex. Nulla leo felis, vulputate vitae viverra ut, mattis a massa. \n

Cras bibendum tempor mi ut vehicula. Quisque id risus ut mauris ultrices porttitor. Curabitur tristique nisl vel odio sagittis tristique. Praesent blandit lorem risus, ac imperdiet metus tincidunt dignissim. Praesent sollicitudin purus nisi, nec suscipit sem tempus viverra. Suspendisse sed venenatis risus, eu ultrices felis. Mauris luctus, lectus et fringilla eleifend, lorem tellus placerat velit, sed euismod purus orci quis justo. Mauris at odio scelerisque, eleifend leo sed, volutpat augue. Sed rhoncus mattis arcu vitae feugiat. Integer pellentesque tempor felis quis feugiat. Donec eu volutpat dui.

Integer molestie ultricies odio. Sed id leo ac libero sollicitudin gravida sed ut arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut et dolor vel nisi volutpat dapibus at in lacus. Ut ut leo tempus, cursus lacus quis, lobortis nisl. Curabitur bibendum neque erat, et pharetra dui aliquam sed. Integer lacinia lacus egestas erat gravida, quis bibendum eros eleifend. Curabitur posuere libero tellus, id pellentesque nibh luctus a. Ut efficitur tristique magna quis pellentesque.

Duis ut massa nec neque venenatis viverra at in elit. Sed vel posuere nibh, ac interdum mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris tempor interdum magna ac malesuada. In tempus sodales tincidunt. Curabitur suscipit sem a nisi porta posuere. Ut fermentum lectus diam, dapibus rutrum leo ornare sit amet. Vivamus urna arcu, vulputate ac erat ac, mattis malesuada tellus.

Integer laoreet, felis vitae tempor ultricies, quam metus condimentum massa, sed porttitor ante sapien nec nibh. Nam dictum vel augue non gravida. Vestibulum ornare congue placerat. Nulla aliquam, eros eget elementum gravida, velit ligula pharetra felis, in ullamcorper sem sem nec sem. Curabitur sodales scelerisque magna at posuere. Mauris vitae urna hendrerit, varius nisi a, eleifend massa. Sed laoreet sem ante, sed blandit massa condimentum vulputate. Duis vitae augue nec ex sagittis gravida ac ac justo. Quisque dignissim dapibus posuere. In aliquam odio cursus, scelerisque sapien ac, sagittis nisi. Vivamus sit amet mi ipsum. Curabitur a mauris vitae massa iaculis dictum at quis eros. Nunc ac consequat ex. Pellentesque pulvinar leo ultrices ante faucibus accumsan quis pellentesque risus. Phasellus ullamcorper vestibulum eros sed aliquet.`
}

export default Article
