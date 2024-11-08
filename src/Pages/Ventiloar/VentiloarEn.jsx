import React from 'react'
import { useRef } from 'react';
import Section1En from '../../Components/Ventiloar-en/Section1En'
import Section2En from '../../Components/Ventiloar-en/Section2En'
import Section3En from '../../Components/Ventiloar-en/Section3En'
import Section4En from '../../Components/Ventiloar-en/Section4En'
import Section5En from '../../Components/Ventiloar-en/Section5En'
import Section6En from '../../Components/Ventiloar-en/Section6En'
import Section7En from '../../Components/Ventiloar-en/Section7En'
import Section8En from '../../Components/Ventiloar-en/Section8En'

const Ventiloar = () => {

  const section8Ref = useRef(null); // Cria uma referência para Section8

  const scrollToSection8 = () => {
    section8Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
        <Section1En scrollToSection8={scrollToSection8} />
        <Section2En />
        <Section3En />
        <Section4En />
        <Section5En />
        <Section6En />
        <Section7En />
        <Section8En ref={section8Ref} />
    </>
  )
}

export default Ventiloar