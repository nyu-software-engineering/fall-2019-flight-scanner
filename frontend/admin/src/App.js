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

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={MyArticles} />
                        <Route exact path="/team-management" component={Management} />
                        <Route exact path="/my-articles" component={MyArticles} />
                        <Route exact path="/my-account" component={Account} />
                        <Route exact path="/create" component={Create} />
                        <Route exact path="/edit" component={Create} />
                        <Route exact path="/approve" component={Progress} />
                        <Route component={ErrorPage} />
                        {/* <Refresh /> */}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
