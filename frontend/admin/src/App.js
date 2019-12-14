import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MyArticles from './components/MyArticles';
import ErrorPage from './components/404';
import Create from './components/Create';
import Management from './components/Management';
import Account from './components/Account';

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
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/" component={}/>
                        <Route exact path="/team-management" component={}/>
                        <Route exact path="/my-articles" component={MyArticles}/>
                        <Route exact path="/my-account" component={}/>
                        <Route exact path="/create" component={}/>
                        <Route component={ErrorPage}/>
                        {/* <Refresh /> */}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
