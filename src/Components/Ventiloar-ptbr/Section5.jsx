import styled from "styled-components"
// Ícones
import Icone1 from "../../assets/Images/Icone1.svg"
import Icone2 from "../../assets/Images/Icone2.svg"
import Icone3 from "../../assets/Images/Icone3.svg"
import Icone4 from "../../assets/Images/Icone4.svg"
import Icone5 from "../../assets/Images/Icone5.svg"
import Icone6 from "../../assets/Images/Icone6.svg"

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

const DivSection5 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh; 
    background-color: #E1F0FD;
    flex-direction: column;
    
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

    /* Extra large devices (large desktops and TVs, 1920px and up) */
    @media (min-width: ${breakpoints.xl}) {
    
    }
`

const DivText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 55%;
    height: auto;

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
    margin: 0.5rem 0 1rem 0;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        margin-top: 1.5rem;
    }
`

const Div1Dif = styled.div`
    display: grid;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    width: 85%;
    height: auto;
    flex-wrap: wrap
    gap: 20px;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        grid-template-columns: 1fr; 
        justify-items: center
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr); 
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr); 
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const Div2Dif = styled.div`
    background-color: blue;
    width: 80%;
    height: 50%;
`

const DivItems = styled.div`
    flex-direction: column;
    height: auto;
    width: 100%;
    margin: 3rem 1.5rem 3rem 1.5rem;
    justify-content: center;
    align-items: center;
    // background-color: green;
    text-align: center;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    margin: 1rem 1.5rem 1rem 1.5rem;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        margin: 2rem 1.5rem 2rem 1.5rem;
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
    
`

const TitleDif = styled.h1`
  font-size: 1.5rem;
  color: #000A35;
  margin-bottom: 0.5rem;
`

const ParagraphDif = styled.p`
  font-size: 0.8rem;
  color: #000A35;
  margin: 0;
`

const Section5 = () => {
  return (
    <DivSection5>
        <DivText>
            <Title>Nossos<br />Diferenciais</Title>
        </DivText>

            <Div1Dif>
                <DivItems>
                   <Image src={Icone1} alt="Icone de Sifrão ($)" />
                   <TitleDif>Economia na conta de luz</TitleDif>
                   <ParagraphDif>(Chegando a mais de 90%)</ParagraphDif>
                </DivItems>

                <DivItems>
                    <Image src={Icone2} alt="Icone de Ferramentas" />
                    <TitleDif>Fácil manutenção e limpeza</TitleDif>
                   <ParagraphDif>(Apenas lubrificação e pode ser lavado)</ParagraphDif>
                </DivItems>

                <DivItems>
                    <Image src={Icone3} alt="Icone de Som" /> 
                    <TitleDif>Menor poluição sonora</TitleDif> 
                   <ParagraphDif>(Apenas um motor que ainda pode ser externo)</ParagraphDif>
                </DivItems>

                <DivItems>
                   <Image src={Icone4} alt="Icone Ampulheta" />
                   <TitleDif>Robustez e durabilidade</TitleDif>
                   <ParagraphDif>(Chegando a mais de 90%)</ParagraphDif>
                </DivItems>

                <DivItems>
                    <Image src={Icone5} alt="Icone Ferramentas de Instalação" />
                    <TitleDif>Fácil instalação</TitleDif>
                   <ParagraphDif>(Apenas lubrificação e pode ser lavado)</ParagraphDif>
                </DivItems>

                <DivItems>
                    <Image src={Icone6} alt="Icone de Reciclável" /> 
                    <TitleDif>Amigo do meio ambiente</TitleDif> 
                   <ParagraphDif>(Apenas um motor que ainda pode ser externo)</ParagraphDif>
                </DivItems>
            </Div1Dif>


    </DivSection5>

  )
}

export default Section5