import React from "react";
import axios from "axios";
import { Filters } from "./Filters";

export class FiltersComponets extends React.Component{
state={
    valorMinimo:"",
    valorMaximo:"",
    buscaNome: "",
    ordenacao: "dueDate",
    arrayProdutos:[{
        title:"Cortar a grama",
        description:"Manutenção em áreas verdes de até 1000 metros quadrados.",
        price:40,
        paymentMethods:["PayPal", "boleto"],
        dueDate:2021-12-30
    },
    {
        title:"Podar a grama",
        description:"Manutenção em áreas verdes de até 1000 metros quadrados.",
        price:7,
        paymentMethods:["PayPal", "boleto"],
        dueDate:2021-12-19
    }],
}

pegaValorMinimo = (e) => {
    this.setState({ 
        valorMinimo:e.target.value
})
}

pegaValorMaximo = (e) => {
    this.setState({ 
        valorMaximo:e.target.value
})
}

pegaNome = (e) => {
    this.setState({ 
        buscaNome:e.target.value
})
}

mudaData=()=>{
    this.setState({

    })
}

filtraTrabalho=()=>{
    const arrayDeProdutosMinimo = this.state.arrayProdutos.filter((produto)=>{
        if(this.state.valorMinimo){
            return produto.price >= this.state.valorMinimo
        }else{return produto}
    })
    
    const arrayDeProdutosMaximo = arrayDeProdutosMinimo.filter((produto)=>{
        if(this.state.valorMaximo){
            return produto.price <= this.state.valorMaximo
        }else{return produto}
    })
    
    const arrayDeProdutosNome = arrayDeProdutosMaximo.filter((produto)=>{
            return produto.title.toLowerCase().includes(this.state.buscaNome.toLowerCase()) 
        
    })
    // const mudaData=arrayDeProdutosNome.map((produto)=>{
    //     return produto.dueDate.getTime()
    // })
    const arrayDeProdutosOrdenados= arrayDeProdutosNome.sort((a,b)=>{
        if(this.state.ordenacao==="title"){
        return a.title -b.title
    }else if (this.state.ordenacao==="price"){
        return a.price - b.price
    } else if(this.state.ordenacao==="dueDate"){
        return a.dueDate-b.dueDate
    }
    })
    console.log(arrayDeProdutosOrdenados)
    return arrayDeProdutosOrdenados
}



render(){
const trabalhosFiltados=this.filtraTrabalho()



return<div>
    <Filters 
    valorMinimo={this.state.valorMinimo}
    valorMaximo = {this.state.valorMaximo}
    buscaNome={this.state.buscaNome}
    pegaValorMinimo={this.pegaValorMinimo}
    pegaValorMaximo={this.pegaValorMaximo}
    pegaNome={this.pegaNome}
    />
</div>

}
}