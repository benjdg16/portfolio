import React, {
  forwardRef,
  RefObject,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaSchool, FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import "swiper/css/scrollbar";

import SwiperCore, {
  A11y,
  Mousewheel,
  Pagination,
  Scrollbar,
  EffectFade,
  FreeMode,
  Navigation,
} from "swiper";

import Card from "../../components/Card";

import "./Experience.css";

type TProps = {
  isExpTLVisible: boolean;
};
export type TExperienceHandler = {
  experienceRef: RefObject<HTMLElement>;
};

const Experience = forwardRef<TExperienceHandler, TProps>((props, ref) => {
  const { isExpTLVisible } = props;

  const experienceRef = useRef<HTMLElement>(null);
  const experienceCardContainerRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    experienceRef,
  }));

  React.useEffect(() => {
    // SwiperCore.use([EffectCoverflow, Pagination]);

    console.log(isExpTLVisible);
  }, [isExpTLVisible]);

  return (
    <section id="experience" ref={experienceRef}>
      <div className="experience-container">
        <div className="experience-title">
          <h1>experience</h1>
        </div>
        {/* <Card /> */}
        <div className="swiper-flex-container">
          <div className="swiper-container">
            <Swiper
              className="experience-swiper"
              // modules={[EffectCoverflow]}
              modules={[
                A11y,
                // EffectCoverflow,
                Mousewheel,
                Pagination,
                // Scrollbar,
                // EffectFade,
                FreeMode,
              ]}
              // effect="fade"
              // effect="fade"
              // freeMode={true}
              pagination={{
                clickable: true,
              }}
              // scrollbar={{ draggable: true }}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              spaceBetween={0}
              // coverflowEffect={{
              //   depth: 10,
              //   modifier: 1,
              //   rotate: 50,
              //   scale: 1,
              //   stretch: 0,
              // }}
              // navigation={{
              //   enabled: true,
              // }}
              loop={true}
              // autoHeight={true}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;
