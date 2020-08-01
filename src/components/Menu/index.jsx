import React from 'react';
import Logo from '../../assets/logo.png';
import Button from '../Button';
import './Menu.css'

export default props => {
    return (
        <nav className='Menu'>
            <a href="/">
                <img className='Logo' src={Logo} alt="AluraFlix logo"/>
            </a>
            
            <Button as="a" className='ButtonLink' href='/'>
                Novo vídeo
            </Button>
        </nav>
    )
}