import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled, { keyframes } from 'styled-components';
import StsLogo from './imgs/sts-logo.png';

import slide_image_1 from './imgs/img-1.jpg';
import slide_image_2 from './imgs/img-2.jpg';
import slide_image_3 from './imgs/img-3.jpg';
import slide_image_4 from './imgs/img-4.jpg';
import slide_image_5 from './imgs/img-5.jpg';
import slide_image_6 from './imgs/img-6.jpg';
import slide_image_7 from './imgs/img-7.jpg';

const breakpoints = {
  xs: '320px',         // Extra small devices (mobile phones, less than 600px)
  sm: '598px',       // Small devices (small tablets and large phones, 600px and up)
  md: '962px',       // Medium devices (tablets, 960px and up)
  lg: '1200px',      // Large devices (desktops, 1280px and up)
  xl: '1920px'       // Extra large devices (large desktops and TVs, 1920px and up)
};

// Styled components
const CarrouselContainer = styled.div`
  --primary: #000A35;
  --white: #ffffff;
  --bg: #000A35;
  --arrow-color: #ffffff;
  --arrow-bg-color: #000A35;

  background-color: #e1f0fd;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
  }

  font-size: 62.5%;
  scroll-behavior: smooth;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100vw;
  padding: 2rem 0rem;
  margin: 0 auto;

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
      max-width: 100vw;
    }

    /* Small devices (small tablets and large phones, 600px and up) */
    media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
      max-width: 100vw;
    }

    /* Medium devices (tablets, 960px and up) */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
      max-width: 100vw;
      padding: 2rem 0;
    }

    /* Large devices (desktops, 1280px and up) */
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
      max-width: 80vw;
    }
`;

const Heading = styled.h1`
  padding: 1rem 0;
  font-size: 2.5rem;
  text-align: center;
  color: var(--primary);
`;

const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 60vh;
  max-height: 40rem;
  padding: 1rem 0;
  position: relative;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 60vw;
  height: 50vh;
  max-width: 25rem;
  max-height: 30rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    object-fit: cover;
  }
`;

const SliderControler = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .swiper-button-next,
  .swiper-button-prev {
    background: var(--arrow-bg-color);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    cursor: pointer;

    &::after {
      color: var(--arrow-color); /* Cor das setas */
      font-size: 1.8rem;
    }
  }
`;

const StyledPagination = styled.div`
  position: relative;
  width: 12rem !important;
  bottom: 1rem;

  .swiper-pagination-bullet {
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  }

  .swiper-pagination-bullet-active {
    background: var(--primary);
  }
`;

const SiaraTechImg = styled.img`
  height: 5rem;
  border-radius: 1rem;
  margin-right: 2rem;
`;

const marquee = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const DivAnimadoEvento = styled.div`
  overflow: hidden;
  width: 100vw;
  background-color: #e61c69;
  margin-top: 1rem;
`;

const MarqueeInner = styled.div`
  display: flex;
  animation: ${marquee} 15s linear infinite;
  width: 200%; /* Duplicado para permitir a continuidade */
  gap: 2rem;
`;

const Carrousel = () => {
  return (
    <CarrouselContainer>
      <Container>
        <Heading>Eventos</Heading>
        <SwiperContainer
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <StyledSwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
          </StyledSwiperSlide>
        </SwiperContainer>
        
        {/* Faixa animada com logos */}
        <DivAnimadoEvento>
          <MarqueeInner>
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            {/* Repetição para continuidade da animação */}
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
            <SiaraTechImg src={StsLogo} />
          </MarqueeInner>
        </DivAnimadoEvento>
      </Container>
    </CarrouselContainer>
  );
};

export default Carrousel;
