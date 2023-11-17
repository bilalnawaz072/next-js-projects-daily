'use client';
import React, { useEffect, useState } from "react";
import Row from "./Row";

const API_KEY = "5faed108d1688f2774a5bc00075eeb6e";
const BASE_URL = "https://api.themoviedb.org/3";

const FetchData = () => {
    const [netflixOriginals, setNetflixOriginals] = useState([])
    const [trending, setTrending] = useState([])
    const [topRated, setTopRated] = useState([])
    const [actionMovies, setActionMovies] = useState([])
    const [comedyMovies, setComedyMovies] = useState([])
    const [horrorMovies, setHorrorMovies] = useState([])
    const [romanceMovies, setRomanceMovies] = useState([])
    const [documentaries, setDocumentaries] = useState([])

  useEffect(() => {
    async function fetchData() {
        const netflixOriginalsResponse = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`)
        const netflixOriginalsData = await netflixOriginalsResponse.json()
        setNetflixOriginals(netflixOriginalsData.results)

        const trendingResponse = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
        const trendingData = await trendingResponse.json()
      setTrending(trendingData.results)
      
      const topRatedResponse = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`)
      const topRatedData = await topRatedResponse.json()
      setTopRated(topRatedData.results)

      const actionMoviesResponse = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`)
      const actionMoviesData = await actionMoviesResponse.json()
      setActionMovies(actionMoviesData.results)

      const comedyMoviesResponse = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`)
      const comedyMoviesData = await comedyMoviesResponse.json()
        setComedyMovies(comedyMoviesData.results)
        
        const horrorMoviesResponse = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`)
        const horrorMoviesData = await horrorMoviesResponse.json()
        setHorrorMovies(horrorMoviesData.results)

        const romanceMoviesResponse = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`)
        const romanceMoviesData = await romanceMoviesResponse.json()
        setRomanceMovies(romanceMoviesData.results)

        const documentariesResponse = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`)
        const documentariesData = await documentariesResponse.json()
        setDocumentaries(documentariesData.results)


    }
    fetchData()
}, []);


  return (
      <>
      <Row title="NETFLIX ORIGINALS" movies={netflixOriginals} />
        <Row title="Trending Now" movies={trending} />
        <Row title="Top Rated" movies={topRated} />
        <Row title="Action Movies" movies={actionMovies} />
          <Row title="Comedy Movies" movies={comedyMovies} />
          <Row title="Horror Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
      </>
  );
};

export default FetchData;
