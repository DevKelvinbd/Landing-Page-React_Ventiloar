import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const breakpoints = {
  xs: '320px',         // Extra small devices (mobile phones, less than 600px)
  sm: '598px',       // Small devices (small tablets and large phones, 600px and up)
  md: '960px',       // Medium devices (tablets, 960px and up)
  lg: '1200px',      // Large devices (desktops, 1280px and up)
  xl: '1920px'       // Extra large devices (large desktops and TVs, 1920px and up)
};

const DivSection8 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #E1F0FD;
  flex-direction: column;
  
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    
  }
  
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    
  }
`;

const DivForms = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Estilização do título
const Title = styled.h1`
  font-size: 3rem;
  color: #000A35;
  margin-bottom: 1rem;
`;

// Estilização do formulário
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
`;

// Estilização dos campos de input
const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 2px solid #000A35;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

// Estilização do textarea
const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 2px solid #000A35;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  
  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

// Estilização do botão de submit
const SubmitButton = styled(Input).attrs({ type: 'submit' })`
  background-color: #000A35;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  height: 3.2rem;
  width: 105%;

  &:hover {
    background-color: #62EAF9;
    color: #000A35; 
    border: none;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Section8 = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Verificar se as variáveis de ambiente estão sendo carregadas
    if (!import.meta.env.VITE_SERVICE_ID || !import.meta.env.VITE_TEMPLATE_ID || !import.meta.env.VITE_PUBLIC_KEY) {
      console.error('Variáveis de ambiente ausentes. Por favor, verifique seu arquivo .env.');
      return;
    }

    setIsSending(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      alert('Mensagem enviada com sucesso!');
      console.log(result.text);
    } catch (error) {
      alert('Falha ao enviar a mensagem. Por favor, tente novamente mais tarde.');
      console.error(error.text);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <DivSection8>
      <DivForms>
        <Title>Contato</Title>
        <Form className="cf" ref={form} onSubmit={sendEmail}>
          <Input type="text" placeholder="Nome" name="from_name" aria-label="Name" />
          <Input type="email" placeholder="Email" name="reply_to" aria-label="Email address" />
          <TextArea name="message" placeholder="Mensagem" rows="4" aria-label="Message" />
          <SubmitButton value="Enviar" disabled={isSending} />
        </Form>
      </DivForms>
    </DivSection8>
  );
};

export default Section8;