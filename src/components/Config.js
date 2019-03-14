import React, { Component } from 'react';

class Config extends Component{

    render(){
        return(
            <div className='content'>
                <h1 className='titulo'>Configurações de ambiente</h1>
                <p>Neste tutorial utilizarei o editor de texto/código: <a href='https://code.visualstudio.com/' target="_blank" rel="noopener noreferrer"><strong>VS Code</strong></a>, mas você pode utilizar o que for de seu agrado, podendo utilizar até mesmo o bloco de notas do seu sistema operacional.</p>
                <p>Existem diversas maneiras de montar um ambiente de desenvolvimento React. Nós vamos utilizar uma ferramenta que o Facebook disponibiliza chamada "create-react-app".</p>
                <h2>Instalando o NodeJS</h2>
                <p>Para utilizarmos essa ferramenta é necessário somente ter o <a href='https://nodejs.org/en/about/' target="_blank" rel="noopener noreferrer"><strong>NodeJS</strong></a> com NPM instalado no computador. Abaixo o link para o download e instalação do NodeJS: </p>
                <ul>
                    <li>NodeJS e NPM - <a href='https://nodejs.org/en/download/' target="_blank" rel="noopener noreferrer"><strong>Faça o download no site oficial da plataforma <i className='fa fa-external-link-alt'></i></strong></a>.</li>
                    <li>Guia de de utilzação NodeJS - <a href='https://nodejs.org/en/docs/guides/' target="_blank" rel="noopener noreferrer"><strong>Iniciando com NodeJS <i className='fa fa-external-link-alt'></i></strong></a>.</li>
                </ul>
                <p>Após a instalação do NodeJS podemos verificar se a instalação foi efetuada com sucesso abrindo o prompt de comando e digitando o comando abaixo:</p>
                <code>node -v</code>
                <p>Esse comando mostra qual a versão do NodeJS que está instalada no seu computador. Deverá aparecer algo assim:</p>
                <code>v10.15.0</code>
                <h2>Instalando o create-react-app</h2>
                <p>Depois de instalar o NodeJS com sucesso, precisamos instalar o <a href='https://github.com/facebook/create-react-app' target="_blank" rel="noopener noreferrer"><strong>create-react-app</strong></a>, o qual utiliza o Webpack e Babel para montar um ambiente de desenvolvimento ReactJS completo. Não sendo necessário configurarmos linha à linha o Webpack e o Babel, o que pode ser bem tedioso.</p>
                <p>Para fazer a instalação da ferramenta você deve digitar a seguinte linha no prompt de comando:</p>
                <code>npm install -g create-react-app</code>                
                <p>Obs: Caso esteja em um sistema operacional Linux, talvez seja necessário utilizar o 'sudo' na frente do comando.</p>
                <p>Agora precisamos abrir o terminal na pasta onde criaremos a nossa aplicação, eu escolhi a Desktop para facilitar o entendimento.</p>
                <code>cd Desktop</code>
                <p>Assim que acessar a pasta podemos criar o projeto React com o comando "create-react-app" seguido do nome da sua aplicação, no meu caso a aplicação se chama 'aplicativo':</p>
                <code>create-react-app aplicativo</code>
                <p>A instalação dos pacotes pode demorar um pouco, dependerá da velocidade da sua internet. Ao final da instalação será criada uma pasta com o nome da sua aplicação na pasta onde você digitou o comando.</p>
                <p><img style={{borderRadius:10, width:800, maxWidth:'100%', boxShadow: '5px 5px 15px 0px'}} src={require('../img/print1.png')} alt='print1'/></p>
                <p>Abra o terminal e vá para a pasta onde foi criado o aplicativo com o comando "cd"</p>
                <p>Para iniciar o servidor digite o seguinte comando com o terminal na pasta do aplicativo:</p>
                <code>npm start</code>
                <p>O servidor será iniciado e abrirá automaticamente a página do aplicativo no servidor "localhost:3000".</p>
                <p><img style={{borderRadius:10,width:800, maxWidth:'100%', boxShadow: '5px 5px 15px 0px'}} src={require('../img/print2.png')} alt='print2'/></p>
                <h2>Testando a aplicação base</h2>
                <p>Podemos testar a aplicação base modificando o arquivo 'App.js' que está na pasta 'src'. No meu caso estou utilizando o VS Code para editar o código.</p>
                <p><img style={{borderRadius:10,width:800, maxWidth:'100%', boxShadow: '5px 5px 15px 0px'}} src={require('../img/print3.png')} alt='print3'/></p>
                <p>Modificando a linha selecionada que possui a tag P, como no exemplo abaixo:</p>
                <p><img style={{borderRadius:10,width:800, maxWidth:'100%', boxShadow: '5px 5px 15px 0px'}} src={require('../img/print4.png')} alt='print4'/></p>
                <p>Após salvar a modificação do arquivo, a página que foi aberta irá atualizar automaticamente:</p>
                <p><img style={{borderRadius:10,width:800, maxWidth:'100%', boxShadow: '5px 5px 15px 0px'}} src={require('../img/print5.png')} alt='print5'/></p>
                <p>PRONTO! Você começou a programar com React.</p>
            </div>
        )
    }
}

export default Config