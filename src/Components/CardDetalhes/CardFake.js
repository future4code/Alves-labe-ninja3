import React from 'react'

export default class CardFake extends React.Component {
  render() {
    return (
      <div>
        <h3>Este é um card</h3>
        <p>
          <strong>Preço:</strong>R$500,00
        </p>
        <p>
          <strong>Prazo:</strong>12/2022
        </p>
        <button>Ver Detalhes</button>
        <button>Adicionar ao Carrinho</button>
      </div>
    )
  }
}
