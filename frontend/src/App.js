import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import './App.css';
// import Article from './components/Article';
// import Admin from './components/Admin'
// import Category from './components/Category';
// import Create from './components/Create';
// import Account from './components/Account';
// import Profile from './components/Teammember-profile';
// import MiniArticle from './components/Mini-article';
// import Management from './components/Management';
// import MyArticles from './components/MyArticles';
// import LandingWrapper from './components/LandingWrapper';
// import Login from './components/Login';
// import Team from './components/TeamPage';
import './App.css'

import Admin from './components/admin/Admin';
import Create from './components/admin/Create';
import Header from './components/reader/Header';
import Article from './components/reader/Article';
import Category from './components/reader/Category';
import Account from './components/admin/Account';
import Profile from './components/reader/Teammember-profile';
import MiniArticle from './components/reader/Mini-article';
import Management from './components/admin/Management';
import MyArticles from './components/admin/MyArticles';
import LandingWrapper from './components/reader/LandingWrapper';
// import Login from './components/admin/Login';
import Team from './components/reader/TeamPage';

import ErrorPage from './components/404';

// import Header from './components/reader/Header';


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
					<NavRoute exact path="/" component={MiniArticle} />
					<NavRoute exact path="/category/:id" component={Category} />
					<Route exact path="/admin" component={Admin} />
					<Route exact path="/admin/create" component={Create} />
					<NavRoute exact path="/sampleArticle" component={Article} />
					<NavRoute exact path="/profile" component={Profile} />
					<NavRoute exact path="/samplemini" component={MiniArticle} />
					<NavRoute exact path="/admin/account" component={Account} />
					<NavRoute exact path="/account" component={Account} />
					<NavRoute exact path="/my-articles" component={MyArticles} />
					{/* <Route exact path="/" component={Article} />
					<Route exact path="/category/:id" component={Category} />
					<Route exact path="/admin" component={Admin} />
					<Route exact path="/sampleArticle" component={Article} /> */}
					<NavRoute exact path="/article/:id" component={Article} />
					<NavRoute exact path="/admin/team-management" component={Management} />
					{/* <Route exact path="/login" component={Login} /> */}
					<NavRoute exact path="/landing" component={LandingWrapper}/>
					<NavRoute exact path="/team" component={Team}/>
					<Route exact path='/edit' component={Create}/>
					<Route component={ErrorPage}/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;

// export { NavRoute };
