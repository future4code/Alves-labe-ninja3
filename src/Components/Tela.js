import React from "react";
import axios from "axios";
import { FiltersComponets } from "./Filtro/FiltersComponets";

export default class TelaExibir extends React.Component {
    state = {
        jobs: []
    }
    
    exibirTodos = () => {
        const url1 = "https://labeninjas.herokuapp.com/jobs"
        axios.get(url1, {
            headers: {
                Authorization: "79840a71-ac32-416b-b3e2-220060bc0a97"
            }
        }).then((resposta) => {
            this.setState({
                jobs: resposta.data.jobs
            })
        })
            .catch((erro) => {
                console.log(erro.response)
            })
    }
    
    render() {
        const arraydetrabalhor = this.state.jobs
        return (
            <FiltersComponets
                Arraytrabalho={arraydetrabalhor}
                exibirTodos={this.exibirTodos} />
        )
    }
}


