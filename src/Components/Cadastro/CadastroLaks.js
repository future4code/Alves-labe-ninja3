import React from 'react'
import styled from 'styled-components'

//Estilização
const CardCadastro = styled.div`
  justify-content: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10%;
`

export default class CadastroLaks extends React.Component {
  render() {
    return (
      <CardCadastro>
        <h2>Cadastre o seu serviço</h2>
        <input placeholder="Título" />
        <input placeholder="Descrição do Serviço" type="text" />
        <input placeholder="Preço">Preço</input>
        <select name="metodo">
          <option value="dinheiro">Dinheiro</option>
          <option value="cartaoDebito">Cartão de Débito</option>
          <option value="cartaoCredito">Cartão de Crédito</option>
          <option value="pix">Pix</option>
        </select>
        <input type="data" />

        {/* api post aqui nesse botao */}
        <button>Cadastrar Serviço</button>
      </CardCadastro>
    )
  }
}

