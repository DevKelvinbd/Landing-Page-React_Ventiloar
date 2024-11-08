import React from 'react';
import styled from 'styled-components';
import LogoVentiloar from '../../assets/Images/LogoVentiloar.svg';
import FlagBrasil from '../../assets/Images/flag-brasil.svg';
import FlagEua from '../../assets/Images/flag-eua.svg';
import { Link, useNavigate } from 'react-router-dom';

const breakpoints = {
    xs: '320px',
    sm: '598px',
    md: '960px',
    lg: '1200px',
    xl: '1920px',
};

// Container da Navbar
const NavbarContainer = styled.nav`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 89%;
    top: 0;
    margin: 1rem 0rem;
    z-index: 1000;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        padding: 0 0 0 1.5rem;
    }
`;

// Estilo para os links de navegação
const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 0.5rem;
    padding: 0;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        display: none;
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
`;

const Image = styled.img`
    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 60%;
        position: relative;
    }
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 25%;
    }
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 25%;
    }
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        width: 15%;
    }
    @media (min-width: ${breakpoints.xl}) {
        width: 15%;
    }
`;

const ImgIconFlag = styled.img`
    cursor: pointer;
`;

const DivIcons = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const NavBar = () => {
    
    return (
        <NavbarContainer>
            <Image src={LogoVentiloar} alt='Logotipo-Ventiloar' />
            <DivIcons>
                <Link to="/">
                    <ImgIconFlag src={FlagBrasil} alt='Bandeira-Brasil' />
                </Link>
                <Link to="/en">
                    <ImgIconFlag src={FlagEua} alt='Bandeira-Estados-Unidos' />
                </Link>
            </DivIcons>
        </NavbarContainer>
    );
};

export default NavBar;
