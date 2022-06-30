import React from "react";
import axios from "axios";

export default class TelaExibir extends React.Component {
state = {
        "jobs": [
            {
                "id": "efed9385-cf87-4f0e-a121-465384b3f2e4",
                "title": "Cortar a grama",
                "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
                "price": 40,
                "paymentMethods": [
                  "PayPal",
                  "boleto"
                ],
                "dueDate": "2021-12-30T00:00:00.000Z",
                "taken": false
              }
        ]
      }

componentDidMount() 
{
this.exibirTodos()
}

componentDidMount() 
{
this.exibirTrabalhos()
}


exibirTodos = () => {
    const url1 = "https://labeninjas.herokuapp.com/jobs"

    axios.get(url1, {
        headers: {
            Authorization:
            "79840a71-ac32-416b-b3e2-220060bc0a97"
            
        }

    }).then((resposta) =>{
        console.log(resposta.data.result.list)
        this.setState({jobs: resposta.data.result.list})
    })
    .catch((erro)=> {
        console.log(erro.response.data.message)

    })
}

exibirTrabalhos = () => {
    const url1 = `https://labeninjas.herokuapp.com/jobs/:id`

    axios.get(url1, {
        headers: {
            Authorization:
            "79840a71-ac32-416b-b3e2-220060bc0a97"
        }

    }).then((resposta) =>{
        console.log(resposta.data.id)
        this.setState({jobs: resposta.data.result.id})
    })
    .catch((erro)=> {
        console.log(erro.response.data.message)

    })
}


render() {
    const l = this.state.jobs.map((jobs) => {
        return (

            <div
                key={jobs.id}>


                <div>{jobs.title},
                {jobs.description},
               { jobs.price},{jobs.taken}</div>



            </div>
        )
    });

    
    return (


        <div>
            {/* <h1>Exibir aqui</h1> */}
            {this.exibirTrabalhos}
            {this.exibirTodos}

        </div>
    )
}
}