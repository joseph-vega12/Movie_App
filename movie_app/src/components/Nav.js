import React from 'react';

//React Router
import { Switch, Link, Route } from 'react-router-dom';

//Components
import Home from './Home';
import Movies from './Movies';
import TvShows from './TvShows';
import Trending from './Trending';

//Styled Component Import
import styled from 'styled-components';

const NavBar = styled.nav`
    background-color: #10171B;  
    height: 8vh;
    font-size: 1.5rem;
`
const UL = styled.ul `
    display: flex;
    justify-content: space-around;
    padding: 1.5% 0;
    width: 50%;
`

function Nav() {
    return (
        <header>
            <NavBar>
                <UL>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/movies'>Movies</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/tvshows'>Tv Shows</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/trending'>Trending</Link>
                </UL>
            </NavBar>
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