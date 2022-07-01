import React from "react";
import { Filters } from "./Filters";
import styled from "styled-components";

const Card = styled.div`
border: 1px double #FF2E63;
display:flex;
flex-direction: column;
justify-content:center;
width:200px;
font-family: 'Zilla Slab', serif;
padding:10px;
box-shadow: 10px 10px 10px 5px #696969;
margin:50px;

`

const BottonCard = styled.button`
border: 3px solid #FF2E63;
margin:7px;
display:flex;
justify-content:center;
font-family: 'Zilla Slab', serif;
padding:2px;
background-color:#FF2E63;
color: #252A34;
font-weight: bold;
`


export class FiltersComponets extends React.Component {
    state = {
        valorMinimo: "",
        valorMaximo: "",
        buscaNome: "",
        ordenacao: "priceDR",
        arrayProdutos:[],
    }
    
    componentDidMount() {
        this.props.exibirTodos()
    }
    
    pegaValorMinimo = (e) => {
        this.setState({
            valorMinimo: e.target.value
        })
    }
    
    pegaValorMaximo = (e) => {
        this.setState({
            valorMaximo: e.target.value
        })
    }
    
    pegaNome = (e) => {
        this.setState({
            buscaNome: e.target.value
        })
    }
    
    pegaOrdem = (e) => {
        this.setState({
            ordenacao: e.target.value
        })
    }
    
    filtraTrabalho = () => {
    
    
        const arrayDeProdutosMinimo = this.props.Arraytrabalho.filter((produto) => {
            if (this.state.valorMinimo) {
                return produto.price >= this.state.valorMinimo
            } else { return produto }
        })
        
        const arrayDeProdutosMaximo = arrayDeProdutosMinimo.filter((produto) => {
            if (this.state.valorMaximo) {
                return produto.price <= this.state.valorMaximo
            } else { return produto }
        })
        
        const arrayDeProdutosNome = arrayDeProdutosMaximo.filter((produto) => {
            return produto.title.toLowerCase().includes(this.state.buscaNome.toLowerCase()) || produto.description.toLowerCase().includes(this.state.buscaNome.toLowerCase())
        })
        
        const arrayDeProdutosOrdenados = arrayDeProdutosNome.sort((a, b) => {
            if (this.state.ordenacao === "title") {
                return a.title < b.title ? -1 : a.title > b.title ? 1 : 0
            } else if (this.state.ordenacao === "priceCR") {
                return a.price - b.price
            } else if (this.state.ordenacao === "priceDR") {
                return b.price - a.price
            } else if (this.state.ordenacao === "dueDate") {
                return a.dueDate < b.dueDate ? -1 : a.dueDate > b.dueDate ? 1 : 0
            }
        })
        
        const trabalhosMap = arrayDeProdutosOrdenados.map((jobs) => {
            return <Card key={jobs.id}>
                <h2>{jobs.title}</h2><br />
                <p>&#5125; {jobs.description}</p><br />
                <p>R${jobs.price}</p><br />
                <p>&#5125;{jobs.paymentMethods.map((item) => {
                    return <div>{item}</div>
                })}</p><br />
                <p>&#5125;{jobs.dueDate.split('T')[0]}</p><br />
                <BottonCard >Ver Detalhes</BottonCard>
                <BottonCard >Adicionar ao Carrinho</BottonCard>
            </Card>
        });
        console.log(arrayDeProdutosNome)
        return trabalhosMap
    }
    
    render() {
        
        return <div>
            <Filters
                valorMinimo={this.state.valorMinimo}
                valorMaximo={this.state.valorMaximo}
                buscaNome={this.state.buscaNome}
                pegaValorMinimo={this.pegaValorMinimo}
                pegaValorMaximo={this.pegaValorMaximo}
                pegaNome={this.pegaNome}
                pegaOrdem={this.pegaOrdem}
            />
            {this.filtraTrabalho()}
            
        </div>
    }
}