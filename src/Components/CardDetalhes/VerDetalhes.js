import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

//Estilização

const Detalhes = styled.div`
  text-align: center;
  justify-content: center;
`

export default class VerDetalhes extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
    payment: [],
    date: '',
    taken: false
  }

  cardDetalhes = () => {
    const id = this.props.id
    const url = `https://labeninjas.herokuapp.com/jobs/:${id}`
    axios
      .get(url, {
        headers: {
          Authorization: '79840a71-ac32-416b-b3e2-220060bc0a97'
        }
      })
      .then(resposta => {
        this.setState({
          title: res.data.title,
          description: res.data.description,
          price: res.data.price,
          payment: res.data.paymentMethods,
          date: res.data.dueDate,
          taken: res.data.taken
        })
      })
      .catch(erro => {
        console.log(erro.response)
      })
  }
  componentDidMount() {
    this.cardDetalhes()
  }
  // separaCard (this.setState({
  //   title: res.data.title,
  //   description: res.data.description,
  //   price: res.data.price,
  //   payment: res.data.paymentMethods,
  //   date: res.data.dueDate,
  //   taken: res.data.taken
  // }))

  render() {
    return <div>{this.cardDetalhes}</div>
  }
}
