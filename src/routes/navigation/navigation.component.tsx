import { Outlet, useLocation } from "react-router-dom";
import {
  LinkContaienr,
  LogoContainer,
  StyledLink,
  NavigationContainer,
  StyledSpan,
} from "./navigation.styled";
import CrwnLogo from "../../assets/crown.svg";

const Navigation = () => {
  const location = useLocation();
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={CrwnLogo} alt="Logo" className="logo" />
          <h2>
            Bo<StyledSpan>OK</StyledSpan> Store
          </h2>
        </LogoContainer>
        <LinkContaienr>
          <StyledLink to="/" isactive={(location.pathname === "/").toString()}>
            Home
          </StyledLink>
          <StyledLink
            to="/wishlistbook"
            isactive={(location.pathname === "/wishlistbook").toString()}
          >
            Wishlist
          </StyledLink>
        </LinkContaienr>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
