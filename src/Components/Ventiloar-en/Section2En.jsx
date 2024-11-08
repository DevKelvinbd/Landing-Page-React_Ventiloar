import styled from "styled-components"
import ImgSection2 from '../../assets/Images/ImgSection2.png'

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
        height: 78%;

        
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
    padding: 0 5em 1rem 3rem;  
    margin: 0;
    line-height: 1;
    font-family: 'Impact', sans-serif;
    color: #000A35;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        padding: 0.5rem 2.5rem 01rem 2.5rem;

    }

    /* Small devices (small tablets and large phones, 600px and up) */
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        padding: 1rem 3rem 1rem 3rem;          
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
    margin: 0rem 0 0 0;
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

const Spacing = styled.div`
    height: 1rem;
`

const Section2En = () => {
  return (
    <DivSection2>
        <DivImage>
            <ImagemS2 src={ImgSection2} alt="Imagem-Ventiladores-Em-Série" />
        </DivImage>

        <DivText>
            <Title>Abouts</Title>
            <Paragraph>
                The <SpanColor>Ventiloar</SpanColor> is a <SpanColor>Series Fan System</SpanColor> that operates with only one motor for multiple blades, driven by transmission boxes and cables.
                <span style={{ display: 'block', marginBottom: '1rem' }}></span>
                A highly <SpanColor>economical</SpanColor> solution in terms of equipment acquisition, installation, and <SpanColor>electricity consumption.</SpanColor>
                <span style={{ display: 'block', marginBottom: '1rem' }}></span>
                Speaking with various business owners in Ceará, we noticed a significant pain point in the ventilation sector: gyms that purchase 10 fans at the beginning of the year often end up with only 4 or 5 by the end, as many burn out and need to be replaced.
                <span style={{ display: 'block', marginBottom: '1rem' }}></span>
                We noticed that businesses <SpanColor>do not install the adequate number of fans</SpanColor> in their spaces due to fears of excessive electricity consumption. This results in a hot environment, leaving business owners frustrated and clients dissatisfied with the poor service provided in the space.
            </Paragraph>
            
        </DivText>

    </DivSection2>
  )
}

export default Section2En