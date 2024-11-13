import React from "react";
import "./styles.scss";
import Slider from "./Slider";
import room1 from './roomimages/room1.jpg'
import room2 from './roomimages/room2.jpg'
import room3 from './roomimages/room3.jpg'
import room4 from './roomimages/room4.jpg'
import room5 from './roomimages/room5.jpg'
// Logics :  https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4

export default function App() {
  const images = [
    room1,
    room2,
    room3,
    room4,
    room5,

  ];
  return (
    <div className="App">
      {images.length >= 4 && <Slider slides={images} autoPlay={5} />}
    </div>
  );
}
