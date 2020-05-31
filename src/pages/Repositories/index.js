import React, { useEffect, useState } from 'react';
//useEffect é um hook que monitora uma mudança em cima de uma variável e vai disparar uma função quando essa variável for alterada
import * as S from './styled';
//S pode ser qualquer coisa, é apenas para identificar o estilo
import { useHistory } from 'react-router-dom';

//componente
export default function Repositories() {
    const history = useHistory();
    //estado:
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        //vai armazenar dentro de repositoriesName o valor que está em localStorage
        if(repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            //console.log(repositoriesName);
            //pega tudo o que tinha dentro do localStorage
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/')
        }        
    }, []);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return (
                        <S.ListItem>Repositório: { repository }</S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}