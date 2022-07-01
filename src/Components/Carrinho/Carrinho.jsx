import React from 'react'

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
        <div>
         {carro} || <h2>Carrinho vazio</h2>
         <p>Valor total: {valorTotal} </p>
          <button onClick={this.props.finalizarCompra}>Finalizar compra</button>
          <button onClick={this.props.telaVerPlayList}>Continuar comprando</button>
        </div>
      )
    }
  }
