import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MiniArticle from './AdminMiniArticle';
import Create from './Create';
import AdminArticle from './AdminArticle';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';


const styles = theme => ({
	root: {
		width: '100%',
	},
	backButton: {
		marginRight: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	nextButton: {
		background: '#2E3B55',
		color: 'white',
		marginBottom: theme.spacing(1)
	},
	stepIcon: {
		color: '#2E3B55',
	},
	container: {
		margin: 'auto',
		maxWidth: '1100px',
	}

});




class ProgressBar extends Component {

	constructor(props) {
		super(props)

		this.state = {
			article: '',
			steps: ['Article information and text', 'Confirm the preview', 'Publish'],
			activeStep: 0,
			redirect: false



		}
	}

	componentDidMount() {
		console.log("Got here");
		console.log(this.props.info)
		axios.get(`http://localhost:5000/article/getByID/${this.props.info._id}`)
			.then(response => {

				console.log("didmount", response.data)
				this.setState({
					article: response.data,

				});

			})
			.catch(error => {
				console.log("ERROR in Category loading ", error)
			})
	}



	componentDidUpdate(prevProps, prevState) {
		if (prevState.activeStep === 0 && this.state.activeStep === 1) {
			axios.get(`http://localhost:5000/article/getByID/${this.props.info._id}`)
				.then(response => {

					console.log("didmount", response.data)
					this.setState({
						article: response.data,
					});


				})
				.catch(error => {
					console.log("ERROR in Category loading ", error)
				})
		}
	}



	getStepContent() {

		switch (this.state.activeStep) {
			case 0:

				return (<div><Create info={this.props.info}></Create> </div>);
			case 1:


				return (<AdminArticle banner={this.state.article.articleImg}
					title={this.state.article.articleTitle}
					teaser={this.state.article.articleTeaser}
					author={this.state.article.articleAuthor}
					body={this.state.article.articleText}
				></AdminArticle>)
					;
			case 2:
				return (<Grid>
					<Grid xl={3} sm={4}></Grid>
					<Grid xl={3} sm={4}><MiniArticle info={this.state.article}></MiniArticle></Grid>
				</Grid>);
			default:
				return
		}
	}

	handleNext = () => {

		this.setState({
			activeStep: this.state.activeStep + 1
		});

	};

	handleBack = () => {
		this.setState({
			activeStep: this.state.activeStep - 1
		});
	};

	handlePublish = () => {
		let dayDate = new Date().getDate(); //Current Date
		let month = new Date().getMonth() + 1; //Current Month
		let year = new Date().getFullYear(); //Current Year

		const articleJSON = {
			"articleId": this.state.article.articleId,
			"articleTitle": this.state.article.articleTitle,
			"articleAuthor": this.state.article.articleAuthor,
			"articleImg": this.state.article.articleImg,
			"articleImgDesc": this.state.article.articleImgDesc,
			"articleTeaser": this.state.article.articleTeaser,
			"articleText": this.state.article.articleText,
			"articleCategory": this.state.article.articleCategory,
			"articleDate": month.toString() + '/' + dayDate.toString() + '/' + year.toString(),
			"articleStatus": "published",
			"articleKeywords": this.state.article.articleKeywords
		};


		axios.post(`http://localhost:5000/article/update/${this.state.article._id}`, articleJSON)
		alert("Article Published! ");
		this.setState({
			redirect: true
		});
	};


	render() {
		const { classes } = this.props;
		if (this.state.redirect) {
			// window.location.reload()
			return (<Redirect to={`/my-articles`} />)

		}

		return (
			<Container className={classes.container}>
				<div className={classes.root}>
					<Stepper activeStep={this.state.activeStep} alternativeLabel>
						{this.state.steps.map(label => (
							<Step key={label}>
								<StepLabel StepIconProps={{ classes: { root: classes.stepIcon } }}>{label}</StepLabel>
							</Step>
						))}
					</Stepper>

					<div>
						<div>
							<Typography className={classes.instructions}>{this.getStepContent()}</Typography>
							<div>
								<Button
									disabled={this.state.activeStep === 0 || this.state.activeStep === 1}
									onClick={this.handleBack}
									className={classes.backButton}
								>
									Back
								</Button>
								<Button className={classes.nextButton} variant="contained" onClick={this.handleNext} disabled={this.state.activeStep === 2}>
									Next
								</Button>
								<br></br>
								<Button className={classes.nextButton} variant="contained" onClick={this.handlePublish} disabled={this.state.activeStep !== 2}> Publish </Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		);
	}








}

export default withStyles(styles)(ProgressBar); 