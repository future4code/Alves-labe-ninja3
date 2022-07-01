import React from 'react'
import styled from 'styled-components'

//Estilização

const Headerzin = styled.header`
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`
const Detalhes = styled.div``

export default class VerDetalhes extends React.Component {
  render() {
    return (
      <div>
        <Headerzin>
          <button> Home </button>
          <button> Carrinho</button>
        </Headerzin>
        <Detalhes>
          <h2>Título:{this.props.tilulo}</h2>
          <p>Descrição:{this.props.descrição}</p>
          <p>Preço:{this.props.preco}</p>
          <p>Prazo:{this.props.prazo}</p>
          <p>Método de Pagamento:{this.props.pagamento}</p>
          <button>Voltar para a lista</button>
        </Detalhes>
      </div>
    )
  }
}
