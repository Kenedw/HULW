import React from 'react'

export default class Formulario extends React.Component{

    constructor() {
        super();
        this.state = {
            Nome: "Nao encontrou usuário"
        }
    }

    pegaDados(){

        var base64 = require('base-64')
        var utf8 = require('utf8')
    
        var encoded = (this.props.location.search).substring(1)
        var bytes = base64.decode(encoded)
        var cpf = utf8.decode(bytes)
    
        //retirando os pontos e os traços
        var cpfLimpo = cpf.substring(0,3) + cpf.substring(4,7) + cpf.substring(8,11) + cpf.substring(12,14)
    
        return fetch('https://hulw.herokuapp.com/usuario/cpf/' + cpfLimpo)
            .then((response) => response.json())
            .then((responseJson) => {
    
                this.setState({Nome: responseJson.no_Pessoa});
    
    
            }).catch((error) => {
                console.log('nao encontrou o usuario!!!');
        })
    }
    
    componentDidMount() {
    
        this.pegaDados();
    }

    render(){
        return (
            <div>Tela: Formulario, para o usuario: {this.state.Nome}</div>
        )
    }
} 