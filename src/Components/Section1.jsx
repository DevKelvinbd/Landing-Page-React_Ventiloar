import styled from "styled-components"
import ImgSection1 from "../assets/Images/img-section1.png"
import ImgVentiladores from "../assets/Images/ventiladores.png"
import NavBar from "./NavBar";

// Breakpoints padrão recomendados para React
const breakpoints = {
    xs: '320px',         // Extra small devices (mobile phones, less than 600px)
    sm: '600px',       // Small devices (small tablets and large phones, 600px and up)
    md: '960px',       // Medium devices (tablets, 960px and up)
    lg: '1200px',      // Large devices (desktops, 1280px and up)
    xl: '1920px'       // Extra large devices (large desktops and TVs, 1920px and up)
  };
   
//   @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

//   }

//   /* Small devices (small tablets and large phones, 600px and up) */
//   media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
  
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

const DivSection1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: 95vh;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 100%;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
       
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
     gap: 0; /* Remove espaçamento entre os filhos */

    }
`

const DivText = styled.div`
    position: relative; /* Define o contexto de posicionamento para a camada ::before */
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    width: 60%;
    height: 100%;
    background-color: #000A35;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 100%;
        align-items: left;
        background-image: url(${ImgVentiladores});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        /* Camada de sobreposição */
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000A35E6; /* Corrige o código de cor com opacidade */
            z-index: 1; /* Coloca a camada abaixo do conteúdo */
        }

        /* Ajuste o z-index para os elementos internos */
        > * {
            position: relative;
            z-index: 2; /* Garante que o conteúdo esteja acima da camada de sobreposição */
        }
    }

    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 100%;
        align-items: left;
        background-image: url(${ImgVentiladores});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        /* Camada de sobreposição */
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000A35E6; /* Corrige o código de cor com opacidade */
            z-index: 1; /* Coloca a camada abaixo do conteúdo */
        }

        /* Ajuste o z-index para os elementos internos */
        > * {
            position: relative;
            z-index: 2; /* Garante que o conteúdo esteja acima da camada de sobreposição */
        }
    }

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 100%
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 70%;
    }
    `

const Title = styled.h1`
    font-size: 3.7rem;
    text-align: left;
    padding: 0 2rem 0 5rem;
    margin: 0;
    line-height: 1;
    text-transform: uppercase;
    font-family: 'Impact', sans-serif;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        text-align: left;
        padding: 0 1rem 0 1rem;
        margin-top: 3rem;
        z-index: 10;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        text-align: start;
        padding: 0 3rem 0 3rem;
        margin-top: 3rem;
        z-index: 10;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        font-size: 3rem;
        padding: 0 2rem 0 3rem;

    }

`

const Paragraph = styled.h1`
    font-size: 1.5rem;
    text-align: justify;
    line-height: 1;
    font-weight: 400;
    padding: 0 2rem 0 5rem;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        padding: 0 1rem 0 1rem;
        z-index: 10;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        text-align: start;
        padding: 0 3rem 0 3rem;
        z-index: 10;


    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        font-size: 1.5rem;
        padding: 0 2rem 0 3rem;       
    }
`

const SpanColor = styled.span`
    color: #62EAF9;
`

const DivImage = styled.div`
    display: flex;
    justify-content: end;
    align-items: left;
    width: 40%;
    height: 100%;
    background-color: #000A35;

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
        height: 100%;
    }
`

const ImagemS1 = styled.img`
    transform: translateX(0rem); /* Ajuste o valor conforme necessário */


    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
     display: none;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        height: 100%;
        transform: translateX(6rem); /* Ajuste o valor conforme necessário */
    }
   

`

const Button = styled.button`
    width: 35%;
    margin: 0.5rem 2rem 0 5rem;
    padding: 1rem 0;
    background-color: #62EAF9;
    color: #000A35;
    font-family: 'Impact', sans-serif;
    font-size: 1.5rem;
    border: none;
    cursor: pointer; /* Define o cursor como pointer */
    border-radius: 0.3rem;
    transition: background-color 0.3s ease, transform 0.2s ease; /* Transição suave */

    &:hover {
        background-color: #161E41; /* Cor ao passar o mouse */
        color: white;
        transform: scale(1.05); /* Aumenta o botão levemente */
    };

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        margin: 0.5rem 3rem 0 1rem;

    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        margin: 0.5rem 3rem 0 2em;
        z-index: 10;

    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        margin: 0.5rem 2rem 0 3rem;
        

    }
}
`

const Section1 = () => {
  return (
    <>
        <DivSection1>
            <NavBar />
            <DivText>
                <Title>A solução que reduz seu consumo de energia em 90%</Title>
                <Paragraph>Uma introdução ao Sistema de Ventiladores em Série e sua inovação no mercado,<SpanColor> revolucionando a Ventilação com Economia e Sustentabilidade</SpanColor></Paragraph>
                <Button>Conheça sobre</Button>
            </DivText>

            <DivImage>
                <ImagemS1 src={ImgSection1} />
            </DivImage>
        </DivSection1>
    </>
  )
}

export default Section1