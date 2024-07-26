// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const MoviesSection = () => {
    const [ movies, setMovies] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGJmYjYwOGY2Y2Y4NGVmOGUwYTIwZjJjMGEwZmNiMSIsIm5iZiI6MTcyMTg0NDUyOC40MjEyNCwic3ViIjoiNjZhMTBlYTE1MzAxZDE3ZjhkZGQ3YjI0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ewqlzeHd8hCD_aFE4CeessJnnokDfjR7LoqqVQ9P110'
        }
      };
    const getMovie =  () =>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=10bfb608f6cf84ef8e0a20f2c0a0fcb1', options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.log(err.message));
    }

    

    useEffect(() =>{
        getMovie();
    },[])
  return (
    <div className='flex justify-center flex-wrap gap-[50px] px-[20px]'>
        {movies.map((movie) =>(
            <MovieCard key={movie.id} title={movie.original_title} overview={movie.overview} imgUrl={movie.backdrop_path} />
        ))}
    </div>
  )
}

export default MoviesSection
