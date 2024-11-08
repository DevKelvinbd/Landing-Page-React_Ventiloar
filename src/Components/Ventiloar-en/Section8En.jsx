import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { forwardRef } from 'react';

const breakpoints = {
  xs: '320px',
  sm: '598px',
  md: '960px',
  lg: '1200px',
  xl: '1920px'
};
 
const DivSection8 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #E1F0FD;
  flex-direction: column;
`;

const DivForms = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #000A35;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
`;

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
    background-color: #000A35;
    cursor: not-allowed;
    color: #ffffff;
  }
`;

const Section8 = forwardRef((props, ref) => {

  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.name.trim() &&
      emailRegex.test(formData.email) &&
      formData.message.length >= 10
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

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
    }
  };

  return (
    <DivSection8 ref={ref}>
      <DivForms>
        <Title>Contact</Title>
        <Form ref={form} onSubmit={sendEmail}>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            aria-label="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            aria-label="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          <TextArea
            name="message"
            placeholder="Message"
            rows="4"
            aria-label="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <SubmitButton
            value="Send message"
            disabled={isSending || !isFormValid()}
          />
        </Form>
      </DivForms>
    </DivSection8>
  );
});

export default Section8;
