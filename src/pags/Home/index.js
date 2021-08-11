import React, { useEffect, useState } from "react";
import api from "../../services/Api";

export default function Home() {
  const [list, setList] = useState([]);
  const [listSerie,setListSerie] = useState([]);

  useEffect(() => {
    const fetch = async() => { 
      await api.get('/3/movie/popular',{
        qs: { api_key: 'ed71ed86a3eba6334b30f67ce71cb160', page: '1' },
    headers: 
    { authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDcxZWQ4NmEzZWJhNjMzNGIzMGY2N2NlNzFjYjE2MCIsInN1YiI6IjYxMTI3ZTExMjU1ZGJhMDA1ZGVkN2EzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-7B9brckFWVLBeQU3iMFuXZ_Hl23zZaQZ36J1U7tJU',
      'content-type': 'application/json;charset=utf-8' }
        }
        )
        .then((response) => setList(response.data.results))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
      }
  fetch();
  }, []);

  useEffect(() => {
    const fetch = async() => {
      await api.get('/3/tv/popular',{
        qs: { api_key: 'ed71ed86a3eba6334b30f67ce71cb160', page: '1' },
    headers: 
    { authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDcxZWQ4NmEzZWJhNjMzNGIzMGY2N2NlNzFjYjE2MCIsInN1YiI6IjYxMTI3ZTExMjU1ZGJhMDA1ZGVkN2EzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-7B9brckFWVLBeQU3iMFuXZ_Hl23zZaQZ36J1U7tJU',
      'content-type': 'application/json;charset=utf-8' }
        }
        )
        .then((response) => setListSerie(response.data.results))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
      }
  fetch();
  }, []);

 
let filmeSerie = listSerie.concat(list);


function shuffleArray(arr) {
  
for (let i = arr.length - 1; i > 0; i--) {  
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

return arr;
 }
 let movie = shuffleArray(filmeSerie);

console.log(movie)
console.log(filmeSerie)



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  let seriePrincipal = getRandomIntInclusive(1,20);
  let descricaoPrincipal = filmeSerie;


  return (
    <body>
    <main>
        <div class="filme-principal" style={{width:"100%" ,backgroundImage:`url("https://www.themoviedb.org/t/p/original/${descricaoPrincipal[seriePrincipal]?.backdrop_path}")`,}}>
            <div class="container"  >
                <h3 class="titulo">{descricaoPrincipal[seriePrincipal]?.title?descricaoPrincipal[seriePrincipal]?.title:descricaoPrincipal[seriePrincipal]?.name}</h3>
                <p class="descricao">{descricaoPrincipal[seriePrincipal]?.overview}</p>
  
            </div>
        </div>
    </main>
    <div class="carrosel-filmes">
        <div class="owl-carousel owl-theme"style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div class="item">
                    <img class="box-filme" src={`https://www.themoviedb.org/t/p/original/${movie[getRandomIntInclusive(1,4)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div class="item">
                    <img class="box-filme" src={`https://www.themoviedb.org/t/p/original/${movie[getRandomIntInclusive(5,8)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div class="item">
                    <img class="box-filme" src={`https://www.themoviedb.org/t/p/original/${movie[getRandomIntInclusive(9,12)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div class="item">
                    <img class="box-filme" src={`https://www.themoviedb.org/t/p/original/${movie[getRandomIntInclusive(13,15)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div class="item">
                    <img class="box-filme" src={`https://www.themoviedb.org/t/p/original/${filmeSerie[getRandomIntInclusive(16,18)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div class="item">
                    <img class="box-filme" src={`https://www.themoviedb.org/t/p/original/${filmeSerie[getRandomIntInclusive(19,20)]?.poster_path}`} alt="" srcset=""/>
                </div>
      
        </div>
        
     </div>
  
    </body>
  )
}