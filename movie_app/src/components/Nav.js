import React from 'react';
import { Switch, Link } from 'react-router-dom';

function Nav() {
    return (
        <header>
            <nav>
                <Link>Home</Link>
                <Link>Movies</Link>
                <Link>Tv Shows</Link>
                <Link>Trending</Link>
            </nav>
        </header>
    );
}

export default Nav;