import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
import './App.css';

const NavRoute = ({ exact, path, component: Component }) => (
	<Route exact={exact} path={path} render={(props) => (
		<div>
			<Header />
			<Component {...props} />
		</div>
	)} />
)

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<NavRoute exactly component={Landing} pattern="/" />
						<Route exactly component={Login} pattern="/admin" />
						<NavRoute exactly component={Category} pattern="/category/:cat" />
						<NavRoute exactly component={Category} pattern="/category/:cat" />
						<NavRoute component={Page404} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
