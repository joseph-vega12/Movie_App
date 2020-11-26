import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function MovieList() {

    //styled components variables
    const Hello = styled.h1`
        text-align: center;
        border: 1px solid black;
        height: 70vh; 
        width: 100%;
    `

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* margin-top: 10%; */
    `

    const Movie = styled.div`
        padding: 1% 1%;
    `

    // const Img = styled.img `
    // image-rendering: -webkit-optimize-contrast;
    // `

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
            {/* Renders the Hero Image */}
            {movies.slice(0, 1).map((item) => {
                return (
                    <div key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} />
                    </div>
                )
            })}
            {/* Render the Movies  */}
            {movies.map(movies => (
                <Movie key={movies.id}>
                    <img src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`} />
                </Movie>
            ))}
        </Container>
    );
}

export default MovieList;