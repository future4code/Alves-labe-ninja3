import React from "react";
import axios from "axios";
import styled from "styled-components";
// import VerDetalhes from "./CardDetalhes/VerDetalhes";


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

export default class TelaExibir extends React.Component {

    state = {
      jobs: [] 
    }


    componentDidMount() {
        this.exibirTodos()
    }


    exibirTodos = () => {
        const url1 = "https://labeninjas.herokuapp.com/jobs"

        axios.get(url1, {
            headers: {
                Authorization:
                    "79840a71-ac32-416b-b3e2-220060bc0a97"

            }

        }).then((resposta) => {
            console.log(resposta.data.jobs)
            this.setState({ jobs: resposta.data.jobs })
        })
            .catch((erro) => {
                console.log(erro.response)

            })

    }



    render() {
        const trabalhosMap = this.state.jobs.map((jobs) => {
            return (



             <Card key={jobs.id}><h2>{jobs.title}</h2><br />
                    <p>&#5125; {jobs.description}</p><br />
                    <p>R${jobs.price}</p><br />
                    <p>&#5125;{jobs.paymentMethods.map((item) => { return <div>{item}</div> })}</p><br />
                    <p>&#5125;{jobs.dueDate.split('T')[0]}</p><br />
                    <BottonCard >Ver Detalhes</BottonCard>
                    <BottonCard >Adicionar ao Carrinho</BottonCard>
            </Card>

    


            )
        });


        return (


            <div>
                {trabalhosMap}

            </div>
        )
    }
}