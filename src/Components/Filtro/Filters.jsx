import React from "react";
import axios from "axios";

export class Filters extends React.Component{
state={

}

render(){
return<div>
    <label>
        <input 
        type="number" 
        placeholder="valor minimo" 
        value={this.props.valorMinimo}
        onChange={this.props.pegaValorMinimo}
        />
    </label>
    <label>
        <input type="number" 
        placeholder="valor máximo" 
        value={this.props.valorMaximo}
        onChange={this.props.pegaValorMaximo}/>
    </label>
    <label>
        <input 
        type= "text"
        placeholder="busca por nome" 
        value={this.props.buscaNome}
        onChange={this.props.pegaNome}/>
    </label>
    <select>
        <option valeu={"title"}>Nome</option>
        <option value={"price"}>Preço</option>
        <option value={"dueDate"}>Data</option>
    </select>
</div>

}
}