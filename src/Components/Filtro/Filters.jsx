import React from "react";

export class Filters extends React.Component {

    render() {
        return <div>
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
                    onChange={this.props.pegaValorMaximo} />
            </label>
            <label>
                <input
                    type="text"
                    placeholder="nome ou descrição"
                    value={this.props.buscaNome}
                    onChange={this.props.pegaNome} />
            </label>
            <select onChange={this.props.pegaOrdem}>
                <option value={"priceCR"}>Preço Crescente</option>
                <option value={"priceDR"}>Preço Decrescente</option>
                <option valeu={"title"}>Nome</option>
                <option value={"dueDate"}>Prazo</option>
            </select>
        </div>

    }
}