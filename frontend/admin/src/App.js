import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MyArticles from './components/MyArticles';
import ErrorPage from './components/404';
import Create from './components/Create';
import Account from './components/Account';
import Management from './components/Management';
import Progress from './components/Progress';
import './App.css'
import Login from './components/Login';
import Article from './components/Article';
import Profile from './components/Teammember-profile'

// const Refresh = ({ path = '/' }) => (
//     <Route
//         path={path}
//         component={({ history, location, match }) => {
//             history.replace({
//                 ...location,
//                 pathname: location.pathname.substring(match.path.length)
//             });
//             return null;
//         }}
//     />
// );

export const isAuthenticated = () => {
    if (sessionStorage.getItem("user") === null)
        return false;
    else return true;
}

export const AuthenticatedRoute = ({
    component: Component,
    exact,
    path,
}) => (
        <Route
            exact={exact}
            path={path}
            render={props =>
                isAuthenticated() ? (
                    <div>
                        <Header />
                        <Component {...props} />
                    </div>
                ) :
                    <Login />
            }
        />
    )

    

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <AuthenticatedRoute exact path="/" component={Login} />
                        <AuthenticatedRoute exact path="/team-management" component={Management} />
                        <AuthenticatedRoute exact path="/my-articles" component={MyArticles} />
                        <AuthenticatedRoute exact path="/my-account" component={Account} />
                        <AuthenticatedRoute exact path="/create" component={Create} />
                        <AuthenticatedRoute exact path="/edit" component={Create} />
                        <AuthenticatedRoute exact path="/approve" component={Progress} />
                        <AuthenticatedRoute exact path="/article/:id" component={Article} />
                        <AuthenticatedRoute exact path="/profile/:id" component={Profile} />
                        <AuthenticatedRoute component={ErrorPage} />
                        {/* <Refresh /> */}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
