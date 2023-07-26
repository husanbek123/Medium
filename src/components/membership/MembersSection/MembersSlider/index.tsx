import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

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
  };

  return (
    <Slider {...settings}>
      {members.map((member) => (
        <Slide {...member} />
      ))}
    </Slider>
  );
}
