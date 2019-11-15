import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Article from './components/Article';
import Admin from './components/Admin'
import Footer from './components/Footer'
import Category from './components/Category';

const NavRoute = ({ exact, path, component: Component }) => (
	<Route exact={exact} path={path} render={(props) => (
		<div>
			<Header />
			<Component {...props} />
			{/* <Footer /> */}
		</div>
	)} />
)

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<NavRoute exact path="/" component={Article}/>
					<NavRoute exact path="/category/:id" component={Category} />
					<Route exact path="/admin" component={Admin}  />
					<NavRoute exact path="/sampleArticle" component={Article}/>
					{/* <Route exact path="/" component={Article} />
					<Route exact path="/category/:id" component={Category} />
					<Route exact path="/admin" component={Admin} />
					<Route exact path="/sampleArticle" component={Article} /> */}
				</Router>
			</div>
		);
	}
}

export default App;
