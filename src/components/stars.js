// swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

// tools
import { useState, useEffect } from "react";

const Stars = ({ stars }) => {

    const [windowSize, setWindowSize] = useState({ width: undefined })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth })
        }

        handleResize()
        window.addEventListener("resize", handleResize)
    },[])

    const windowWidth = windowSize.width

    const windowWidthSize = (width) => {
        if (width >= 1536) {
            return { perview: 7, spaceBetween: 45, height: "150px" }
        } else if (width < 1536 && width >= 1200) {
            return { perview: 6, spaceBetween: 50, height: "180px" }
        } else if (width < 1200 && width >= 1100) {
            return { perview: 5, spaceBetween: 40, height: "150px" }
        } else if (width < 1100 && width >= 970) {
            return { perview: 5, spaceBetween: 45, height: "130px" }
        } else if (width < 970 && width >= 820) {
            return { perview: 4, spaceBetween: 20, height: "130px" }
        } else if (width < 820 && width >= 700) {
            return { perview: 4, spaceBetween: 25, height: "130px" }
        } else if (width < 700 && width >= 590) {
            return { perview: 3, spaceBetween: 20, height: "130px" }
        } else if (width < 590 && width >= 521) {
            return { perview: 2, spaceBetween: 110, height: "130px" }
        } else if (width < 521 && width >= 430) {
            return { perview: 2, spaceBetween: 40, height: "140px" }
        } else if (width < 430 && width >= 380) {
            return { perview: 2, spaceBetween: 20, height: "110px" }
        } else if (width < 380 && width >= 330) {
            return { perview: 1, spaceBetween: 10, height: "180px" }
        } else if (width < 330 && width >= 0) {
            return { perview: 1, spaceBetween: 10, height: "250px" }
        } else {
            return { perview: 10, spaceBetween: 10 }
        }
    }

    console.log(windowWidth);

    return (
        <Swiper 
            className="stars_container"
            style={{
                width: `${windowWidth <= 321 ? 'calc(100% - 50px)' : 'calc(100% - 200px)'}`,
                height: windowWidthSize(windowWidth).height,
                padding: `${windowWidth <= 321 ? '60px 0 40px 0' : '60px 60px 40px 60px'}`,
                margin: "0 auto 0 auto",
            }}
            slidesPerView={windowWidthSize(windowWidth).perview}
            spaceBetween={windowWidthSize(windowWidth).spaceBetween}
            modules={[Navigation]}
            navigation
        >
            <div className="stars_slider_title">بازیگران</div>
            {
                stars.map(star =>
                    <SwiperSlide
                        className="star_box"
                        style={{
                            width: "150px",
                            height: "100%",
                            position: "relative"
                        }}
                        key={star.id}
                    >
                        <div className="star_img"></div>
                        <div className="star_name">{star.name}</div>
                    </SwiperSlide>
                )
            }

            <style jsx>{`
                .stars_container {
                    width: 100%;
                    color: #fff;
                    width: 100%;
                    height: 200px;
                    padding-bottom: 30px;
                }

                .stars_slider_title {
                    font-size: 30px;
                    position: absolute;
                    top: -9px;
                    right: 0;
                    letter-spacing: .5px;
                }

                .star_box {
                    width: 100px;
                    height: 100px;
                    position: relative;
                }

                .star_img {
                    background-color: #111;
                    width: 100%;
                    height: 100%;
                    border-radius: 20px;
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
                    width: 100%;
                    text-align: center;
                }

                @media (max-width: 770px) {
                    .star_name {
                        font-size: 12px;
                        bottom: -33px;
                    }
                }

                @media (max-width: 376px) {
                    .star_name {
                        font-size: 11px;
                        bottom: -30px;
                    }
                }

                @media (max-width: 321px) {
                    .star_name {
                        font-size: 16px;
                        bottom: -45px;
                        letter-spacing: 0;
                    }
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