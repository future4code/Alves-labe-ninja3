import React from "react";
import axios from "axios";
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



export default class TelaExibir extends React.Component {
    state = {
        jobs: [
{
             id: "efed9385-cf87-4f0e-a121-465384b3f2e4" ,
             title: "Cortar a grama" ,
             description: "Manutenção em áreas verdes de até 1000 metros quadrados",
             price: 40,
            
                paymentMethods: [
                    "PayPal",
                    "boleto"
                ]
            ,
            dueDate: "2021-12-30" ,
             taken: false 
}
        ]
    }

    componentDidMount() {

        this.exibirTodos()
    }

    componentDidMount() {

        this.exibirTrabalhos()

    }

    exibirTodos = () => {
        const url1 = "https://labeninjas.herokuapp.com/jobs"

        axios.get(url1, {
            headers: {
                Authorization:
                    "79840a71-ac32-416b-b3e2-220060bc0a97"

            }

        }).then((resposta) => {
            console.log(resposta)
            // this.setState({})
        })
            .catch((erro) => {
                console.log(erro)

            })
    }

    exibirTrabalhos = (id) => {
        const url1 = `https://labeninjas.herokuapp.com/jobs/${id}`

        axios.get(url1, {
            headers: {
                Authorization:
                    "79840a71-ac32-416b-b3e2-220060bc0a97"
            }

        }).then((resposta) => {
            console.log(resposta)
            this.setState({})
        })
            .catch((erro) => {
                console.log(erro)

            })
    }


    render() {
        const trabalhosMap = this.state.jobs.map((jobs) => {
            return (

                <div
                    key={jobs.id}>


                    <Card><h2>{jobs.title}</h2><br />
                       <p>&#5125; {jobs.description}</p><br />
                        <p>R${jobs.price}</p><br />
                        <p>&#5125;{jobs.paymentMethods}</p><br />
                        <p>&#5125;{jobs.dueDate}</p><br />
                        {jobs.taken}
                        <BottonCard onClick={this.VerDetalhes}>Ver Detalhes</BottonCard>
                        <BottonCard onClick={()=>{this.adicionaProduto(jobs.id)} } >Adicionar ao Carrinho</BottonCard>
                    </Card>



                </div>
            )
        });


        return (


            <div>
                {trabalhosMap}

            </div>
        )
    }
}