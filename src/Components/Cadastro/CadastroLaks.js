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

        <input placeholder="Título" type="text"/>
        <input placeholder="Descrição do Serviço" type="text"/>
        <input placeholder="Preço" type="text"/>

        <select name="metodo">
          <option value="dinheiro">Dinheiro</option>
          <option value="cartaoDebito">Cartão de Débito</option>
          <option value="cartaoCredito">Cartão de Crédito</option>
          <option value="pix">Pix</option>
        </select>

        <input type="data"/>

        <button>Cadastrar Serviço</button>

      </CardCadastro>
    )
  }
}

