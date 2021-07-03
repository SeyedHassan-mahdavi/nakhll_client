import { Fragment } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper's Controller component
SwiperCore.use([Navigation]);

const CustomSlider = ({ data = [], ...otherSwiperProps }) => {
  return (
    <Fragment>
      <div style={{ padding: "5.5px 8.5px 17px 0", borderRadius: "2.5px", background: "#ffffff" }}>
        {/* <section style={{ display: "flex", margin: " 2rem", alignItems: "center" }}> */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ padding: "10px" }}>
            <span>برنج شالیزار</span>
        </div>
        <a href="/" style={{ padding: "10px" }}>
          <span>نمایش همه محصولات</span>
          <i className="fa fa-angle-left px-1"></i>

        </a>

      </div>
      <div>
        <Swiper
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          index={0}
          navigation
          allowSlideNext={true}
          {...otherSwiperProps}
        >
          {data?.map((slide, index) => (
            <SwiperSlide key={`slide-${index}`}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* </section> */}

      </div>

    </Fragment >
  );
};

export default CustomSlider;
