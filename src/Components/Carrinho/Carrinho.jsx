import axios from 'axios'
import React from 'react'
import { styleCarrinho } from './styled'



export class Carrinho extends React.Component {

  state = {
    carrinho: "",
    valorTotal: " "
  }

  componentDidMount() {
    this.todosOsJobs()
  }

  componentDidUpdate(prevState) {
    if (prevState.carrinho !== this.state.carrinho) {
      this.todosOsJobs()
    }
  }

  todosOsJobs = () => {
    let url = "https://labeninjas.herokuapp.com/jobs"
    axios.get(url, {
      headers: {
        Authorization: "79840a71-ac32-416b-b3e2-220060bc0a97"
      }
    }).then((resposta) => {
      this.setState({
        carrinho: resposta.data.jobs.filter((job) => {
          if (job.taken == true) { return job }
        })
      })
    })
      .catch((erro) => { console.log(erro.response.data) })
  }

  exluirItemCarrinho = (user) => {
    let body = { "taken": false }
    let id = user
    let url = `https://labeninjas.herokuapp.com/jobs/${id}`
    axios.post(url, body, {
      headers: {
        Authorization: "79840a71-ac32-416b-b3e2-220060bc0a97"
      }
    }).then((resposta) => { this.todosOsJobs() })
      .catch((erro) => { alert(erro.response.data) })
  }

  finalizarCompra = ()=>{
    this.setState({carrinho:"", valorTotal:""})
  alert("Obrigado pela confiança, volte sempre!")
  }

  render() {
    let listaCarrinho = this.state.carrinho && this.state.carrinho.map((job) => {
      return (
          <styleCarrinho key={job.id}>
            <p>{job.title}</p>
            <p>R${job.price},00</p>
            <button onClick={() => this.exluirItemCarrinho(job.id)}>Deletar</button>
          </styleCarrinho>
      )
    })

    return (
      <div>
        {listaCarrinho || <h2>Carrinho vazio</h2>}
        {this.state.valorTotal &&
          <div>
             {/* <p>Valor total: R$ {this.state.valorTotal}</p> */}
            <button onClick={this.finalizarCompra}>Finalizar compra</button>
            <button onClick={this.props.irParaHome}>Continuar comprando</button>
          </div>}
      </div>
    )
  }
}
