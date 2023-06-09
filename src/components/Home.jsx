import { useEffect, useState } from "react";
import Movieslist from "./Movieslist.jsx";

const Home = () => {

    let [movies , setMovies] = useState(null);
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true);
    

    useEffect(()=>{

        if( localStorage.getItem("fav")==null )
        {
            localStorage.setItem("fav" , "[]")
        }

        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{ return res.json() })
            .then((data)=>{ 
                console.log(data);
                setMovies(data);
                setPending(false);
                })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            })
        } , 3000)
    } , [])


    return ( 
        <div className="home">   

        {pending==true  && <div className="loading"></div> }

        {error && <h1> {error} </h1>}

        {movies && <Movieslist movies={movies} title="All movies"/>}

        {movies && <Movieslist movies={movies} title="Action movies"/>}

        {movies && <Movieslist movies={movies} title="Top movies"/>}

        {movies && <Movieslist movies={movies} title="Drama movies"/>}

            {/* <h1>hello</h1> */}

        </div>
     );
}
export default Home;



// ================================================
// import { useEffect, useState } from "react";
// import MoviesList from "./MoviesList";

// const Home = () => {

//     let[movies, setmovies] = useState(null);
//     let[error, setError] = useState(null);
//     let[pending, setPending] = useState(true);


//     useEffect(()=>{

//         if(localStorage.getItem("fav")==null)
//         {
//             localStorage.setItem("fav","[]")
//         }
//         setTimeout(()=>{
//             fetch("http://localhost:4000/movies")
//             .then((res)=>{return res.json()})
//             .then((data)=>{
//                 console.log(data);
//                 setmovies(data);
//                 setPending(false);
//                })
//                .catch((err)=>{
                 // setError(err.message);})
//                 setError("404 Network issue please try again later...");})
//                 setPending(false);
//         } , 3000)
//     } , [])

//     return ( 
//         <div className="home"> 
//         {pending==true && <h1>Loading.......</h1>} 

//         {error && <h1>{error}</h1>}
  
//        {movies && <MoviesList movies={movies} title="All movies"/>}

//        { movies && 
//         <MoviesList movies={movies.filter((m)=>{return m.hero.includes("Yash")})} title="search results for yash"/>}

//        { movies && 
//         <MoviesList movies={movies.filter((m)=>{return m.moviename.startsWith("K")})} title="Search results for k"/>}


//        { movies && 
//         <MoviesList movies={movies.filter((m)=>{return m.genre.includes("action")})} title="Action movies"/>}

// { movies && 
//         <MoviesList movies={movies.filter((m)=>{return m.genre.includes("Comedy")})} title="Comedy movies"/>}

// { movies && 
//         <MoviesList movies={movies.filter((m)=>{return m.rating>=8.5})} title="Top rated movies"/>}

//         </div>
//      );
// }
// export default Home;

