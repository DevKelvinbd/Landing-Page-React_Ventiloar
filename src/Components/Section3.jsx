import styled from "styled-components"
import ImgSection3 from '../assets/Images/ImgSection3.png'

const DivSection3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: 95vh;
    background-color: #000A35;
`

const DivImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center ;
    width: 40%;
    height: 100%;
    background-color: #000A35;
`

const ImagemS3 = styled.img`
    height: 100%;
    width: auto;
    margin-left: 3rem; 
`

const SpanColor = styled.span`
    color: #ffffff;
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
    // background-color: #000A35;

`

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: left;
    padding: 0 3em 0 5rem;  
    margin: 0;
    line-height: 1;
    font-family: 'Impact', sans-serif;
    color: #ffffff;
`

const Paragraph = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding: 0 3em 0 5rem;  
    margin: 1rem 0 0 0;
    color: #ffffff;

`

const Section2 = () => {
  return (
    <DivSection3>
       <DivText>
            <Title>Solução</Title>
            <Paragraph>O Sistema de Ventiladores em Série não possui um motor individualmente em cada hélice, com um único motor central, é possível mover várias hélices, diminuindo assim o consumo de energia e consequentemente o preço na conta de luz.</Paragraph>
            <Paragraph>Um grande diferencial do nosso produto é a durabilidade, queremos quebrar o tabu da Obsolescência Programada, na qual compramos um produto com data de validade para quebrar.</Paragraph>
            <Paragraph>nossa proposta é levar para o cliente um produto funcional, durável, econômico e sustentável diminuindo em até 90% o consumo de energia com ventiladores, e entregando uma qualidade de ventilação muito superior.</Paragraph>
        </DivText>

        <DivImage>
            <ImagemS3 src={ImgSection3} />
        </DivImage>

    </DivSection3>
  )
}

export default Section2