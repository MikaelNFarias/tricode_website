import styled from 'styled-components';

export const HomeBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EAEAEA;
  margin: 0;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Logo = styled.img`
  width: 150px; 
  height: auto;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  color: #1E3A8A; /* Azul escuro */
  font-weight: bold;
`;
