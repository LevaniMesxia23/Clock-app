import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ShowContext } from "../App";



export default function MoreLess() {
  const {show, setShow} = useContext(ShowContext)
  console.log(show)
  const handleClick = () => {
  setShow(!show)
  
  };
  return (
    <Container onClick={handleClick}>
      <span>more</span>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle cx="16" cy="16" r="16" fill="#303030" />
          <path
            d="M11.2 13.6001L16 18.4001L20.8 13.6001"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 7.1875rem;
  height: 2.4375rem;
  flex-shrink: 0;
  background-color: white;
  border-radius: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  span {
    color: #000;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    opacity: 0.5;
    line-height: 116.667%;
    letter-spacing: 0.23438rem;
    text-transform: uppercase;
    margin-right: 0.9em;
  }
  svg {
    margin-top: 0.2rem;
    margin-right: -1rem;
  }
`;
