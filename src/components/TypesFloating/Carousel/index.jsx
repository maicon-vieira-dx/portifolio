import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from './Carousel.module.scss'
import { IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";


export default function Carousel({List}) {
  return (
    <>
      <Swiper
        slidesPerView={window.innerWidth > 1024 ? 3 : 2}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
            bulletClass: style.pagination,
            bulletActiveClass: style.paginationActive
        }}
        navigation={{
          nextEl: `.${style.swiperButtonNext}`,
          prevEl: `.${style.swiperButtonPrev}`,
          disabledClass: `${style.buttonDisable}`
        }}
        modules={[Grid, Pagination, Navigation]}
        wrapperClass={style.wrapper}
        className={style.swiperCarousel}
        
      >
        {
            List.map((icon) => (
                <SwiperSlide key={icon} className={`shadow-md shadow-black hover:shadow-lg hover:shadow-black ${style.swiperSlide}`}>
                    <img src={icon} className="w-2/6 "/>
                </SwiperSlide>
            ))
        }
        <div className={style.swiperButtonNext}>
            <NavigateNext sx={{fontSize: '40px', color: "#000"}} />
        </div>,
        <div className={style.swiperButtonPrev}>
            <NavigateBefore sx={{fontSize: '40px', color: "#000"}} />
        </div>
      </Swiper>
    </>
  )
}
