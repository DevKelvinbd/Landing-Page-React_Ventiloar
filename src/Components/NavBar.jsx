import React from 'react'
import styled from 'styled-components';

// Container da Navbar
const NavbarContainer = styled.nav`
    position: absolute; /* Fixa a navbar no topo */
    width: 89%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 1000; /* Garante que fique acima de outros elementos */
`;

// Estilo para o logo
const Logo = styled.div`
    font-family: 'Impact', sans-serif;
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
    align-items: start;
`;

// Estilo para os links de navegação
const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
`;

// Estilo para cada link
const NavLink = styled.li`
    font-size: 1.2rem;
    font-family: Arial, sans-serif;
    color: #fff;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #45a049;
    }
`;

const NavBar = () => {
    
  return (
    <NavbarContainer>
        <Logo>Ventiloar</Logo>
        <NavLinks>
            <NavLink>Sobre</NavLink>
            <NavLink>Solução</NavLink>
            <NavLink>Diferenciais</NavLink>
            <NavLink>Contato</NavLink>
        </NavLinks>
    </NavbarContainer>
  )
}

export default NavBar