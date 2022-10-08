import styled from 'styled-components';

export const Layout = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#0099FF33' : '#ffffff')};
  border: 1px solid ${({ active }) => (active ? '#0099FF' : '#aaaaaa')};
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
`;

export const Label = styled.p<{ active: boolean }>`
  color: ${({ active }) => (active ? '#0099FF' : '#aaaaaa')};
  font-size: 0.9rem;
`;
