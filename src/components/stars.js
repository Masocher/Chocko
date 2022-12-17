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
            return { perview: 7, spaceBetween: 60, height: "150px" }
        } else if (width < 1536 && width >= 1200) {
            return { perview: 6, spaceBetween: 50, height: "180px" }
        } else if (width < 1200 && width >= 1100) {
            return { perview: 5, spaceBetween: 40, height: "150px" }
        } else if (width < 1100 && width >= 970) {
            return { perview: 5, spaceBetween: 40, height: "150px" }
        } else if (width < 970 && width >= 820) {
            return { perview: 4, spaceBetween: 20, height: "150px" }
        } else if (width < 820 && width >= 700) {
            return { perview: 4, spaceBetween: 25, height: "150px" }
        } else if (width < 700 && width >= 590) {
            return { perview: 3, spaceBetween: 20, height: "150px" }
        } else if (width < 590 && width >= 430) {
            return { perview: 2, spaceBetween: 110, height: "150px" }
        } else if (width < 430 && width >= 380) {
            return { perview: 2, spaceBetween: 20, height: "150px" }
        } else if (width < 380 && width >= 330) {
            return { perview: 2, spaceBetween: 30, height: "120px" }
        } else if (width < 330 && width >= 0) {
            return { perview: 2, spaceBetween: 30, height: "95px" }
        } else {
            return { perview: 10, spaceBetween: 10 }
        }
    }

    return (
        <Swiper 
            className="stars_container"
            style={{
                width: "calc(100% - 100px)",
                height: windowWidthSize(windowWidth).height,
                paddingBottom: "40px",
                margin: "0 50px 0 50px"
            }}
            slidesPerView={windowWidthSize(windowWidth).perview}
            spaceBetween={windowWidthSize(windowWidth).spaceBetween}
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
                .stars_container {
                    width: 100%;
                    color: #fff;
                    width: 100%;
                    height: 200px;
                    padding-bottom: 30px;
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

                @media (max-width: 376px) {
                    .star_name {
                        font-size: 9px;
                        bottom: -25px;
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