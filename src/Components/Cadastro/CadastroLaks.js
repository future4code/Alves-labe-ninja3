import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

//Estilização
const CardCadastro = styled.div`
  justify-content: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10%;
`

export default class CadastroLaks extends React.Component {

  state = {
    titulo: " ",
    descrição: " ",
    preço: " ",
    metódoDePagamento: [
      "Dinheiro",
      "cartãoCrédito",
      "cartãoDébito",
      "pix"

    ]
  }

  handleTitulo = (event) => {
    this.setState({titulo: event.target.value})
  }

  handleDescrição = (event) => {
    this.setState({descrição: event.target.value})
  }

  handlePreço = (event) => {
    this.setState({preço: event.target.value})
  }

  handleMetodo = (event) => {
    this.setState({metódoDePagamento: event.target.value})
  }

  cadastrarNinja = (event) => {

    const url2 = "https://labeninjas.herokuapp.com/jobs"
    const body = {
      titulo: this.state.titulo,
      descrição: this.state.descrição,
      preço: this.state.preço,
      metódoDePagamento: this.state.metódoDePagamento
    }

    axios.post(url2, body, {
      headers: {
        "Authorization": "79840a71-ac32-416b-b3e2-220060bc0a97"
      }
    }).then((resposta) => {
      alert("Parabéns! Agora você é um ninja!")
      this.setState({
        titulo: " ", descrição: " ", preço: " ", metódoDePagamento: []
      })

    }).catch((erro) => {
      alert("Ops! Algo deu errado!")
      alert(erro.response.data.message)
    })

  }

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

        <input placeholder="00/00/0000" type="data"/>

        <button onClick={this.cadastrarNinja}>Cadastrar Serviço</button>

      </CardCadastro>
    )
  }
}

