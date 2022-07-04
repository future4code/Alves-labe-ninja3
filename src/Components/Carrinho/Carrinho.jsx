import React from 'react'
import Styled from 'styled-components'

const Carro = Styled.div`
  text-align: center;
  justify-content: center;
  border: 1px double #ff2e63;
  width: 20%;
  box-shadow: 10px 10px 10px 5px #696969;
  margin-left: 40%;
  margin-top: 10%;
  font-family: 'Zilla Slab', serif;
  padding: 32px;
`
export class Carrinho extends React.Component {

    componentDidMount(){
      this.props.calculaValorTotal()
      console.log(this.props.valorTotal)
    }
  
    render() {
      let valorTotal = this.props.valorTotalCarrinho
      let carro = this.props.itens && this.props.itens.map((produto) => {
        return (
         
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.preco}</p>
          <button onClick={() => this.props.excluirItemCarrinho(produto)}>Deletar</button>
           </div>
        )
      })
      
      return (
        <Carro>
         {carro} || <h2>Carrinho vazio</h2>
         <p>Valor total: {valorTotal} </p>
          <button onClick={this.props.finalizarCompra}>Finalizar compra</button>
          <button onClick={this.props.telaVerPlayList}>Continuar comprando</button>
        </Carro>
      )
    }
  }
