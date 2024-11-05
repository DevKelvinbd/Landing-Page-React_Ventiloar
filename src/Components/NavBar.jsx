import React from 'react'
import styled from 'styled-components';
import LogoVentiloar from '../assets/Images/LogoVentiloar.svg'

const breakpoints = {
    xs: '320px',         // Extra small devices (mobile phones, less than 600px)
    sm: '600px',       // Small devices (small tablets and large phones, 600px and up)
    md: '960px',       // Medium devices (tablets, 960px and up)
    lg: '1200px',      // Large devices (desktops, 1280px and up)
    xl: '1920px'       // Extra large devices (large desktops and TVs, 1920px and up)
  };

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

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        visibility: hidden;
    }
`;

// Estilo para cada link
const NavLink = styled.li`
    font-size: 1.1rem;
    font-family: Arial, sans-serif;
    color: #fff;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #45a049;
    }

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        visibility: hidden;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    
    }

    /* Extra large devices (large desktops and TVs, 1920px and up) */
    @media (min-width: ${breakpoints.xl}) {
    
    }
        

`

const Image = styled.img`

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 50%;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 25%;

    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 25%;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        width: 15%;
    }

    /* Extra large devices (large desktops and TVs, 1920px and up) */
    @media (min-width: ${breakpoints.xl}) {
        width: 15%;
    }
`;

const NavBar = () => {
    
  return (
    <NavbarContainer>
        <Image src={LogoVentiloar} />
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