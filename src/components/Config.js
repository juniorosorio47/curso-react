import React, { Component } from 'react';

class Config extends Component{

    render(){
        return(
            <div className='content'>
                <h1>Configurações de ambiente</h1>
                <p>Existem diversas maneiras de montar um ambiente de desenvolvimento React. Nós vamos utilizar uma ferramenta que o Facebook disponibiliza chamada "create-react-app".</p>
                <p>Para utilizarmos essa ferramenta é necessário ter o <a href='https://nodejs.org/en/about/' target="_blank" rel="noopener noreferrer"><strong>NodeJS</strong></a> instalado no computador. Abaixo o link para o download e instalação do NodeJS: </p>
                <ul>
                    <li>NodeJS e NPM - <a href='https://nodejs.org/en/download/' target="_blank" rel="noopener noreferrer"><strong>Faça o download no site oficial da plataforma <i className='fa fa-external-link-alt'></i></strong></a>.</li>
                    <li>Guia de de utilzação NodeJS - <a href='https://nodejs.org/en/docs/guides/' target="_blank" rel="noopener noreferrer"><strong>Iniciando com NodeJS <i className='fa fa-external-link-alt'></i></strong></a>.</li>
                </ul>
                <p>Após a instalação do NodeJS podemos verificar se a instalação foi efetuada com sucesso abrindo a linha de comando e digitando o comando abaixo:</p>
                <code>node -v</code>
                <p>Deverá aparecer algo assim:</p>
                <code>v10.15.0</code>
                <p>Depois de instalar o NodeJS com sucesso, precisamos instalar o create-react-app, o qual utiliza o webpack e babel para funcionar:</p>
                    <ul>
                        <li><p>Create-react-app: É uma ferramenta disponibilizada pelo Facebook para </p></li>
                        <li><p>Babel: Um compilador de Javascript que serve para transformar códigos de Javascript moderno para Javascript mais usado nos navegadores, o ES5.</p></li>
                        <li><p>Webpack: Gerenciador de módulos Javascript, serve para empacotar os módulos de seu código Javascript em um único arquivo para utilizar no navegador.</p></li>
                    </ul>
                <h2>Instalando o create-react-app</h2>
                <p>Para fazer a instalação da ferramenta você deve digitar a seguinte linha no prompt de comando:</p>
                <code>npm install -g create-react-app</code>                
                <p>Primeiro crie uma pasta na para receber os arquivos da aplicação:</p>
                <code>cd Desktop</code>
                <p>Após a criação da pasta acesse a mesma com o comando:</p>
                <code>cd app</code>
                <p>Assim que acessar a pasta podemos criar o projeto React com o comando "create-react-app" seguido do nome da sua aplicação:</p>
                <code>create-react-app aplicativo</code>
                <p>A instalação dos pacotes demora um pouco, depende da velocidade da sua internet.</p>
                <p>Serão criados os arquivos na pasta informada e você terá uma pasta parecida com essa:</p>
                <p><img style={{borderRadius:10,width:'40%', boxShadow: '5px 5px 15px 0px'}} src={require('../img/print1.png')} alt='print1'/></p>
                <p>Para iniciar o servidor digite o seguinte comando com o terminal na pasta do aplicativo:</p>
                <code>npm start</code>
                <p>O servidor será iniciado e abrirá automaticamente à página do aplicativo no servidor "localhost:3000".</p>
                <p><img style={{borderRadius:10,width:'40%', boxShadow: '5px 5px 15px 0px'}} src={require('../img/print2.png')} alt='print2'/></p>
                <h2>Testando a aplicação</h2>
                <p>A página inicial no qual foi aberta a aplicação está dizendo para modificarmos o arquivo 'App.js' que está na pasta 'src'.</p>
                <p><img style={{borderRadius:10,width:'40%', boxShadow: '5px 5px 15px 0px'}} src={require('../img/print2.png')} alt='print2'/></p>
                
            </div>
        )
    }
}

export default Config