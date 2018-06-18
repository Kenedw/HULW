export default function codificar(valor){
    var base64 = require('base-64')
    var utf8 = require('utf8')
  
    var codificado = utf8.encode(base64.encode(valor))
  
    return codificado;
  }