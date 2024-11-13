import styled from "styled-components";

export const Slide = styled.div`
  height: 50%;
  width: ${props => (props.width ? `${props.width}px` : "50%")};
  order: ${props => (props.order ? props.order : 0)};
`;

export const SliderCSS = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 0;
  margin: 0 auto;
  overflow: hidden;
`;

export const SliderContent = styled.div`
  transform: translateX(-${props => props.translation}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`;
