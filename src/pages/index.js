// components
import Header from "../components/header"
import FilterBox from "../components/filter-box";
import SliderVid from "../components/slider-vid";
import Footer from "../components/footer";

// react-redux
import { useSelector, useDispatch } from "react-redux";
import { onStart } from "../redux/actions";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

// tools
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {

  const topSliderSlides = useSelector(rootReducer => rootReducer.reducer_9)
  const filmsAndSerialsInformation = useSelector(rootReducer => rootReducer.reducer_11)

  const dispatch = useDispatch()

  const router = useRouter();

  useEffect(() => {
    dispatch(onStart())
  }, [router.asPath]);

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

      <SliderVid itemName='serials' title="سریال ها" information={filmsAndSerialsInformation[0]} />
      <SliderVid itemName='korean_serials' title="سریال کره ای" information={filmsAndSerialsInformation[1]} />
      <SliderVid itemName='films' title="فیلم ها" information={filmsAndSerialsInformation[2]} />
      <SliderVid itemName='indian_films' title="فیلم هندی" information={filmsAndSerialsInformation[3]} />
      <SliderVid itemName='animes' title="انیمه ها" information={filmsAndSerialsInformation[4]} />
      <SliderVid itemName='animations' title="انیمیشن ها" information={filmsAndSerialsInformation[5]} />

      <Footer />
    </div>
  )
}
