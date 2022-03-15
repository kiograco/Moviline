import React, { useEffect, useState } from "react";
import { getRandomIntInclusive } from "../../components/function";
import { Body, DivcarrocelFilme, ImgBoxfilme, responsive } from "./style";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import api from "../../services/Api";

export default function Movies() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await api.get('/3/movie/popular', {
        qs: { api_key: 'ed71ed86a3eba6334b30f67ce71cb160', page: '1' },
        headers:
        {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDcxZWQ4NmEzZWJhNjMzNGIzMGY2N2NlNzFjYjE2MCIsInN1YiI6IjYxMTI3ZTExMjU1ZGJhMDA1ZGVkN2EzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-7B9brckFWVLBeQU3iMFuXZ_Hl23zZaQZ36J1U7tJU',
          'content-type': 'application/json;charset=utf-8'
        }
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
    <Body >
      <DivcarrocelFilme>
        <Carousel className="Carousels" responsive={responsive}>
          
          <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(1, 2)]?.poster_path}`} alt="" srcset="" />
          <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(3, 4)]?.poster_path}`} alt="" srcset="" />
          <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(5, 6)]?.poster_path}`} alt="" srcset="" />
          <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(7, 8)]?.poster_path}`} alt="" srcset="" />
          <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(9, 10)]?.poster_path}`} alt="" srcset="" />
          <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(11, 12)]?.poster_path}`} alt="" srcset="" />
          <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(13, 14)]?.poster_path}`} alt="" srcset="" />
          <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(15, 16)]?.poster_path}`} alt="" srcset="" />
          <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(17, 18)]?.poster_path}`} alt="" srcset="" />
          <ImgBoxfilme src={`https://www.themoviedb.org/t/p/original/${list[getRandomIntInclusive(19, 20)]?.poster_path}`} alt="" srcset="" />     
        </Carousel>
      </DivcarrocelFilme>

    </Body>
  )
}