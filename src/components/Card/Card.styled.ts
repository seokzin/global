import styled from 'styled-components';

export const Layout = styled.section`
  border: 1px solid #aaaaaa;
  border-radius: 0.2rem;
  padding: 1rem;
  margin: 0.5rem 0;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 2rem;
`;

export const GapBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FlexBetweenBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 1rem;
  color: #888888;
  font-weight: 700;
`;
