import styled from "styled-components";

export const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const DivFilmePrincial = styled.div`
    font-size:16px;
    background: linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%);

    height:400px;
    background-size:cover;
 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
export const H3TituloPrincipal = styled.h3`
    margin-top: 15%;
    margin-left: 10px;
    font-size: 40px;
    font-family: 'Trebuchet MS', Arial, sans-serif;
    text-align: initial;
` 
export const PdescricaoPrincipal = styled.p`
    margin-top: 10px;
    margin-bottom: 40px;
    margin-left: 10px;
    text-align: initial;
    color: #fff;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    font-size: 1.4vw;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
    margin-top: .1vw;

`
export const DivConteiner = styled.div`
    width: 70%;
`
export const DivcarrocelFilme = styled.div`
    margin-top:5px;
    .Carousels{
        display:flex;
        justify-content: space-between;
        flex-direction: row;
    }
`
export const ImgBoxfilme = styled.img`
    width: 88%;
    display: flex;
    cursor: pointer;
    flex-direction: row;
`
export const Body = styled.body`
   background: black;
   font-family: Arial, Times, serif;
   color:white;
`