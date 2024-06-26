import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ShowContext } from "../App";

export default function Header() {

  const {show} = useContext(ShowContext)
  console.log(show)
  return (
    <Container>
      <div className="quote-side">
        <span>
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </span>
        <p>Ada Lovelace</p>
      </div>
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="black"
        >
          <path
            opacity="0.5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.0001 4.76451L10.6884 6.97743C10.6287 7.03696 10.6108 7.1266 10.643 7.20451C10.6752 7.28242 10.7512 7.33324 10.8355 7.33326H17.3334V1.10409C17.3329 1.02002 17.2819 0.944497 17.2041 0.912613C17.1263 0.880729 17.037 0.898733 16.9776 0.958261L14.8047 3.03701C12.7334 1.01244 9.75837 0.21065 6.95026 0.920223C4.14215 1.6298 1.90511 3.74861 1.04425 6.51409L3.43091 7.25993C4.02905 5.33914 5.57597 3.86294 7.52263 3.3553C9.4693 2.84765 11.5401 3.38042 13.0001 4.76451ZM7.38037 10.7951C7.3481 10.7173 7.27219 10.6666 7.188 10.6666H0.666748V16.8153C0.666766 16.8996 0.717588 16.9756 0.795498 17.0078C0.873407 17.04 0.963046 17.0221 1.02258 16.9624L3.17091 14.9408C5.2389 16.977 8.21826 17.7888 11.0334 17.0833C13.8485 16.3777 16.0927 14.2566 16.9559 11.4858L14.5692 10.7399C13.9703 12.6626 12.4209 14.1396 10.4718 14.6459C8.52265 15.1522 6.45028 14.6159 4.99133 13.2278L7.3355 11.022C7.39494 10.9624 7.41265 10.8728 7.38037 10.7951Z"
            fill="black"
          />
        </svg>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;

  .quote-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: #fff;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 183.333%;

    p {
      color: #fff;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 183.333%;
    }
  }
`;
