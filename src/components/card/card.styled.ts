import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";

export const CardContainer = styled.div`
  background-color: white;
  box-shadow: 0px 4px 12px 1px rgba(71, 71, 71, 0.2);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  img {
    width: 30%;
    height: 100%;
    display: inline-block;
  }
`;
export const ContentCard = styled.div`
  flex: 1;
  background-color: white;
  padding: 0px 0 0px 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Author = styled.p`
  font-size: 0.9rem;
  color: rgb(71 85 105);
`;
export const Title = styled(LinesEllipsis)`
  color: rgb(15 23 42);
  font-weight: 700;
`;
export const Star = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  border: 1px solid #ec4899;
  background-color: white;
  position: relative;
  padding: 8px 5px;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;

  span:nth-child(1) {
    width: 450px;
    height: 50px;
    position: absolute;
    left: -7px;
    bottom: -55px;
    transition: all 250ms ease-in-out;
  }

  span:nth-child(2) {
    position: relative;
    text-align: left;
    transition: color 200ms ease-in-out;
  }

  &:hover span:nth-child(1) {
    transform: translateY(-40px);
  }

  &:hover span:nth-child(2) {
    color: white;
  }
`;
