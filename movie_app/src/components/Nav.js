import React from 'react';

//React Router
import { Switch, Link, Route } from 'react-router-dom';

//Components
import Home from './Home';
import Movies from './Movies';
import TvShows from './TvShows';
import Trending from './Trending';

//Styled Component Import

function Nav() {
    return (
        <header>
            <nav>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Home</Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/movies'>Movies</Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/tvshows'>Tv Shows</Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/trending'>Trending</Link>
            </nav>
            <Switch>
                <Route path='/trending' component={Trending} />
                <Route path='/tvshows' component={TvShows} />
                <Route path='/movies' component={Movies} />
                <Route path='/' component={Home} />
            </Switch>
        </header>
    );
}

export default Nav;