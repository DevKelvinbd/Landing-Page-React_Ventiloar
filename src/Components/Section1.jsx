import styled from "styled-components"
import ImgSection1 from "../assets/Images/img-section1.png"

// Breakpoints padrão recomendados para React
const breakpoints = {
    xs: '0px',         // Extra small devices (mobile phones, less than 600px)
    sm: '600px',       // Small devices (small tablets and large phones, 600px and up)
    md: '960px',       // Medium devices (tablets, 960px and up)
    lg: '1280px',      // Large devices (desktops, 1280px and up)
    xl: '1920px'       // Extra large devices (large desktops and TVs, 1920px and up)
  };
   

const DivSection1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: 90vh;
`

const DivText = styled.div`
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    width: 60%;
    height: 100%;
    background-color: #000A35;
`

const Title = styled.h1`
    font-size: 4rem;
    text-align: left;
    padding: 0 2rem 0 5rem;
    margin: 0;
    line-height: 1;
    text-transform: uppercase;
    font-family: 'Impact', sans-serif;

`

const Paragraph = styled.h1`
    font-size: 1.5rem;
    text-align: justify;
    line-height: 1;
    font-weight: 400;
    padding: 0 2rem 0 5rem;
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
    border-radius: 0.3rem;
`

const Section1 = () => {
  return (
    <DivSection1>
        <DivText>
            <Title>A solução que reduz seu consumo de energia em 90%</Title>
            <Paragraph>Uma introdução ao Sistema de Ventiladores em Série e sua inovação no mercado,<SpanColor> revolucionando a Ventilação com Economia e Sustentabilidade</SpanColor></Paragraph>
            <Button>conheça sobre</Button>
        </DivText>

        <DivImage>
            <img src={ImgSection1} />
        </DivImage>
    </DivSection1>
    
  )
}

export default Section1