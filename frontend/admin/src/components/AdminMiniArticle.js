import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
	card: {
		maxWidth: "960px",
		boxShadow: "none",
		borderRadius: "5px",
	},
	media: {
		height: "auto",
		borderRadius: "5px"
	},
	titleStyle: {
		textTransform: "uppercase"
	},
	content: {
		paddingTop: "16px",
		paddingLeft: "4px"
	}
})

class MiniArticle extends Component {
	constructor(props) {
		super(props)

		this.state = {
			redirectToArticle: false
		}
	}

	handleClick = () => {

		this.setState({
			redirectToArticle: true
		})

	}

	render() {
		const { classes } = this.props

		if (this.state.redirectToArticle) {
			return (<Redirect to={{ pathname: this.props.redirection, state: { id: this.props } }} />)
		}
		else {
			return (
				<div>
					<Card className={classes.card}>
						<CardActionArea onClick={this.handleClick}>
							<CardMedia
								className={classes.media}
								image={this.props.info.articleImg}
								title={this.props.info.articleTitle}
								component="img"
							/>
							<CardContent className={classes.content}>
								<Typography align="left" variant="h5" component="h2" className={classes.titleStyle}>
									{this.props.info.articleTitle}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p" align="left">
									{this.props.info.articleTeaser}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
			)
		}
	}
}

MiniArticle.defaultProps = {
	banner: "https://lorempixel.com/960/540",
	title: "Dummy Title goes here",
	teaser: "A teaser for the dummy article here and even more teaser",
	author: "Dummy Author 1",
	slug: "samplearticle"
}

export default withStyles(styles)(MiniArticle)
