import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Article from './components/Article';
import Category from './components/Category';
import MiniArticle from './components/Mini-article';
import LandingWrapper from './components/LandingWrapper';
import Team from './components/TeamPage';
import ErrorPage from './components/404';
import Landing from './components/Landing';

const Refresh = ({ path = '/' }) => (
	<Route
		path={path}
		component={({ history, location, match }) => {
			history.replace({
				...location,
				pathname: location.pathname.substring(match.path.length)
			});
			return null;
		}}
	/>
);

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Header />
					<Switch>
						
						<Route exact path="/" component={MiniArticle} />
						<Route exact path="/category/:id" component={Category} />
						<Route exact path="/article/:id" component={Article} />
						<Route exact path="/landing" component={LandingWrapper} />
						<Route exact path="/team" component={Team} />
						<Route exact path="/search-results" component={Landing} />
						<Refresh path="/refresh" />
						<Route component={ErrorPage} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
