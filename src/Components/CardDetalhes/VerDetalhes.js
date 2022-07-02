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
    servico: {}
  }

  componentDidMount() {
    this.detalhesServico()
  }
  detalhesServico = () => {
    axios
      .get(this.props.url)
      .then(res => {
        this.setState({ servico: res.data })
      })
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <div>
        <Detalhes>
          <p>{this.props.jobs.title}</p>
        </Detalhes>
      </div>
    )
  }
}
