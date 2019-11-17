import React, { Component } from 'react';
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
	  }
})

class MiniArticle extends Component {
	constructor(props) {
		super(props)
		console.log(props)
	}

	handleClick = () => {
		alert("Coming soon!")
	}

	render() {
		const { classes } = this.props
		return (
			// <MiniArticleComponent props={this.props} />
			<div>
				<Card className={classes.card}>
					<CardActionArea onClick={this.handleClick}>
						<CardMedia
							className={classes.media}
							image={this.props.banner}
							title={this.props.title}
							component="img"
						/>
						<CardContent>
							<Typography align="left" variant="h5" component="h2" className={classes.titleStyle}>
								{this.props.title}
          					</Typography>
							<Typography variant="body2" color="textSecondary" component="p" align="left">
								{this.props.teaser}
          					</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		)
	}
}

MiniArticle.defaultProps = {
	banner: "https://lorempixel.com/960/540",
	title: "Dummy Title goes here",
	teaser: "A teaser for the dummy article here and even more teaser",
	author: "Dummy Author 1"
}

export default withStyles(styles)(MiniArticle)
