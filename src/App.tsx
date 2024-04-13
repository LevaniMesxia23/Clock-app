import styled from "styled-components";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyles";
import ClockSpace from "./components/ClockSpace";

function App() {
  return (
    <>
      <Container>
        <GlobalStyle />
        <Header />
        <ClockSpace />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  /* width: 100vw; */
  height: 100vh;
  padding: 2rem 1.6rem 2.5rem;

  background-image: url(../starter-code/assets/mobile/bg-image-nighttime.jpg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
