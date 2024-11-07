import styled from "styled-components"
import ImgLines from '../assets/Images/ImgLines.svg'

const DivSection4 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh; 
    background-color: #E1F0FD;
`

const DivText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 55%;
    height: 90%;
`

const Title = styled.h1`
    font-size: 2.5rem;
    color: #000A35;
    margin: 0.5rem 0 0.5rem 0;
`

const Paragraph = styled.p`
    text-align: center;
    font-size: 1.5rem;
    color: #000000; 
    margin: 0;
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
    margin-top: 2rem;
    width: 70%;
    height: auto; /* Mantém a proporção da imagem */
    max-width: 100%; /* Garante que a imagem não ultrapasse a largura da div */
    object-fit: contain; /* Ajusta a imagem dentro da div */
`

const Section4 = () => {
  return (
    <DivSection4>
        <DivText>
            <Title>O Mercado</Title>
            <Paragraph>“A indústria <SpanColor>busca fazer ajustes para o tamanho do mercado</SpanColor> brasileiro do setor em 2023. São vendidos cerca de <SpanColor>18 milhões de ventiladores</SpanColor>”</Paragraph>
            <Quote>Fonte: Folha de São Paulo, 2023</Quote>
            <Title style={{marginTop: '1.5rem'}}>Potencial do Mercado</Title>
            <Paragraph><SpanColor>3.754.000</SpanColor> clientes em potencial apenas <SpanColor>B2B</SpanColor></Paragraph>
            <ImagemLines src={ImgLines} />


        </DivText>
    </DivSection4>

  )
}

export default Section4