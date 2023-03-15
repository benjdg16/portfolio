import { forwardRef, RefObject, useRef, useImperativeHandle } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Mousewheel,
  Pagination,
  FreeMode,
  Navigation,
} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/Card";
import { cardData } from "../../data";
import "../../styles/swiper-custom.css";
import "./Experience.css";

export type TExperienceHandler = {
  experienceRef: RefObject<HTMLElement>;
};

const Experience = forwardRef<TExperienceHandler, {}>((props, ref) => {
  const experienceRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({
    experienceRef,
  }));

  return (
    <section id="experience" ref={experienceRef}>
      <div className="experience-container">
        <div className="experience-text">
          <div className="experience-title">
            <h1>experience</h1>
          </div>
          <div className="experience-subtitle">
            <p>
              My work and experience are done in-house and therefore cannot be
              shared publicly.
            </p>
            <p>However, I provided descriptions on some of them.</p>
          </div>
        </div>
        <div className="swiper-flex-container">
          <div className="swiper-container">
            <Swiper
              className="experience-swiper"
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                },
              }}
              centeredSlides={true}
              grabCursor={true}
              loop={true}
              modules={[
                A11y,
                Autoplay,
                Mousewheel,
                Pagination,
                FreeMode,
                Navigation,
              ]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
              }}
              slidesPerView={1}
              spaceBetween={0}
            >
              {cardData.map((data, index) => {
                return (
                  <SwiperSlide key={`swiper-slide-${index}`}>
                    <Card {...data} />
                  </SwiperSlide>
                );
              })}
              <div className="slider-buttons">
                <button className="swiper-button-prev">
                  <FontAwesomeIcon icon={faCircleChevronLeft} />
                </button>
                <button className="swiper-button-next">
                  <FontAwesomeIcon icon={faCircleChevronRight} />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;
