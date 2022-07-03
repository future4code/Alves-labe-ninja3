import React from "react";
import styled from "styled-components";


const Body = styled.div`
  margin: 0px;
`

const CardInicial = styled.div`
  border: 1px solid #08d9d6;
  margin-top: 100px;
  margin-bottom:200px;
  /* max-width: 30%; */
  /* min-height: 200px; */
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:30px;
`

const BoxCard = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-wrap:wrap;


`


const H2 = styled.h2`
    margin-top: 20px;
`
const H3 = styled.h3`
    margin-top: 10px;
`
const BotaoSerNinja = styled.button`
    margin-top: 20px;
    display:flex;
    justify-content: center;
    align-items:center;
    margin-left:0%;
`
const BotaoContratarNinja = styled.button`
    margin-top: 20px;
    display:flex;
    justify-content: center;
    align-items:center;
    margin-left:0;
`

const Texto = styled.p`
font-family: 'Arvo', serif;
text-align:justify;
margin-left:200px;
margin-right:150px;
margin-top:80px;
`
const Footer = styled.footer`
bottom:0 ;
text-align:center;
background-color:#08D9D6;
display: grid;
position:fixed;
font-family: 'Roboto Slab', serif;
width: 100%;
grid-template-rows: 1fr 1fr;
font-size:15px;
padding-top: 5px;

`

const Imagem = styled.img `
display:flex;
justify-content: center;
align-items:center;
flex-wrap:wrap;
margin-top:100px;
margin-bottom:50px;

`

export default class HomeLaks extends React.Component {

    render() {
        return (
            <Body>
                <img src="./Components/imagens/ninja.png"></img>
                <h1> Venda mais com a gente!</h1>
                <Texto> Labeninja Marketplace é um shopping virtual onde você pode aumentar as suas vendas. E por sermos uma das melhores empresas de tecnologia aplicada ao varejo do Brasil, reconhecida como uma plataforma digital com pontos físicos e calor humano, o nosso e-commerce está cada vez mais integrado às lojas cadastradas em todo país. O Marketplace é uma excelente oportunidade de negócio para lojistas de todos os tamanhos criarem o seu canal de vendas digital!</Texto>
                <BoxCard>

                    <CardInicial>
                        <H2>Labeninjas</H2>
                        <H3>O talento certo no momento certo</H3>
                        <BotaoSerNinja onClick={() => this.props.irParaCadastroLaks()}>Quero ser um ninja</BotaoSerNinja>
                        {/* esse tem que onclickear a pagina de contratação de serviço */}
                        <BotaoContratarNinja onClick={() => this.props.irParaCards()}>Quero contratar um ninja</BotaoContratarNinja>
                    </CardInicial></BoxCard>
                <Footer>
                    <h3>Labeninja.com</h3>
                    <p>&copy;Labenija Marketplace - Todos os direitos reservados</p>
                </Footer>

            </Body>
        )
    }
}