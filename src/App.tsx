import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./routes/navigation/navigation.component";
import Homepage from "./routes/homepage/homepage.component";
import WishlistBook from "./routes/wishlistbook/wishlistbook.component";
import styled from "styled-components";
import Footer from "./components/footer/footer.component";

const Container = styled.div`
  background-color: white;
  max-width: 1280px;
  min-height: 100vh;
  margin: auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 640px) {
    padding: 0 10px;
  }
`;

function App() {
  return (
    <Container>
      <div>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Homepage />} />
            <Route path="wishlistbook" element={<WishlistBook />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
