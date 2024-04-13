import React from "react";
import styled from "styled-components";

export default function ClockSpace() {
  return (
    <Container>
      <div className="header-div">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
        >
          <path
            d="M22.1568 17.3664C21.9424 17.1024 21.5824 17.0048 21.2656 17.1184C20.3776 17.4368 19.4144 17.6 18.4 17.6C13.5472 17.6 9.6 13.6512 9.6 8.8C9.6 5.88 11.0416 3.1616 13.456 1.5264C13.7296 1.3408 13.8608 1.0064 13.7872 0.6848C13.7136 0.3632 13.4496 0.12 13.1216 0.072C12.7472 0.0176 12.3744 0 12 0C5.3824 0 0 5.3824 0 12C0 18.6176 5.3824 24 12 24C16.2 24 20.0208 21.8656 22.2176 18.2912C22.3952 18.0016 22.3696 17.632 22.1568 17.3664Z"
            fill="white"
          />
        </svg>
        <span>GOOD EVENING</span>
      </div>
      <div className="clock-div">
        <span className="time">23:14</span>
        <span className="bst">BST</span>
      </div>
      <div>
        <span className="location">IN LONDON, UK</span>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 14.9rem;

  .header-div {
    display: flex;
    align-items: center;
    gap: 1.04rem;

    span {
      color: #fff;
      font-size: 0.9375rem;
      font-style: normal;
      font-weight: 400;
      line-height: 166.667%;
      letter-spacing: 0.1875rem;
      text-transform: uppercase;
    }
  }

  .clock-div {
    .time {
      color: #fff;
      font-size: 6.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: -0.15625rem;
      margin-right: 1rem;
    }
    .bst {
      color: #fff;
      font-size: 0.9375rem;
      font-style: normal;
      font-weight: 300;
      line-height: 186.667%;
      text-transform: uppercase;
    }
  }

  .location{
    color: #FFF;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height:  186.667%;
    letter-spacing: 0.1875rem;
    text-transform: uppercase;
  }
`;
