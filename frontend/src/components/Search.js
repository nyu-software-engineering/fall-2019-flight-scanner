import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


// MaterialUI styles 
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'absolute',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,

		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	link: {
		textDecoration: "none",
		color: "white"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200,
			},
		},
	},
}));

// MaterialUI searchappbar
// props is coming here from the parent component Search
// function SearchAppBar fromatting takes for some reason more time to update the state in Search than const fomatting.
const SearchAppBar = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ background: '#2E3B55' }}>
				<Toolbar>
					<Typography className={classes.title} variant="h6" noWrap>
						<Link to="/landing" className={classes.link}>The LightShare News</Link>
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
							onKeyPress={props.submit_search}
						>
						</InputBase>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

// The main component 
class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentinput: "",
			searchPressed: false,
		}
	}

	// Takes care of changing the currentinput whenever enter has been hit after writing into the searchbar
	handleSubmitSearch = (event) => {
		if (event.key === 'Enter') {
			// console.log('enter press here!')
			const { history } = this.props;
			this.setState({
				currentinput: event.target.value,
				searchPressed: true
			}, () => { history.push(`/refresh/search-results?q=${this.state.currentinput}`) })
		}
	}

	render() {
		// if (this.state.searchPressed){
		// 	return (<Redirect to={{pathname: '/search-results', state: this.state.currentinput}}/>)
		// }
		return (
			<div>
				<SearchAppBar submit_search={this.handleSubmitSearch}>
				</SearchAppBar>
			</div>
		);
	}
}

function searchvalidity(input) {
	if (input.length === 0) {
		return "Invalid Search";
	}
	return input;
};

function lenval(input) {
	if (input.length <= 40) {
		return 1;
	}
	return 0;
};

function split(input) {
	let input_list = input.split(" ")
	if (input_list.length === 1) {
		return input_list[0]
	}
	else {
		return input_list
	}
}

function match(input_word, title) {
	let title_list = title.split(" ")
	var counter = 0;
	var i;
	for (i = 0; i < title_list.length; i++) {
		if (input_word.toLowerCase() === title_list[i].toLowerCase()) {
			counter++;
		}
	}
	return counter;
}

function popularity(input, history) {
	let temp = []
	var i;
	for (i = 0; i < 2; i++) {
		if (history[i] === input) {
			return history
		}
		else {
			temp.push(history[i])
		}
	};

	temp.push(input)
	return temp;
}

export { searchvalidity, lenval, useStyles, split, match, popularity, SearchAppBar }

export default withRouter(Search);


