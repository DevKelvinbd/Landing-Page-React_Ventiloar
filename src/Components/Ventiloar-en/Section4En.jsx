import styled from "styled-components"
import ImgLines from '../../assets/Images/ImgLines.svg'

// Breakpoints padrão recomendados para React
const breakpoints = {
    xs: '320px',         // Extra small devices (mobile phones, less than 600px)
    sm: '598px',       // Small devices (small tablets and large phones, 600px and up)
    md: '960px',       // Medium devices (tablets, 960px and up)
    lg: '1200px',      // Large devices (desktops, 1280px and up)
    xl: '1920px'       // Extra large devices (large desktops and TVs, 1920px and up)
  };
   
//   @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

//   }

//   /* Small devices (small tablets and large phones, 600px and up) */
//   @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
  
//   }

//   /* Medium devices (tablets, 960px and up) */
//   @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
      
//   }

//   /* Large devices (desktops, 1280px and up) */
//   @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
  
//   }

//   /* Extra large devices (large desktops and TVs, 1920px and up) */
//   @media (min-width: ${breakpoints.xl}) {
  
//   }

const DivSection4 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh; 
    background-color: #E1F0FD;
    flex-direction: column;
    padding: 4rem 0 0rem 0;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        height: auto; 
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        height: auto; 
    
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        height: auto; 
        
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    
    }
`

const DivText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 55%;
    height: 100%;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 90%; 
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 75%; 
        height: auto;

    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 75%; 
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    
    }

    /* Extra large devices (large desktops and TVs, 1920px and up) */
    @media (min-width: ${breakpoints.xl}) {
    
    }

    
`

const Title = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    color: #000A35;
    margin: 0.5rem 0 0.5rem 0;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        margin-top: 1.5rem;
    }
`

const Paragraph = styled.p`
    font-size: 1.5rem;
    color: #000000; 
    margin: 0;
    text-align: center;

`

const Quote = styled.p`
    font-style: italic;
    text-align: center;
    font-size: 1.1rem;
    color: #000000;
    margin: 1rem 0;
`

const SpanColor = styled.span`
    color: #000000;
    font-weight: 700;
`

const ImagemLines = styled.img`
    padding-top: 2rem;
    width: 60%;
    height: auto;
    object-fit: contain; /* Ajusta a imagem dentro da div */

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        max-width: 90%; 
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        max-width: 60%; 

    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        max-width: 40%; 

    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        width: 40%;
    }

    /* Extra large devices (large desktops and TVs, 1920px and up) */
    @media (min-width: ${breakpoints.xl}) {
    
    }

`

const Section4En = () => {
  return (
    <DivSection4>
        <DivText>
            <Title>The Market</Title>
            <Paragraph>“The industry <SpanColor>aims to make adjustments for the size of the Brazilian market</SpanColor> in 2023. Around <SpanColor>18 million fans</SpanColor> are sold.”</Paragraph>
            <Quote>Source: Folha de São Paulo, 2023</Quote>
            <Title style={{marginTop: '1.5rem'}}>Market Potential</Title>
            <Paragraph><SpanColor>3,754,000</SpanColor> potential clients <SpanColor>B2B in Brazil alone</SpanColor></Paragraph>
        </DivText>
            <ImagemLines src={ImgLines} alt="Rede-Neural-Mundial" />
    </DivSection4>

  )
}

export default Section4En