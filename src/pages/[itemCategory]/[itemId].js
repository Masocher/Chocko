// tools
import Router from "next/router"

// redux
import { useSelector, useDispatch } from "react-redux"
import { openDownloadBox } from "../../redux/actions"

// components
import Header from "../../components/header"
import Footer from "../../components/footer"
import Stars from "../../components/stars"
import DownloadBox from "../../components/download-box"
import DownloadPopUpBox from "../../components/download-pop-up-box"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark, faHeart, faClosedCaptioning, faUserPlus, faLocationDot, faCalendarDays, faRotate, faStar } from "@fortawesome/free-solid-svg-icons"

const ItemPage = () => {
    const dispatch = useDispatch()

    const router = Router

    const filmsAndSerialsInformation = useSelector(rootReducer => rootReducer.reducer_11)

    const itemInformation = filmsAndSerialsInformation[router.query.itemCategory][router.query.itemId]

    return (
        <div className="serial_box_container" style={{ color: "#fff" }}>
            <Header />

            <div className="serial_box">
                <div className="right_side">
                    <div className="serial_cover"></div>

                    <div className="right_side_information">
                        <div className="serial_title_2">{itemInformation.category} - {router.query.itemId}</div>

                        <div className="meta_box">
                            <div className="icon_box blue_box"><FontAwesomeIcon icon={faBookmark} /></div>
                            <div className="icon_box red_box"><FontAwesomeIcon icon={faHeart} /></div>
                            <div className="manufacturing_country">{itemInformation.manufacturingCountry}</div>
                        </div>

                        <div className="serial_title">{itemInformation.category} - {router.query.itemId}</div>

                        <div className="genres">
                            <div className="genres_title">ژانر ها :</div>

                            <div className="genres_boxes">
                                {
                                    itemInformation.genres.map(genre =>
                                        <div className="genre" key={genre.id}>{genre.title}</div>
                                    )
                                }
                            </div>
                        </div>

                        <div className="attributes">
                            <div className="attribute">
                                <div className="attribute_icon"><FontAwesomeIcon icon={faClosedCaptioning} /></div>
                                <div className="attribute_title">زیرنویس <span>دارد</span></div>
                            </div>

                            <div className="attribute">
                                <div className="attribute_icon"><FontAwesomeIcon icon={faUserPlus} /></div>
                                <div className="attribute_title">رده سنی <span>بالای 14 سال</span></div>
                            </div>

                            <div className="attribute">
                                <div className="attribute_icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div className="attribute_title">کشور <span>{itemInformation.manufacturingCountry}</span></div>
                            </div>

                            <div className="attribute">
                                <div className="attribute_icon"><FontAwesomeIcon icon={faCalendarDays} /></div>
                                <div className="attribute_title">سال تولید <span>2022</span></div>
                            </div>

                            <div className="attribute">
                                <div className="attribute_icon"><FontAwesomeIcon icon={faRotate} /></div>
                                <div className="attribute_title">وضعیت <span>اتمام پخش</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="left_side">
                    <div className="left_side_title">
                        <div className="serial_score_votes">{itemInformation.votes} رای</div>
                        <div className="serial_score"><span>10 /</span> {itemInformation.score}</div>
                        <div className="serial_score_icon"><FontAwesomeIcon icon={faStar} /></div>
                    </div>

                    <div className="about_serial">
                        طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌ بندی برای پر کردن صفحه و ارائه اولیه شکل ظاهری استفاده میکند.
                    </div>

                    <div className="left_side_buttons">
                        <div className="left_side_btn download_btn" onClick={() => dispatch(openDownloadBox())}>دانلود</div>
                        <div className="left_side_btn play_btn">پخش آنلاین</div>
                        <div className="left_side_btn">مشاهده تریلر</div>
                    </div>
                </div>
            </div>

            <Stars stars={itemInformation.stars} />

            <DownloadBox />

            <DownloadPopUpBox />

            <Footer />

            <style jsx>{`
                .serial_box {
                    width: calc(100% - 100px);
                    direction: rtl;
                    margin: 100px 50px;
                    display: flex;
                    justify-content: space-between;
                }

                .right_side {
                    display: flex;
                    height: 100%;
                }

                .right_side_information {
                    height: 100%;
                }

                .serial_cover {
                    background-color: #222;
                    border-radius: 10px;
                    width: 275px;
                    height: 360px;
                    margin-left: 40px;
                }

                .meta_box {
                    display: flex;
                    align-items: end;
                    height: fit-content;
                    color: #999;
                    border: solid #222;
                    border-width: 0 0 1px 0;
                    padding: 0 0 12px 100px;
                }

                .icon_box {
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    background-color: #111;
                    width: 35px;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-left: 10px;
                    transition: .1s;
                }

                .blue_box:hover {
                    background-color: #ff9000;
                    color: #fff;
                }

                .red_box:hover {
                    background-color: red;
                    color: #fff;
                }

                .manufacturing_country {
                    font-size: 14px;
                    cursor: pointer;
                    transition: .2s;
                    background-color: #111;
                    padding: 6px 12px;
                    border-radius: 5px;
                    letter-spacing: .5px;
                    border: 1px solid #111;
                    margin-right: 10px;
                }
                .manufacturing_country:hover {
                    color: #ff9000;
                    border-color: #ff9000;
                }

                .serial_title, .serial_title_2 {
                    font-size: 30px;
                    color: #fff;
                    font-weight: 100;
                    margin: 50px 0;
                    border-right: 1px solid #ff9000;
                    padding-right: 20px;
                }

                .serial_title_2 {
                    width: 100%;
                    text-align: center;
                    margin: 30px 0;
                    display: none;
                    border: none;
                    padding: 0;
                    margin: 40px 0 30px 0;
                }

                .genres {
                    display: flex;
                    align-items: center;
                    margin-top: 30px;
                    border: solid #222;
                    border-width: 0 0 1px 0;
                    padding: 0 0 12px 5px;
                }

                .genres_title {
                    margin-left: 10px;
                    font-weight: 100;
                    font-size: 18px;
                    color: #fff;
                }

                .genres_boxes {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 160px;
                }

                .genre {
                    background-color: #111;
                    border: 1px solid #111;
                    padding: 4.5px 10px;
                    font-size: 12px;
                    color: #999;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: .2s;
                    font-weight: 100;
                }
                .genre:hover {
                    border-color: #ff9000;
                    color: #ff9000;
                }

                .attributes {
                    display: flex;
                    margin-top: 20px;
                }

                .attribute {
                    display: flex;
                    flex-direction: column;
                    background-color: #111;
                    align-items: center;
                    justify-content: center;
                    width: 100px;
                    height: 100px;
                    border: solid #000;
                    border-width: 0 0 0 4px;
                }

                .attribute_title {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 10px;
                    color: #999;
                }

                .attribute_title span {
                    font-size: 14px;
                    margin-top: 5px;
                    color: #999;
                }

                .attribute_icon {
                    font-size: 20px;
                    color: #ff9000;
                }

                .left_side {
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: center;
                    margin-top: 20px;
                }

                .left_side_title {
                    display: flex;
                    align-items: center;
                }

                .serial_score {
                    font-size: 50px;
                    color: #fff;
                    font-weight: 100;
                    display: flex;
                    align-items: center;
                }
                .serial_score span {
                    font-size: 20px;
                    margin: 2px 0 0 5px;
                }

                .serial_score_icon {
                    color: #ff9000;
                    font-size: 28px;
                    margin: 5px 10px 4px 0;
                }

                .serial_score_votes {
                    font-size: 12px;
                    background-color: #ff9000;
                    padding: 5px 10px;
                    border-radius: 5px;
                    margin: 0 0 2px 15px;
                    color: #000;
                }

                .about_serial {
                    font-size: 14px;
                    font-weight: 100;
                    width: 450px;
                    letter-spacing: .5px;
                    border: solid #222;
                    border-width: 1px 0 1px 0;
                    padding: 30px 0;
                    text-align: center;
                    margin-top: 10px;
                }

                .left_side_buttons {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    justify-content: center;
                    margin: 40px auto 0 auto;
                }

                .left_side_btn {
                    background-color: #c0c0c0;
                    color: #000;
                    padding: 12px 25px;
                    border-radius: 10px;
                    font-size: 14px;
                    font-weight: 100;
                    cursor: pointer;
                    margin: 0 5px;
                    border: 1px solid #c0c0c0;
                    transition: .2s;
                }
                .left_side_btn:hover {
                    background: none;
                    color: #c0c0c0;
                }

                .play_btn {
                    background-color: #ff9000;
                    color: #000;
                    border-color: #ff9000;
                }
                .play_btn:hover {
                    background: none;
                    color: #ff9000;
                }

                .download_btn {
                    display: none;
                }

                @media (max-width: 1390px) {
                    .serial_box {
                        width: fit-content;
                        flex-direction: column;
                        align-items: center;
                        margin: 100px auto;
                    }

                    .left_side {
                        margin-top: 50px;
                        width: 70%;
                    }

                    .about_serial {
                        width: 100%;
                    }

                    .download_btn {
                        display: block;
                    }

                    .left_side_btn {
                        padding: 11px 18px;
                        font-size: 13px;
                    }
                    
                    .play_btn {
                        background-color: #ff9000;
                        color: #000;
                        border-color: #ff9000;
                    }

                    .attribute {
                        width: 98px;
                    }
                }

                @media (max-width: 850px) {
                    .serial_box {
                        width: 100%;
                        margin-top: 50px;
                    }

                    .right_side {
                        flex-direction: column;
                        align-items: center;
                        height: fit-content;
                    }
    
                    .right_side_information {
                        height: 100%;
                    }

                    .serial_title {
                        display: none;
                    }

                    .serial_title_2 {
                        display: block;
                    }

                    .meta_box {
                        justify-content: center;
                        padding: 0 0 12px 0;
                        border: none;
                    }

                    .serial_cover {
                        margin-left: 0;
                    }

                    .genres {
                        justify-content: center;
                        margin-top: 5px;
                        border: none;
                        padding: 0 0 12px 0;
                    }
    
                    .genres_title {
                        display: none;
                    }
    
                    .genres_boxes {
                        width: 190px;
                    }
    
                    .genre {
                        padding: 6px 12px;
                        font-size: 13px;
                    }
                }

                @media (max-width: 426px) {
                    .attributes {
                        flex-wrap: wrap;
                        justify-content: center;
                    }
    
                    .attribute {
                        margin-bottom: 5px
                    }

                    .serial_cover {
                        background-color: #222;
                        border-radius: 10px;
                        width: 220px;
                        height: 280px;
                    }
                }

                @media (max-width: 376px) {
                    .left_side_btn {
                        padding: 11px 14px;
                        font-size: 12px;
                    }
                }

                @media (max-width: 321px) {
                    .left_side_btn {
                        padding: 11px 13px;
                        font-size: 10px;
                    }
                }
            `}</style>
        </div>
    )
}

export default ItemPage