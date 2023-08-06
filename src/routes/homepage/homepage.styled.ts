import styled from "styled-components";
export const Input = styled.input`
  font-size: 1rem;
  padding: 10px 10px;
  width: 50%;
  outline: none;
  border-radius: 10px 0 0 10px;
  border: 1px solid black;
  border-right: none;
  position: relative;
`;
export const HompageContainer = styled.div`
  margin: 20px 0px;
`;
export const Button = styled.button`
  background-color: #ec4899;
  font-size: 1rem;
  padding: 10px 20px;
  border: 1px solid black;
  border-left: none;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: #db2777;
  }
`;
