import React, { Component } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Slider extends Component {
  render() {
    const settings = {
      slidesPerView: 1,
      navigation: true,
      pagination: {clickable: true },
      scrollbar: { draggable: true },
    }
    return (
      <Swiper {...settings}>
        <SwiperSlide>lorem<br></br> dsadsad</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    );
  }
}

export default Slider;