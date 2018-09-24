import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

// Components

import HomePage from './Pages/homePage.jsx';
import UserProfile from './Pages/userProfile.jsx';
import GamesPage from './Pages/gamesPage.jsx';
import NotFound from './Pages/notFound.jsx';

// Includes
import '../scss/main.scss';


class App extends React.Component {
    render() {
        return  <HashRouter>

                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/userProfile' component={UserProfile} />
                        <Route path='/games' component={GamesPage} />
                        <Route component={NotFound} />
                    </Switch>
                </HashRouter>
    }
}

export default App;