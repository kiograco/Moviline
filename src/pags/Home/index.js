import React, { useEffect, useState } from "react";
import api from "../../services/Api";

import { DivFilmePrincial,H3TituloPrincipal,PdescricaoPrincipal,DivConteiner,DivcarrocelFilme,DivCarrocelThema,ImgBoxfilme,Body } from "../Filmes/style";

import { seriePrincipal, getRandomIntInclusive, shuffleArray } from "../../components/Funcoes";

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


let movie = shuffleArray(filmeSerie);


let descricaoPrincipal = filmeSerie;


  return (
    <Body>
    <main>
        <DivFilmePrincial style={{width:"100%" ,backgroundImage:`url("https://www.themoviedb.org/t/p/original/${descricaoPrincipal[seriePrincipal]?.backdrop_path}")`,}}>
            <DivConteiner>
                <H3TituloPrincipal>{descricaoPrincipal[seriePrincipal]?.title?descricaoPrincipal[seriePrincipal]?.title:descricaoPrincipal[seriePrincipal]?.name}</H3TituloPrincipal>
                <PdescricaoPrincipal>{descricaoPrincipal[seriePrincipal]?.overview}</PdescricaoPrincipal>
  
            </DivConteiner>
        </DivFilmePrincial>
    </main>
    <DivcarrocelFilme>
        <DivCarrocelThema>
                <div>
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${movie[getRandomIntInclusive(1,4)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div>
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${movie[getRandomIntInclusive(5,8)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div>
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${movie[getRandomIntInclusive(9,12)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div>
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${movie[getRandomIntInclusive(13,15)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div>
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${filmeSerie[getRandomIntInclusive(16,18)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div>
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${filmeSerie[getRandomIntInclusive(19,20)]?.poster_path}`} alt="" srcset=""/>
                </div>
      
        </DivCarrocelThema>
        
     </DivcarrocelFilme>
  
    </Body>
  )
}