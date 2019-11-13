import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Article from './components/Article';
import Admin from './components/Admin'
import Footer from './components/Footer'

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
					<Switch>
						<NavRoute exactly component={Article} pattern="/" >
							{/* <NavRoute>

							</NavRoute> */}
						</NavRoute>
						<Route exactly component={Admin} pattern="/admin" />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
