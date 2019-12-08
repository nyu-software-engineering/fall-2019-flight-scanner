import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Article from './AdminArticle';
import MiniArticle from '../reader/Mini-article';

const useStyles = makeStyles(theme => ({
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
	}

}));

function getSteps() {
	return ['Article information and text', 'Confirm the preview', 'Publish'];
}

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return ('Article info retrieved from database: URL Title Teaser Author Content in Markdown');
		case 1:
			return (<Article></Article>)
				;
		case 2:
			return (<MiniArticle></MiniArticle>);
		default:
			return
	}
}

export default function ProgressBar() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handlePublish = () => {
		alert("attempting to publish article")
	};

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map(label => (
					<Step key={label}>
						<StepLabel StepIconProps={{ classes: { root: classes.stepIcon } }}>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<div>
				<div>
					<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
					<div>
						<Button
							disabled={activeStep === 0}
							onClick={handleBack}
							className={classes.backButton}
						>
							Back
							</Button>
						<Button className={classes.nextButton} variant="contained" onClick={handleNext} disabled={activeStep === 2}>
							Next
							</Button>
						<br></br>
						<Button className={classes.nextButton} variant="contained" onClick={handlePublish} disabled={activeStep !== 2}> Publish </Button>
					</div>
				</div>
			</div>
		</div>
	);
}