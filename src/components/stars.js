// swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Stars = ({ stars }) => {
    return (
        <Swiper
            className="stars_container"
            style={{
                width: "calc(100% - 100px)",
                height: "150px",
                paddingBottom: "40px",
                margin: "0 50px 0 50px"
            }}
            slidesPerView={8}
            spaceBetween={30}
            modules={[Navigation]}
            navigation
        >
            {
                stars.map(star =>
                    <SwiperSlide
                        className="star_box"
                        style={{
                            width: "150px",
                            height: "100%",
                            position: "relative"
                        }}
                    >
                        <div className="star_img"></div>
                        <div className="star_name">{star.name}</div>
                    </SwiperSlide>
                )
            }

            <style jsx>{`
                .star_img {
                    background-color: #111;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }

                .star_name {
                    font-size: 14px;
                    letter-spacing: .5px;
                    font-weight: 100;
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%, 0);
                    bottom: 10px;
                    color: #fff;
                    bottom: -38px;
                }
            `}</style>
        </Swiper>
    )
}

const getServerSideProps = (props) => {
    return {
        stars: props.stars
    }
}

export default Stars