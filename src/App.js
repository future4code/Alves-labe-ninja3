import React from 'react'
import TelaExibir from './Components/Tela'
import styled from 'styled-components'
import CadastroLaks from './Components/Cadastro/CadastroLaks'
import HomeLaks from './Components/Home/HomeLaks'
import { Carrinho } from './Components/Carrinho/Carrinho'

//Estilização
const Div = styled.div`
  margin: 0px;
`

const Headerzin = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
 border-bottom:dotted;
`
const Titulo = styled.h1`
  margin-left: 10px;

`
const CardButton = styled.div`
  gap: 20px;
  margin-right:50px;
`
export default class App extends React.Component {
  state = {
    telaAtual: 'home',
    carrinho: [],
    valorTotalCarrinho:'',

  }

  trocarTela = () => {
    switch (this.state.telaAtual) {
      case 'home':
        return <HomeLaks irParaCadastroLaks={this.irParaCadastroLaks} />
      case 'cadastro':
        return <CadastroLaks irParaHome={this.irParaHome} />
        case 'carrinho': 
        return <Carrinho calculaValorTotal={this.calculaValorTotal} finalizarCompra={this.finalizarCompra}  excluirItemCarrinho ={this.excluirItemCarrinho}/>

      // mais 1 case com a pagina de contratação aqui antes do default

      default:
        return <div>Ops! Página não encontrada.</div>
    }
    console.log(this.state.telaAtual)
    
  }

  irParaHome = () => {
    this.setState({ telaAtual: 'home' })
  }

  irParaCadastroLaks = () => {
    this.setState({ telaAtual: 'cadastro' })
  }

 //Funções do carrinho:

  irParaCarrinho = ()=>{
    this.setState({telaAtual: 'carrinho'})
  }

  calculaValorTotal = ()=>{
    this.setState({
      valorTotalCarrinho: this.state.valorTotalCarrinho + (104 + (10 + 103) + (102 + 11))
    })
  }

  finalizarCompra =()=>{
    this.setState({carrinho:"", valorTotalCarrinho:""})
  }

  excluirItemCarrinho = (produtoParaRemover)=>{
    const novoCarrinho = this.state.carrinho.filter(item=>{
      if(item.id !== produtoParaRemover.id){
        return item
      }
      // console.log("novo carrinho",novoCarrinho)
    })
    console.log("novo carrinho",novoCarrinho)
}

  render() {
    return (
      <Div>

        
        <Headerzin>
          <Titulo>LabeNinjas</Titulo>
          <CardButton>
            <button onClick={this.irParaHome}>Home</button>
            <button onClick={this.irParaCarrinho}>Carrinho</button>
          </CardButton>
        </Headerzin>
 
       <TelaExibir/>

        {this.trocarTela()}
        
      </Div>
    )
  }
}
