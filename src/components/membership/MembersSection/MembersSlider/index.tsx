import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import SliderButton from "./SliderButton";

import {
  IconArrowLeft,
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

interface MemberSlide {
  author: string;
  text: string;
  img: string;
}

type Props = {
  members: MemberSlide[];
};

export default function MembersSlider({ members }: Props) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SliderButton side="right">
        {<IconArrowNarrowRight size={32} />}
      </SliderButton>
    ),
    prevArrow: (
      <SliderButton side="left">
        {<IconArrowNarrowLeft size={32} />}
      </SliderButton>
    ),
  };

  return (
    <Slider {...settings}>
      {members.map((member , index) => (
        <Slide key={index} {...member} />
      ))}
    </Slider>
  );
}
