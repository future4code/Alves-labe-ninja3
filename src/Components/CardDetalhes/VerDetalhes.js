import React from 'react'
import styled from 'styled-components'

//Estilização

const Detalhes = styled.div`
  text-align: center;
  justify-content: center;
`

export default class VerDetalhes extends React.Component {
  state = {
    tela: 'detalhe'
  }
  mudaTela = () => {
    if (this.state.tela === 'detalhe') {
      this.setState({ tela: 'lista' })
    } else {
      this.setState({ tela: 'detalhe' })
    }
  }

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
          <button onClick={this.mudaTela}>Voltar para a lista</button>
        </Detalhes>
      </div>
    )
  }
}
