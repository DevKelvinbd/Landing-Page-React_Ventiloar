import styled from "styled-components"
import Carrousel from "../Carrousel/Carrousel";
// Fotos

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

const DivSection7 = styled.div`
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

 const Heading = styled.h1`
//  padding: 1rem 0;
  margin: 0;
 font-size: 2.5rem;
 text-align: center;
 color: #000A35;
`

const Section7En = () => {
  return (
    <DivSection7>
       <Heading>Events</Heading>
       <Carrousel />
    </DivSection7>

  )
}

export default Section7En