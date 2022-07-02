import React from 'react'
import TelaExibir from './Components/Tela'
import styled from 'styled-components'
import CadastroLaks from './Components/Cadastro/CadastroLaks'
import HomeLaks from './Components/Home/HomeLaks'
import { Carrinho } from './Components/Carrinho/Carrinho'
import VerDetalhes from './Components/CardDetalhes/VerDetalhes'
//Estilização
const Div = styled.div`
  margin: 0px;
`
const Headerzin = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
        return <HomeLaks irParaCadastroLaks={this.irParaCadastroLaks}  irParaCards={this. irParaCards} />
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
      case "contratar" :
          return <TelaExibir/>
      case 'detalhes':
        return (
          <VerDetalhes
            id={this.state.botaoDetalhes}
            irParaPaginaTela={this.irParaPaginaTela}
          />
        )
      // mais 1 case com a pagina de contratação aqui antes do default
      // Adicionar como props this.irParaPaginaDetalhes no case da Melissa

      default:
        return <div>Ops! Página não encontrada.</div>
    }
    console.log(this.state.telaAtual)
  }

  irParaPaginaDetalhes = id => {
    this.setState({ telaAtual: 'detalhes', botaoDetalhes: id })
  }

  //Dentro da tela atual abaixo vai o nome da tela da melissa
  irParaPaginaTela = () => {
    this.setState({ telaAtual: '', botaoDetalhes: '' })

        case 'carrinho': 
        return <Carrinho calculaValorTotal={this.calculaValorTotal} finalizarCompra={this.finalizarCompra}  excluirItemCarrinho ={this.excluirItemCarrinho}/>
        case "contratar" :
          return <TelaExibir/>
      // mais 1 case com a pagina de contratação aqui antes do default
      default:
        return <div>Ops! Página não encontrada.</div>
      }
      
    

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

  irParaCards=()=>{
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
      </Div>
    )
  }
}
