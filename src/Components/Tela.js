import React from "react";
import axios from "axios";
import styled from "styled-components";
// import VerDetalhes from "./CardDetalhes/VerDetalhes";


const Card = styled.div`
border: 1px double #FF2E63;
display:flex;
justify-content:column;
width:190px;
font-family: 'Zilla Slab', serif;
padding:5px;
box-shadow: 10px 10px 10px 5px #696969;
margin:50px;
flex-wrap: wrap;


`


const DivBotton = styled.div` 
display:flex;
flex-direction:column;

 `

const BottonCard = styled.button`
border: 3px solid #FF2E63;
margin:7px;
display:flex;
justify-content:center;
font-family: 'Zilla Slab', serif;
padding:5px ;
background-color:#FF2E63;
color: #252A34;
font-weight: bold;

`
const AllCards = styled.main`
display:inline-flex;
flex-direction: row;
flex-wrap: wrap;

`







export default class TelaExibir extends React.Component {

    state = {
        jobs: [],
        trueOufalse:""
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

    // Código gabriel => adicionar ao carrinho

    adiocionarAoCArrinho=(user)=>{
        let body = {"taken": true}
        let id = user
        let url = `https://labeninjas.herokuapp.com/jobs/${id}`
        axios.post(url,body,{
            headers:{
                Authorization:"79840a71-ac32-416b-b3e2-220060bc0a97"
            }
        }).then((resposta)=>{alert("adicionado ao carrinho")})
        .catch((erro)=>{alert("Ocorreu um erro inesperado, tente novamente mais tarde")})
    }

    render() {
        const trabalhosMap = this.state.jobs.map((jobs) => {
            return (
                <AllCards>


                    <Card key={jobs.id}><h2>{jobs.title}</h2><br />
                        <p>&#5125; {jobs.description}</p><br />
                        <p>&#5125;Preço: R${jobs.price}</p><br />
                        <p>Formas de Pagamento:{jobs.paymentMethods.map((item) => { return <div>{item}</div> })}</p><br />
                        <p>&#5125;{jobs.dueDate.split('T')[0]}</p><br />
                        <DivBotton>
                        <BottonCard >Ver Detalhes</BottonCard>
                        <BottonCard onClick={() => this.adiocionarAoCArrinho(jobs.id)}>Adicionar ao Carrinho</BottonCard>
                        </DivBotton>
                    </Card>

                </AllCards>


            )
        });


        return (


            <div>
                {trabalhosMap}

            </div>
        )
    }
}