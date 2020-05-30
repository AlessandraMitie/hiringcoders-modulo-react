import React, { useState } from 'react';
//useState é uma função que vai retornar um array
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
//history consegue ter um melhor controle de navegação das páginas

//[ usuario, setUsuario ]
//Esse array tem duas posições. A primeira posição vai retornar o valor do estado e na segunda posição vai ser uma função que vai setar esse valor

function App(props) {
  //parâmetro props são propriedades
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  //'' é o estado inicial do usuario
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
    //axios vai fazer a requisição pra api do github
    //usa o .then porque é uma promisse que retorna
    //response.data para trazer so os repositórios
    //console.log(usuario);
      const repositoriesName = [];
      
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      //vai setar um valor no localStorage
      //stingfy é um método que pega um objeto e transforma ele numa string
      history.push('/repositories');
      //sempre que salvar os dados no localstorage, vai chamar o repositories
    });
  }

  return (
    <S.Container>
      
      {/* 
      <h1> { props.title } { props.user }</h1> 
      */}
      {/*
      <p> { usuario } </p>
      */}
      
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      {/* Evento onChange vai capturar qualquer alteração no input */}
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;
