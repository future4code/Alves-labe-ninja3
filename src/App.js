import React from "react";
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
export default class  App extends React.Component {

  render() {

    return (

      <Body>

        <Headerzin>
          <Titulo>LabeNinjas</Titulo>
          <CardButton>
          <button>Home</button>
          <button>Carrinho</button>
          </CardButton>
        </Headerzin>

      </Body>

    );

  }
  
}


