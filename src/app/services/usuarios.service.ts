import { Injectable } from '@angular/core';
import { E } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  url: string = 'http://localhost:8080/api';

  constructor() { }

  criarUsuarios(matricula, email, senha, nome, imagem) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuarios', {
        method: 'POST',
        body: 
        JSON.stringify({matricula: matricula, email: email, senha: senha, nome: nome, imagem: imagem}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarUsuarios(){
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuarios', {
        method: 'GET'
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarUsuario(codigo){
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuarios/' + codigo, {
        method: 'GET'
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  editarUsuario(codigo, matricula, email, senha, nome, imagem) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuarios/' + codigo, {
        method: 'POST',
        body: 
        JSON.stringify({matricula: matricula, email: email, senha: senha, nome: nome, imagem: imagem}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  login(nome, senha){
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuarios/', {
        method: 'POST',
        body: 
        JSON.stringify({nome: nome, senha: senha}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

}
