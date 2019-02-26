import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component{

    render(){
        return( 
            <div className='content'>
                <h1 className='titulo'>Visão geral</h1>

                <p>React é uma biblioteca JavaScript para construir componentes UI (User Interface) reutilizáveis. A seguir a definição da documentação oficial:</p>
                <p>React é uma biblioteca UI's combináveis. Isso encoraja a criação de componentes UI reutilizáveis, os quais apresentam dados que podem ter mudanças ao longo do tempo. Muitas pessoas utilizam React como o V de MVC (Model View Controller). React resume o DOM para você, oferecendo um modelo de programação simples para uma performance melhor. React pode também ser renderizado no servidor usando Node, e pode dar vida à aplicativos nativos com React Native. React implementa um fluxo de dados unidirecional, o que reduz o boilerplate (repetição de código) e é mais fácil de entender do que o código tradicional.</p>
                
                <h2>Características do React</h2>
                <p>
                    <ul>
                        <li><p><NavLink to='/jsx'><strong>JSX</strong></NavLink> - JSX é uma extensão de sintaxe JavaScript. Não é obrigatório utilizar JSX no desenvolvimento com React, mas é recomendado.</p></li>
                        <li><p><NavLink to='/componentes'><strong>Componentes</strong></NavLink> - React é moldado de componentes. É necessário pensar em tudo como um componente. Isso irá ajudar a realizar a manutenção do código quando estiver trabalhando um projeto em larga escala.</p></li>
                        <li><p><NavLink to='/conceito-flux'><strong>Fluxo de dados unidirecional e Flux</strong></NavLink> - React implementa um fluxo de dados unidirecional o que faz a aplicação ficar com uma leitura mais fácil. Flux é um padrão de projeto que faz os dados se manterem unidirecionais.</p></li>
                        <li><p><a href='https://creativecommons.org/licenses/by/4.0/deed.pt_BR' target="_blank" rel="noopener noreferrer"><strong>Licença</strong></a> - A biblioteca React é licenciada pelo Facebook Inc. A documentação é licenciada por CC BY 4.0</p></li>
                    </ul>
                </p>

                <h2>Vantagens do React</h2>
                <ul>
                    <li><p>O React usa um DOM virtual o qual é um objeto JavaScript. Isso melhora a performance do aplicativo, por que o virtual DOM do JavaScript é mais rápido que o DOM "real".</p></li>
                    <li><p>Pode ser usado tanto no client-side quanto no server-side podendo se utilizar com outros frameworks ao mesmo tempo.</p></li>
                    <li><p>Os componentes e padrões de dados facilitam a leitura do código, o que ajuda na  manutenção do código.</p></li>
                </ul>

                <h2>Limitações do React</h2>
                <ul>
                    <li><p>Cobre somente a camada view da aplicação, o que faz necessário a utilização de outras tecnologias para a parte do back-end.</p></li>
                    <li><p>Usa inline templating a JSX, o que parece estranho para alguns desenvolvedores.</p></li>
                </ul>
            </div>
        )
    }
}



export default Home