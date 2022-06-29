import React from "react";
import { Filters } from "./Filters";

export class FiltersComponets extends React.Component {
    state = {
        valorMinimo: "",
        valorMaximo: "",
        buscaNome: "",
        ordenacao: "priceDR",
        arrayProdutos: [{
            title: "Cortar a grama",
            description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
            price: 40,
            paymentMethods: ["PayPal", "boleto"],
            dueDate: "2021-12-30"
        },
        {
            title: "Podar a grama",
            description: "limpeza65.",
            price: 7,
            paymentMethods: ["PayPal", "boleto"],
            dueDate: "2021-09-30"
        }],
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
        const arrayDeProdutosMinimo = this.state.arrayProdutos.filter((produto) => {
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
        return arrayDeProdutosOrdenados
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
        </div>
        
    }
}