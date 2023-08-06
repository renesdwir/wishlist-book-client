import styled from "styled-components";
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const CardListContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid black;
`;
export const Title = styled.p`
  font-size: 1.3rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  margin: 10px 0 20px 0;
`;
