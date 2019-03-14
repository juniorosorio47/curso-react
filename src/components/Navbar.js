import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component{

    render(){
        return(
            <div>
                <nav className='navTop'>
                    <div>
                        <img id='icon' src={require('../img/logo.png')} alt='Logo'></img>
                        <a href='/'><h1>React.js</h1></a>
                    </div>
                    <a id='documentacao' target="_blank" rel="noopener noreferrer" href='https://reactjs.org/docs/getting-started.html'><p>Documentação Oficial <i id='iconDoc' style={{fontSize:'12pt', color:'#61DAFB', marginLeft:5}} className='fa fa-external-link-alt'></i></p></a>
                    
                </nav>
                <div  className='navSide'>
                    <NavLink  to='/'>Visão Geral</NavLink>
                    <NavLink  to='/config'>Configuração de ambiente</NavLink>
                    <NavLink  to='/jsx'>JSX</NavLink>
                    <NavLink  to='/componentes'>Componentes</NavLink>
                    <NavLink  to='/state'>State</NavLink>
                    <NavLink  to='/props'>Props</NavLink>
                    <NavLink  to='/validacao'>Validação</NavLink>
                    <NavLink  to='/api-componentes'>API dos Componentes</NavLink>
                    <NavLink  to='/ciclo-de-vida'>Ciclo de Vida</NavLink>
                    <NavLink  to='/forms'>Forms</NavLink>
                    <NavLink  to='/eventos'>Eventos</NavLink>
                    <NavLink  to='/refs'>Refs</NavLink>
                    <NavLink  to='/keys'>Keys</NavLink>
                    <NavLink  to='/router'>Router</NavLink>
                    <NavLink  to='/conceito-flux'>Conceito de Flux</NavLink>
                    <NavLink  to='/ultilizacao-flux'>Utilização de Flux</NavLink>
                    <NavLink  to='/animacoes'>Animações</NavLink>
                    <NavLink  to='/componentes-ordem-superior'>Componentes high order</NavLink>
                    <NavLink  to='/melhores-praticas'>Melhores Práticas</NavLink>
                </div>
            </div>
        )
    }
}

export default NavBar