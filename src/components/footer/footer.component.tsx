import styled from "styled-components";

const StyledFooter = styled.div`
  text-align: center;
  padding: 5px 0;
`;
const Footer = () => {
  return (
    <>
      <StyledFooter>
        <small>&copy; Copyright 2023 renesdwir. All Rights Reserved</small>
      </StyledFooter>
    </>
  );
};

export default Footer;
