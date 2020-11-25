import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import TvShows from './TvShows';
import Trending from './Trending';

function Nav() {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/tvshows'>Tv Shows</Link>
                <Link to='/trending'>Trending</Link>
            </nav>
            <Switch>
                <Route path='/trending'>
                    <Trending />
                </Route>
                <Route path='/tvshows'>
                    <TvShows />
                </Route>
                <Route path='/movies'>
                    <Movies />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </header>
    );
}

export default Nav;