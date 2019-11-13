import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		textAlign: "left"
	},
	control: {
		padding: theme.spacing(2)
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
		fontWeight: "400",
		textAlign: "left"
	},
	teaser: {
		textAlign: "left",
		fontStyle: "italic"
	},
	author: {
		textAlign: "left"
	},
}));

const MiniArticleComponent = (props) => {
	const classes = useStyles()
	props = props.props
	return (
		<div className={classes.page}>
			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={10}>
						{[0].map(value => (
							<Grid key={value} item>
								<Box
									width={300}
									lineHeight={1}
									float="left">
									<img className='bannerImage' alt="banner for mini article component" src={props.banner} style={{ maxWidth: "300px" }} />
									<Typography variant="h6" className={classes.title}>
										{props.title}
									</Typography>
									<Typography variant="h6" className={classes.author} style={{ fontWeight: "200" }}>
										{props.author}
									</Typography>
									<Typography variant="subtitle1" className={classes.teaser}>
										{props.teaser}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

class MiniArticle extends Component {
	constructor(props) {
		super(props)
		console.log(props)
	}

	render() {
		return (
			<MiniArticleComponent props={this.props} />
		)
	}
}

MiniArticle.defaultProps = {
	banner: "ASSETS/trumpCartoon.jpg",
	title: "Dummy Title goes here",
	teaser: "A teaser for the dummy article here and even more teaser",
	author: "Dummy Author 1"
}

export default MiniArticle
