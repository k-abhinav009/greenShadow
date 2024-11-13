import React, { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Slide, SliderCSS, SliderContent } from "./SliderComponents";
import Dots from "./Dots";
import "./slider.scss";

const getWidth = () => 500 ;
export default function Slider(props) {
  const { slides } = props;
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // Array with elem being the flexbox order of each slide.
  // Exemple with 3 slides [Slide 1, Slide 2, Slide 3] :
  // For a smooth transition when on Slide 1 we need to place them like [Slide 3, Slide 1, Slide 2]
  // To do that we create an order Array with value : [0,1,-1]
  // Each elem of the slides will take the elem from order with same index
  const slideOrder = slides.map((_slide, i) => {
    if (i <= Math.floor(slides.length / 2)) return i;
    return i - slides.length;
  });
  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    orders: slideOrder
  });
  // Var to block spamming next/prev slide
  const [isTransition, setTransition] = useState(false);
  const { activeSlide, translate, transition, orders } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
  });
  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const smooth = () => {
      transitionRef.current();
    };

    let isMounted = true;
    let interval = setInterval(play, props.autoPlay * 500);
    const transitionEnd = window.addEventListener("transitionend", () => {
      if (isMounted) {
        setTransition(false);
        smooth();
        clearInterval(interval);
        interval = setInterval(play, props.autoPlay * 500);
      }
    });
    return () => {
      clearInterval(interval);
      window.removeEventListener("transitionend", transitionEnd);
      isMounted = false;
    };
  }, [props.autoPlay]);
  useEffect(() => {
    if (transition === 0)
      setState(s => {
        return { ...s, transition: 0.45 };
      });
  }, [transition]);

  const nextSlide = () => {
    if (!isTransition) {
      setTransition(true);
      setState({
        ...state,
        translate: translate + getWidth(),
        activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
      });
    }
  };

  const prevSlide = () => {
    if (!isTransition) {
      setTransition(true);
      setState({
        ...state,
        translate: translate - getWidth(),
        activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
      });
    }
  };
  const dotsSlideJump = dotIndex => {
    if (!isTransition && dotIndex !== activeSlide) {
      setTransition(true);
      setState({
        ...state,
        translate: translate + getWidth() * orders[dotIndex],
        activeSlide: dotIndex
      });
    }
  };
  const smoothTransition = () => {
    let _orders = slideOrder;

    //To change position after transition end
    //Need just to offset each value to the right activeSlide number of times
    // Ex :
    // ActiveSlide=0, Slide displayed: [Slide3, slide1(active slide), slide2], order : [0,1,-1]
    // ActiveSlide=1, Slide displayed: [Slide1, slide2(active slide), slide3], order : [-1,0,1]
    // ActiveSlide=2, Slide displayed: [Slide2, slide3(active slide), slide1], order : [1,-1,0]
    for (let i = 0; i < activeSlide; i++) {
      _orders.unshift(_orders.pop());
    }

    setState({
      ...state,
      orders: _orders,
      transition: 0,
      translate: getWidth() * Math.floor((slides.length - 1)/2)
    });
  };
  return (
    <div className="carousel" {...handlers}>
      <SliderCSS>
        <SliderContent
          translation={translate}
          transition={transition}
          width={getWidth() * slides.length}
        >
          {slides.map((slide, i) => (
            <Slide key={i} width={getWidth()} order={orders[i]}>
              <img src={slide} alt={slide} style={{ width: 600 }} />
            </Slide>
          ))}
        </SliderContent>
        <Dots
          slides={slides}
          handleClick={dotsSlideJump}
          activeIndex={activeSlide}
        />
      </SliderCSS>

    </div>
  );
}
