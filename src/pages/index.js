// components
import Header from '../components/header'
import FilterBox from '../components/filter-box';

// redux
import { useSelector } from 'react-redux';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

export default function Home() {

  const slides = useSelector(rootReducer => rootReducer.reducer_9)

  return (
    <div className="home_container">
      <Header />

      <Swiper
        style={{ width: "95%", height: "500px", margin: "40px auto" }}
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
          slides.map(slide =>
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
    </div>
  )
}
