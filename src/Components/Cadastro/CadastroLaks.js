import React from "react";

export default class CadastroLaks extends React.Component {

    render () {

        return (
            
            <div>
                <h2>Cadastre o seu serviço</h2>
                <input>Titulo</input>
                <input>Descrição</input>
                <input>Preço</input>
                <input>Método de Pagamento</input>
                <input>Calendario</input>
                <button>Cadastrar Serviço</button>
            </div>
        )
    }
}