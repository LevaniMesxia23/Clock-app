import styled from "styled-components";
import Header from "./components/Header";
import ClockSpace from "./components/ClockSpace";
import MoreLess from "./components/MoreLess";
import { GlobalStyle } from "./styles/GlobalStyles";
import MoreInformation from "./components/MoreInformation";
import React, { createContext, useContext, useState } from 'react';

export const ShowContext = createContext(null);

function App() {
  const [show, setShow] = useState(true);
  const contextValue = { show, setShow }
  return (
    <>
      <ShowContext.Provider value={contextValue}>
        <Container>
          <GlobalStyle />
          {show === false ? null : <Header />}
          <ClockSpace />
          <MoreLess />
          <MoreInformation />
        </Container>
      </ShowContext.Provider>
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
  background-size: cover;
  background-repeat: no-repeat;
`;



