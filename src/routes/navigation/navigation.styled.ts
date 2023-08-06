import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
export const LinkContaienr = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: 640px) {
    gap: 10px;
  }
`;
export const StyledSpan = styled.span`
  color: #ec4899;
`;
export const StyledLink = styled(Link).attrs(
  (props: { isactive: string }) => props
)`
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
  ${(props) =>
    props.isactive === "true" &&
    `
    color: rgb(190 24 93);
    transform: translateY(-2px);
  `}

  &:hover {
    color: #ec4899;
    transform: translateY(-2px);

    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: rgb(190 24 93);
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.3s ease;
    }
  }

  &:hover::before {
    transform: scaleX(1);
  }
  ${(props) =>
    props.isactive === "true" &&
    `
    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ec4899;
      transform: scaleX(1); 
      transform-origin: center;
    }
  `}
`;
