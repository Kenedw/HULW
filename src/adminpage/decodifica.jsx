export default function decodificar(valor){
    var base64 = require('base-64')
    var utf8 = require('utf8')
  
    var decodificado = utf8.decode(base64.decode(valor))
  
    return decodificado;
}