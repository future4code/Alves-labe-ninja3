import React from "react";
import TelaExibir from "./Components/Tela";
import styled from "styled-components";
import CadastroLaks from "./Components/Cadastro/CadastroLaks";
import HomeLaks from "./Components/Home/HomeLaks";
import { FiltersComponets } from "./Components/Filtro/FiltersComponets";



//Estilização 
const Div = styled.div `
  margin: 0px;
`

const Headerzin = styled.header `
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Titulo = styled.h1 `
  margin-left: 10px;
`

const CardButton = styled.div `
  background-color: grey;
  gap: 20px;
  
`

export default class App extends React.Component {

  state = {
    
    telaAtual: "home"

  }

  trocarTela = () => {
    
    switch (this.state.telaAtual){
      case "home":
        return <HomeLaks irParaCadastroLaks={this.irParaCadastroLaks}/>
      case "cadastro":
        return <CadastroLaks irParaHome={this.irParaHome}/>
      
        // mais 2 case com a pagina de contratação e botao carrinho aqui antes do default

      default:
        return <div>Ops! Página não encontrada.</div>
    }

  }


  // fazer mais 2 funções para os botoes de carrinho e contratação

  irParaHome = () => {
    this.setState({telaAtual: "home"})
  }

  irParaCadastroLaks = () => {
    this.setState({telaAtual: "cadastro"})
  }

  render() {

    return (
    
      <Div>

        <FiltersComponets/>
        
        

        <Headerzin>
          <Titulo>LabeNinjas</Titulo>
          <CardButton>
            <button onClick={this.irParaHome}>Home</button>
            <button>Carrinho</button>
          </CardButton>
        </Headerzin>
<TelaExibir/>
        {this.trocarTela()}

      </Div>
      
    );

  }
  

}


