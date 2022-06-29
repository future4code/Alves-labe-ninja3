import React from "react";
import styled from "styled-components";

const Body = styled.div `
  margin: 0px;
`

const CardInicial = styled.div `
  border: 1px solid black;
  margin-top: 200px;
  margin-left: 500px;
  max-width: 30%;
  min-height: 200px;
  text-align: center;
  
`
const H2 = styled.h2 `
    margin-top: 20px;
`
const H3 = styled.h3 `
    margin-top: 10px;
`
const BotaoSerNinja = styled.button `
    margin-top: 20px;
`
const BotaoContratarNinja = styled.button `
    margin-top: 20px;
`

export default class HomeLaks extends React.Component {

    render () {

        return (

            <Body>

                <CardInicial>

                <H2>Labeninjas</H2>
                <H3>O talento certo no momento certo</H3>
                <BotaoSerNinja onClick={this.props.irParaCadastroLaks}>Quero ser um ninja</BotaoSerNinja>

                {/* esse tem que onclickear a pagina de contratação de serviço */}
                <BotaoContratarNinja>Quero contratar um ninja</BotaoContratarNinja>
  
                </CardInicial>

            </Body>
        )
    }
}