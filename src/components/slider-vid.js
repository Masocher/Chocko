// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

// tools
import Link from "next/link";
import { useState, useEffect } from "react";

const SliderVid = ({ title, information, itemName }) => {

    const [windowSize, setWindowSize] = useState({ width: undefined })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth })
        }

        handleResize()
        window.addEventListener("resize", handleResize)
    }, [])

    const windowWidth = windowSize.width

    const windowWidthSize = (width) => {
        if (width >= 1536) {
            return { perview: 7, spaceBetween: 10, height: "280px" }
        } else if (width < 1536 && width >= 1200) {
            return { perview: 6, spaceBetween: 10, height: "280px" }
        } else if (width < 1200 && width >= 1100) {
            return { perview: 5, spaceBetween: 40, height: "280px" }
        } else if (width < 1100 && width >= 970) {
            return { perview: 5, spaceBetween: 10, height: "280px" }
        } else if (width < 970 && width >= 820) {
            return { perview: 4, spaceBetween: 20, height: "280px" }
        } else if (width < 820 && width >= 700) {
            return { perview: 3, spaceBetween: 50, height: "280px" }
        } else if (width < 700 && width >= 590) {
            return { perview: 3, spaceBetween: 20, height: "280px" }
        } else if (width < 590 && width >= 430) {
            return { perview: 2, spaceBetween: 50, height: "280px" }
        } else if (width < 430 && width >= 380) {
            return { perview: 2, spaceBetween: 10, height: "280px" }
        } else if (width < 380 && width >= 330) {
            return { perview: 2, spaceBetween: 10, height: "230px" }
        } else if (width < 330 && width >= 0) {
            return { perview: 2, spaceBetween: 5, height: "220px" }
        } else {
            return { perview: 10, spaceBetween: 10 }
        }
    }

    return (
        <div className="slider_box">
            <div className="slider_title">{title} <Link href={`/filmsAndSerialsPages/${itemName}`} style={{textDecoration: 'none', display: 'flex'}}><div className="show_more_btn">مشاهده بیشتر</div> <span className="show_more_icon"><FontAwesomeIcon icon={faCaretLeft} /></span></Link></div>

            <Swiper
                style={{
                    color: "#fff",
                    width: "100%",
                    height: windowWidthSize(windowWidth).height,
                    paddingBottom: "30px",
                }}
                slidesPerView={windowWidthSize(windowWidth).perview}
                spaceBetween={windowWidthSize(windowWidth).spaceBetween}
            >
                {
                    information.map(inf =>
                        <SwiperSlide key={inf.id} style={{ width: "180px", height: "100%" }}>
                            <Link href="/[itemCategory]/[itemId]" as={`/${inf.categoryNumber}/${inf.id}`}>
                                <div className="slide_content">
                                    <div className="slide_title">{inf.category}</div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                }
            </Swiper>

            <style jsx>{`
                .slider_box {
                    direction: rtl;
                    width: 95%;
                    margin: 60px auto;
                }

                .slide_content {
                    background-color: #222;
                    border-radius: 10px;
                    color: #fff;
                    font-size: 22px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    width: 100%;
                    height: 100%;
                }

                .slider_title {
                    color: #fff;
                    font-size: 24px;
                    font-weight: 100;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    padding: 0 20px;
                }

                .show_more_btn {
                    color: #999;
                    font-size: 14px;
                    display: inline;
                    transition: .2s;
                    cursor: pointer;
                }
                .show_more_btn:hover {
                    color: #ff9000;
                }

                .show_more_icon {
                    background-color: #ff9000;
                    color: #000;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    font-size: 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                }

                .slide_title {
                    position: absolute;
                    bottom: -35px;
                    left: 5px;
                    font-weight: 100;
                    font-size: 16px;
                    letter-spacing: .5px;
                }
            `}</style>
        </div>
    )
}

export const getServerSideProps = (props) => {
    return {
        data: {
            title: props.title,
            information: props.information,
            itemName: props.itemName
        }
    }
}

export default SliderVid