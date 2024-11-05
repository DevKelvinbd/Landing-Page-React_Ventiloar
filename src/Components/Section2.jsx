import styled from "styled-components"
import ImgSection2 from '../assets/Images/ImgSection2.png'

const DivSection2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: 95vh;
    background-color: #E1F0FD;

`

const DivImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center ;
    width: 40%;
    height: 100%;
    background-color: #E1F0FD;
`

const ImagemS2 = styled.img`
    height: 80%;
    width: auto;
    margin-left: 3rem; 
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

`

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: left;
    padding: 0 5em 0 3rem;  
    margin: 0;
    line-height: 1;
    font-family: 'Impact', sans-serif;
    color: #000A35;
`

const Paragraph = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding: 0 5em 0 3rem;
    margin: 1rem 0 0 0;
    color: #000A35;

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