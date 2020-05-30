import React, { useState } from 'react';
import axios from 'axios';

//useState é uma função que vai retornar um array
//[ usuario, setUsuario ]
//Esse array tem duas posições. A primeira posição vai retornar o valor do estado e na segunda posição vai ser uma função que vai setar esse valor

function App(props) {
  //parâmetro props são propriedades
  const [ usuario, setUsuario ] = useState('');
  //'' é o estado inicial do usuario
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
    //axios vai fazer a requisição pra api do github
    //usa o .then porque é uma promisse que retorna
    //response.data para trazer so os repositórios

    //console.log(usuario);
  }

  return (
    <>
      
      {/* 
      <h1> { props.title } { props.user }</h1> 
      */}
      {/*
      <p> { usuario } </p>
      */}
      
      <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      {/* Evento onChange vai capturar qualquer alteração no input */}
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
