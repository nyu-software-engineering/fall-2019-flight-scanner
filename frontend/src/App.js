import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Article from './components/Article';
import Admin from './components/Admin'
import Category from './components/Category';
import Create from './components/Create';
<<<<<<< HEAD
import Account from './components/Account'; 
=======
import Profile from './components/Teammember-profile';
import MiniArticle from './components/Mini-article';
>>>>>>> 78c33697cf2bc93f5139c6715e9f7d9fd510d0a8

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
					<Route exact path="/admin/create" component={Create}/>
					<NavRoute exact path="/sampleArticle" component={Article}/>
<<<<<<< HEAD
					<NavRoute exact path="/Account" component={Account}/>
=======
					<NavRoute exact path="/profile" component = {Profile}/>
					<NavRoute exact path="/samplemini" component={MiniArticle} />
>>>>>>> 78c33697cf2bc93f5139c6715e9f7d9fd510d0a8

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
