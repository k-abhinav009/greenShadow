import React from "react";
import styled from "styled-components";

const Dot = styled.span`
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${props => (props.active ? "black" : "white")};
  border: 1px solid black;
`;

const DotsStyle = styled.div`
  position: absolute;
  bottom: 1px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Dots({ slides, activeIndex, handleClick }) {
  return (
    <DotsStyle>
      {slides.map((_slide, i) => (
        <Dot
          key={i}
          active={activeIndex === i}
          onClick={() => {
            handleClick(i);
          }}
        />
      ))}
    </DotsStyle>
  );
}
