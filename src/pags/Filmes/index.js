import React, { useEffect, useState } from "react";
import api from "../../services/Api";


import { DivFilmePrincial,H3TituloPrincipal,PdescricaoPrincipal,DivConteiner,DivcarrocelFilme,DivCarrocelThema,ImgBoxfilme,Body } from "./style";

import { seriePrincipal, getRandomIntInclusive } from "../../components/Funcoes";



export default function Home() {
  const [list, setList] = useState([]);

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


 




  return (
    <Body>
      <main>
        <DivFilmePrincial style={{backgroundImage: `url("https://www.themoviedb.org/t/p/original/${list[seriePrincipal]?.backdrop_path}")`}}>
            <DivConteiner>
                <H3TituloPrincipal>{list[seriePrincipal]?.title}</H3TituloPrincipal>
                <PdescricaoPrincipal>{list[seriePrincipal]?.overview}</PdescricaoPrincipal>
  
            </DivConteiner>
        </DivFilmePrincial>
      </main>
      <DivcarrocelFilme>
        <DivCarrocelThema>
                <div>
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(1,4)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div>
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(5,9)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div >
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(10,12)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div>
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(13,15)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div>
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(16,17)]?.poster_path}`} alt="" srcset=""/>
                </div>
                <div>
                    <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(18,20)]?.poster_path}`} alt="" srcset=""/>
                </div>
                
                
        </DivCarrocelThema>
      </DivcarrocelFilme>
 
    </Body>
  )
}