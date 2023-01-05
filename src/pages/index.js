// components
import Header from "../components/header"
import FilterBox from "../components/filter-box";
import SliderVid from "../components/slider-vid";
import Footer from "../components/footer";

// redux
import { useSelector } from "react-redux";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

export default function Home() {

  const topSliderSlides = useSelector(rootReducer => rootReducer.reducer_9)
  const filmsAndSerialsInformation = useSelector(rootReducer => rootReducer.reducer_11)

  return (
    <div className="home_container">
      <Header />

      <Swiper
        style={{ width: "95%", height: "500px", borderRadius: "10px", margin: "40px auto" }}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
      >
        {
          topSliderSlides.map(slide =>
            <SwiperSlide
              style={{
                backgroundColor: "#222",
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                color: "#fff",
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              key={slide.id}
            >Slide - {slide.title}</SwiperSlide>
          )
        }
      </Swiper>

      <FilterBox />

      <SliderVid title="سریال ها" information={filmsAndSerialsInformation[0]} />
      <SliderVid title="سریال کره ای" information={filmsAndSerialsInformation[1]} />
      <SliderVid title="فیلم ها" information={filmsAndSerialsInformation[2]} />
      <SliderVid title="فیلم هندی" information={filmsAndSerialsInformation[3]} />
      <SliderVid title="انیمه ها" information={filmsAndSerialsInformation[4]} />
      <SliderVid title="انیمیشن ها" information={filmsAndSerialsInformation[5]} />

      <Footer />
    </div>
  )
}
