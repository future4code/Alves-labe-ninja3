import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

//Estilização

const Detalhes = styled.div`
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
const Titulo = styled.h2`
  margin-bottom: 10px;
`
const Itens = styled.p`
  margin-bottom: 10px;
`

export default class VerDetalhes extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
    payment: [],
    date: ''
  }
  componentDidMount() {
    this.cardDetalhes()
  }
  cardDetalhes = () => {
    const id = this.props.id
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    axios
      .get(url, {
        headers: { Authorization: '79840a71-ac32-416b-b3e2-220060bc0a97' }
      })
      .then(res =>
        this.setState({
          title: res.data.title,
          description: res.data.description,
          price: res.data.price,
          payment: res.data.paymentMethods,
          date: res.data.dueDate
        })
      )
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <Detalhes>
        <Titulo>{this.state.title}</Titulo>
        <Itens>{this.state.description}</Itens>
        <Itens>R${this.state.price},00</Itens>
        <Itens>
          {this.state.payment.map(item => {
            return <li key={item}>{item}</li>
          })}
        </Itens>
        <Itens>{this.state.date.split('T')[0]}</Itens>
      </Detalhes>
    )
  }
}

