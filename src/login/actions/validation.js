import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

const liberar = async (cpfE,pass) => {
    //var liberado = false;
    //https://hulw.herokuapp.com/auth/login
    const response = await fetch('https://hulw.herokuapp.com/auth/login',{
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ cpf: cpfE, password: pass })
    })
    const json = await response.json();
    var user = json.user;

    if (user === null){
        return false;
    }

    token = json.token;
    id_Usuario = user[0].id_Usuario;
    is_admin = user[0].is_Adm;

    return true;
}

const getChefe = async (token) => {

    const response = await fetch('https://hulwteste.herokuapp.com/auth/me/',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "x-access-token": token
        }
    });
    const json = await response.json();
    return json[0].is_Adm;
}

const getId = async (cpf) => {
    const response = await fetch('https://hulw.herokuapp.com/auth/me');
    const json = await response.json();
    return json.id_Usuario;
}

var state = -1
var token = "a";
var id_Usuario = -1;
var is_admin = -1;

export default async function newLogin(user,pass) {

    //retirando os pontos e os traços
    var cpfLimpo = user.substring(0,3) + user.substring(4,7) + user.substring(8,11) + user.substring(12,14)
    
    
    var liberado = await liberar(cpfLimpo,pass);
    //console.log(liberado);
    if (liberado){
        console.log(' '+ id_Usuario + ' '+ is_admin + ' ' + token);
        
        if(is_admin){
            state = 3; //ira entrar como adminstrador
        }else{

            var is_chefe = await getChefe(token);
            if(is_chefe) state = 2;
            else state = 1;
        }
    }
    return ({state, token});
}