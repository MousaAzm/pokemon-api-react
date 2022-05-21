import { Navbar } from "./components/Navigation/Navbar";
import { Routes } from "./routes/Routes";
import { GlobalStyles } from "./assets/GlobalStyles";
import styled from "styled-components";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Routes>
          <Navbar />
        </Routes>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height:100%;
`;
