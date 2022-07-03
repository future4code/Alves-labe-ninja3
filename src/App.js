import React from 'react'
import TelaExibir from './Components/Tela'
import styled from 'styled-components'
import CadastroLaks from './Components/Cadastro/CadastroLaks'
import HomeLaks from './Components/Home/HomeLaks'
import { Carrinho } from './Components/Carrinho/Carrinho'
import VerDetalhes from './Components/CardDetalhes/VerDetalhes'
//Estilização
const Footer = styled.footer`
  bottom: 0;
  text-align: center;
  background-color: #08d9d6;
  display: grid;
  position: fixed;
  font-family: 'Roboto Slab', serif;
  width: 100%;
  grid-template-rows: 1fr 1fr;
  font-size: 15px;
  padding-top: 5px;
`
const Div = styled.div`
  margin: 0px;
`
const Headerzin = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  border-bottom: dotted;
`
const Titulo = styled.h1`
  margin-left: 10px;
`
const CardButton = styled.div`
  gap: 20px;
  margin-right: 50px;
`

export default class App extends React.Component {
  state = {
    telaAtual: 'home',
    carrinho: [],
    valorTotalCarrinho: '',
    botaoDetalhes: ''
  }

  trocarTela = () => {
    switch (this.state.telaAtual) {
      case 'home':
        return (
          <HomeLaks
            irParaCadastroLaks={this.irParaCadastroLaks}
            irParaCards={this.irParaCards}
          />
        )
      case 'cadastro':
        return <CadastroLaks irParaHome={this.irParaHome} />

      case 'carrinho':
        return (
          <Carrinho
            calculaValorTotal={this.calculaValorTotal}
            finalizarCompra={this.finalizarCompra}
            excluirItemCarrinho={this.excluirItemCarrinho}
          />
        )
      case 'contratar':
        return <TelaExibir irParaPaginaDetalhes={this.irParaPaginaDetalhes} />
      case 'detalhes':
        return (
          <VerDetalhes
            id={this.state.botaoDetalhes}
            irParaPaginaTela={this.irParaPaginaTela}
          />
        )

      default:
        return <div>Ops! Página não encontrada.</div>
    }
  }

  irParaPaginaDetalhes = id => {
    this.setState({ telaAtual: 'detalhes', botaoDetalhes: id })
    console.log(id)
  }

  //Dentro da tela atual abaixo vai o nome da tela da melissa
  irParaPaginaTela = () => {
    this.setState({ telaAtual: '', botaoDetalhes: '' })
  }

  irParaHome = () => {
    this.setState({ telaAtual: 'home' })
  }

  irParaCadastroLaks = () => {
    this.setState({ telaAtual: 'cadastro' })
  }

  //Funções do carrinho:

  irParaCarrinho = () => {
    this.setState({ telaAtual: 'carrinho' })
  }

  irParaCards = () => {
    this.setState({
      telaAtual: 'contratar'
    })
  }

  calculaValorTotal = () => {
    this.setState({
      valorTotalCarrinho:
        this.state.valorTotalCarrinho + (104 + (10 + 103) + (102 + 11))
    })
  }

  finalizarCompra = () => {
    this.setState({ carrinho: '', valorTotalCarrinho: '' })
  }

  excluirItemCarrinho = produtoParaRemover => {
    const novoCarrinho = this.state.carrinho.filter(item => {
      if (item.id !== produtoParaRemover.id) {
        return item
      }
      // console.log("novo carrinho",novoCarrinho)
    })
    console.log('novo carrinho', novoCarrinho)
  }

  render() {
    console.log(this.state.telaAtual)
    return (
      <Div>
        <Headerzin>
          <Titulo>LabeNinjas</Titulo>
          <CardButton>
            <button onClick={this.irParaHome}>Home</button>
            <button onClick={this.irParaCarrinho}>Carrinho</button>
          </CardButton>
        </Headerzin>
        {this.trocarTela()}
        <Footer>
          <h3>Labeninja.com</h3>
          <p>&copy;Labeninja Marketplace - Página criada para fim estudantil</p>
        </Footer>
      </Div>
    )
  }
}
