import styled from "styled-components"
// Fotos
import FotoDevan from "../../assets/Images/idealizador-Devan-Dias.jpg"
import FotoKelvin from "../../assets/Images/programador-Kelvin-Dias.jpg"
import FotoSiqueira from "../../assets/Images/social-media-Siqueira-Neto.jpg"


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

const DivSection6 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh; 
    background-color: #E1F0FD;
    flex-direction: column;
    // padding: 4rem 0 4rem 0;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        height: auto; 
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        height: auto;

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
    margin: 2.5rem 0 1rem 0;

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
        grid-template-columns: repeat(1, 1fr); 
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        grid-template-columns: repeat(3, 1fr); 

    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        grid-template-columns: repeat(3, 1fr);
    }
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
`


const TitleDif = styled.h1`
  font-size: 2.5rem;
  color: #000A35;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`

const ParagraphDif = styled.p`
  font-size: 1.3rem;
  color: #000A35;
  margin: 0;
`

const ImgIdealizadores = styled.img`
    width: 70%;
    border-radius: 50%;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 60%;

    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 50%;

    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 80%;

    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        width: 70%;
    }

    /* Extra large devices (large desktops and TVs, 1920px and up) */
    @media (min-width: ${breakpoints.xl}) {
    
    }
`

const Section6En = () => {
  return (
    <DivSection6>
        <DivText>
            <Title>Our<br /> Founders</Title>
        </DivText>

            <Div1Dif>
                <DivItems>
                    <ImgIdealizadores src={FotoDevan} alt="Devan-Dias" />
                    <TitleDif>Francisco Dias</TitleDif>
                   <ParagraphDif>(Inventor | Founder of Projetação)</ParagraphDif>
                </DivItems>

                <DivItems>
                    <ImgIdealizadores src={FotoKelvin} alt="Kelvin-Dias" />
                    <TitleDif>Kelvin Dias</TitleDif> 
                   <ParagraphDif>(Developer | Designer)</ParagraphDif>
                </DivItems>

                <DivItems>
                    <ImgIdealizadores src={FotoSiqueira} alt="Siqueira-Neto" />
                   <TitleDif>Siqueira Neto</TitleDif>
                   <ParagraphDif>(Social Media | Videomaker)</ParagraphDif>
                </DivItems>
            </Div1Dif>


    </DivSection6>

  )
}

export default Section6En