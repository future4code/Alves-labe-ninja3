import React from "react";
import { FiltersComponets } from "./Components/Filtro/FiltersComponets";
import Styled from "styled-components";

const Body = Styled.div `
  margin: 0px;
`

const Headerzin = Styled.header `
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Titulo = Styled.h1 `
  margin-left: 10px;
`

const CardButton = Styled.div `
  background-color: grey;
  gap: 20px;
  
`
const CardInicial = Styled.div `
  border: 1px solid black;
  margin-top: 200px;
  margin-left: 500px;
  max-width: 30%;
  min-height: 200px;
  text-align: center;
  
`


export default class  App extends React.Component {

  render() {

    return (

      <Body>

        <Headerzin>
         <FiltersComponets/>
          <Titulo>LabeNinjas</Titulo>
          <CardButton>
          <button>Home</button>
          <button>Carrinho</button>
          </CardButton>
        </Headerzin>

        <CardInicial>

          <h2>Labeninjas</h2>
          <h3>O talento certo no momento certo</h3>
          <button>Quero ser um ninja</button>
          <button>Quero contratar um ninja</button>

        </CardInicial>

      </Body>

    );

  }
  
}


