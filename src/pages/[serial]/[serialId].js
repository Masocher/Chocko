// tools
import { useRouter } from "next/router"

// redux
import { useSelector } from "react-redux"

// components
import Header from "../../components/header"
import Footer from "../../components/footer"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark, faHeart, faClosedCaptioning, faUserPlus, faLocationDot, faCalendarDays, faRotate, faStar } from "@fortawesome/free-solid-svg-icons"

const SerialPage = () => {
    const router = useRouter()

    const filmsAndSerialsInformation = useSelector(rootReducer => rootReducer.reducer_11)

    const serialInformation = filmsAndSerialsInformation[0][router.query.serialId]

    return (
        <div className="serial_box_container" style={{ color: "#fff" }}>
            <Header />

            <div className="serial_box">
                <div className="right_side">
                    <div className="serial_cover"></div>

                    <div className="right_side_information">
                        <div className="meta_box">
                            <div className="icon_box blue_box"><FontAwesomeIcon icon={faBookmark} /></div>
                            <div className="icon_box red_box"><FontAwesomeIcon icon={faHeart} /></div>
                            <div className="manufacturing_country">{serialInformation.manufacturingCountry}</div>
                        </div>

                        <div className="serial_title">سریال - {router.query.serialId}</div>

                        <div className="genres">
                            <div className="genres_title">ژانر ها :</div>

                            <div className="genres_boxes">
                                {
                                    serialInformation.genres.map(genre =>
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
                                <div className="attribute_title">کشور <span>{serialInformation.manufacturingCountry}</span></div>
                            </div>

                            <div className="attribute">
                                <div className="attribute_icon"><FontAwesomeIcon icon={faCalendarDays} /></div>
                                <div className="attribute_title">سال تولید <span>۲۰۲۲</span></div>
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
                        <div className="serial_score_votes">{serialInformation.votes} رای</div>
                        <div className="serial_score"><span>10 /</span> {serialInformation.score}</div>
                        <div className="serial_score_icon"><FontAwesomeIcon icon={faStar} /></div>
                    </div>
                </div>
            </div>

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
                    color: #757575;
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

                .serial_title {
                    font-size: 30px;
                    color: #fff;
                    font-weight: 100;
                    margin: 50px 0;
                    border-right: 1px solid #ff9000;
                    padding-right: 20px;
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
                    color: #757575;
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
                    color: #757575;
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
                    font-size: 24px;
                    margin: 5px 10px 0 0 ;
                }

                .serial_score_votes {
                    font-size: 14px;
                    background-color: #111;
                    padding: 5px 10px;
                    border-radius: 5px;
                    margin: 0 0 4px 15px;
                    border: 1px solid #555;
                    color: #999;
                }
            `}</style>
        </div>
    )
}

export default SerialPage