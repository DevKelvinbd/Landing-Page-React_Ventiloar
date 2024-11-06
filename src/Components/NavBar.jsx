import React from 'react'
import styled from 'styled-components';
import LogoVentiloar from '../assets/Images/LogoVentiloar.svg'
import FlagBrasil from '../assets/Images/flag-brasil.svg'
import FlagEua from '../assets/Images/flag-eua.svg'

const breakpoints = {
    xs: '320px',         // Extra small devices (mobile phones, less than 600px)
    sm: '598px',       // Small devices (small tablets and large phones, 600px and up)
    md: '960px',       // Medium devices (tablets, 960px and up)
    lg: '1200px',      // Large devices (desktops, 1280px and up)
    xl: '1920px'       // Extra large devices (large desktops and TVs, 1920px and up)
  };

// Container da Navbar
const NavbarContainer = styled.nav`
    position: absolute; /* Fixa a navbar no topo */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 89%;
    top: 0;
    margin: 1rem 0rem;
    z-index: 1000; /* Garante que fique acima de outros elementos */

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        padding: 0 0 0 1rem;
    }
`;


// Estilo para os links de navegação
const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 0.5rem;
    padding: 0;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        // display: none;
        // gap: 0rem;
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
        color: #62EAF9;
    }

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        color: #fff;

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
        width: 60%;
        position: relative;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 25%;

    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 25%;
        // margin-left: 1.5rem; 

    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        width: 15%;
    }

    /* Extra large devices (large desktops and TVs, 1920px and up) */
    @media (min-width: ${breakpoints.xl}) {
        width: 15%;
    }
`

const ImgIconFlag = styled.img`
// margin: 0 0.5rem 0 0 ;
`;

const NavBar = () => {
    
  return (
    <NavbarContainer>
        <Image src={LogoVentiloar} />
        <NavLinks>
            <ImgIconFlag src={FlagBrasil} />
            <ImgIconFlag src={FlagEua} />
        </NavLinks>
    </NavbarContainer>
  )
}

export default NavBar