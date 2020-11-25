import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function MovieList() {

    //styled components variables
    
    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 2%;
    `

    const Movie = styled.div `
        padding: 1% 1%;
    `
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, [])

    function getMovies() {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ce7adc427527f6032df29cfb6ce6d66c&&language=en-US&page=1')
            .then(res => {
                console.log(res.data.results);
                setMovies(res.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <Container>
                {movies.map(movies => (
                    <Movie key={movies.id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`} />
                    </Movie>
                ))}
        </Container>
    );
}

export default MovieList;