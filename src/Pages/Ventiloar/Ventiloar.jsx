import React from 'react'
import { useRef } from 'react';
import Section1 from '../../Components/Ventiloar-ptbr/Section1'
import Section2 from '../../Components/Ventiloar-ptbr/Section2'
import Section3 from '../../Components/Ventiloar-ptbr/Section3'
import Section4 from '../../Components/Ventiloar-ptbr/Section4'
import Section5 from '../../Components/Ventiloar-ptbr/Section5'
import Section6 from '../../Components/Ventiloar-ptbr/Section6'
import Section7 from '../../Components/Ventiloar-ptbr/Section7'
import Section8 from '../../Components/Ventiloar-ptbr/Section8'

const Ventiloar = () => {

  const section8Ref = useRef(null); // Cria uma referência para Section8

  const scrollToSection8 = () => {
    section8Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
        <Section1 scrollToSection8={scrollToSection8} />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 ref={section8Ref} />
    </>
  )
}

export default Ventiloar