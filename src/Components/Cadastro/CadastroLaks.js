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
    title:"",
    description:"",
    price: Number(""),
    paymentMethods:[],
    dueDate:""
  }

  handleTitulo = (event) => {
    this.setState({title: event.target.value})
  }

  handleDescrição = (event) => {
    this.setState({description: event.target.value})
  }

  handlePreço = (event) => {
    this.setState({price: Number(event.target.value)})
  }

  handleMetodo = (event) => {
    this.setState({paymentMethods: [...this.state.paymentMethods,event.target.value]})
  }

  handleData = (event) => {
    this.setState({dueDate: event.target.value})
  }

  cadastrarNinja = () => {

    const url2 = "https://labeninjas.herokuapp.com/jobs"
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate
    }

    axios.post(url2, body, {
      headers: {
        "Authorization": "79840a71-ac32-416b-b3e2-220060bc0a97"
      }
    }).then((resposta) => {
      alert("Parabéns! Agora você é um ninja!")
      this.setState({
        titulo: "", descrição: "", preço: "", metódoDePagamento: [],dueDate:""
      })
      

    }).catch((erro) => {
      alert("Ops! Algo deu errado!")
      alert(erro.response.data.message)
      console.log(erro)
      console.log(body)
    })
    
  }

  render() {
console.log(this.state.dueDate)
    return (

      <CardCadastro>
        
        <h2>Cadastre o seu serviço</h2>

        <input placeholder="Título" type="text" onChange={this.handleTitulo} value={this.state.title}/>
        <input placeholder="Descrição do Serviço" type="text" onChange={this.handleDescrição} value={this.state.description}/>
        <input placeholder="Preço" type="number" onChange={this.handlePreço} value={(this.state.price)}/>

        <select name="metodo" onChange={this.handleMetodo} multiple >
          <option value="dinheiro">Dinheiro</option>
          <option value="cartaoDebito">Cartão de Débito</option>
          <option value="cartaoCredito">Cartão de Crédito</option>
          <option value="pix">Pix</option>
        </select>

        <input  type="date" onChange={this.handleData} id="data" value={this.state.dueDate}/>
        <button onClick={this.cadastrarNinja}>Cadastrar Serviço</button>

      </CardCadastro>
    )
  }
}

