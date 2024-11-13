/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? 'black' : 'white'};
    `}
  />
)

const Dots = ({ slides, activeSlide ,handleClick}) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
       
       <Dot
       key={i}
       active={activeSlide === i}
       onClick={() => {
         handleClick(i);
       }}
     />
    ))}
  </div>
)

export default Dots
