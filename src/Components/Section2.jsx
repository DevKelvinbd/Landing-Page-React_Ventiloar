import styled from "styled-components"
import ImgSection2 from '../assets/Images/ImgSection2.png'

const breakpoints = {
    xs: '320px',         // Extra small devices (mobile phones, less than 600px)
    sm: '598px',       // Small devices (small tablets and large phones, 600px and up)
    md: '960px',       // Medium devices (tablets, 960px and up)
    lg: '1200px',      // Large devices (desktops, 1280px and up)
    xl: '1920px'       // Extra large devices (large desktops and TVs, 1920px and up)
  };

const DivSection2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: 100vh;
    background-color: #E1F0FD;
    flex-direction: row;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        flex-direction: column;
        height: auto;
        padding: 6rem 0;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        flex-direction: column;
        height: auto;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    
    }

`

const DivImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    background-color: #E1F0FD;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        display: none;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        display: none;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 40%;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    
    }
`

const ImagemS2 = styled.img`
    height: 80%;
    width: auto;
    margin-left: 3rem; 

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 100%;
        height: auto;
        // padding-right: 2rem; 
        transform: rotate(90deg); /* Rotaciona a imagem em 90 graus no sentido horário */
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: auto;
        margin-left: 1rem; 
        
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    
    }
`

const SpanColor = styled.span`
    color: #000000;
    font-weight: 700;
`

const DivText = styled.div`
    position: relative; /* Define o contexto de posicionamento para a camada ::before */
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    width: 60%;
    height: 80%;
    background-color: #E1F0FD;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 100%;
        margin: 2rem 0;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 100%;
        margin: 5rem 0;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 60%;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    
    }

`

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: left;
    padding: 0 5em 0 3rem;  
    margin: 0;
    line-height: 1;
    font-family: 'Impact', sans-serif;
    color: #000A35;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        padding: 0.5rem 2.5rem 0.5rem 2.5rem;

    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        padding: 1rem 3rem 0 3rem;          
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        font-size: 2.2rem;
        padding: 0 2rem 1rem 1rem;          
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    
    }
`

const Paragraph = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding: 0 5em 0 3rem;
    margin: 1rem 0 0 0;
    color: #000A35;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        padding: 0.5rem 2.5rem 0.5rem 2.5rem;
        font-size: 0.9rem;
        margin: 0.3rem 0 0 0;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        padding: 0 3rem 0 3rem;           
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        font-size: 1rem;
        padding: 0 3rem 0 1rem;          
       
    }

    /* Large devices (desktops, 1200px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    
    }

`

const Section2 = () => {
  return (
    <DivSection2>
        <DivImage>
            <ImagemS2 src={ImgSection2} />
        </DivImage>

        <DivText>
            <Title>Sobre</Title>
            <Paragraph>A <SpanColor>Ventiloar</SpanColor> trata-se de um <SpanColor>Sistema de Ventiladores em Série</SpanColor> que funciona com apenas 1 motor para várias hélices, movidos através de caixas de transmissão e cabos.</Paragraph>
            <Paragraph>Uma solução muito <SpanColor>econômica</SpanColor> na aquisição dos equipamentos, instalação e <SpanColor>consumo de energia elétrica.</SpanColor></Paragraph>
            <Paragraph>Conversa ndo com diversos empresários no Ceará, percebemos uma dor muito grande no setor de ventilação, academias que compram 10 ventiladores no início do ano, chegam no final com 4 ou 5, muitos acabam queimando, e precisam ser trocados.</Paragraph>
            <Paragraph>Percebemos que as empresas <SpanColor>não colocam a quantidade adequada de ventiladores</SpanColor> no seu espaço, por medo do consumo excessivo da energia elétrico, resultando em um ambiente quente, com empresários frustrados e clientes insatisfeitos pelo mal serviço prestado no ambiente.</Paragraph>
        </DivText>

    </DivSection2>
  )
}

export default Section2