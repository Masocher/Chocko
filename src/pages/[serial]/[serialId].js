// tools
import { useRouter } from "next/router"

// redux
import { useSelector } from "react-redux"

// components
import Header from "../../components/header"
import Footer from "../../components/footer"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons"

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
                            <div className="icon_box"><FontAwesomeIcon icon={faBookmark} /></div>
                            <div className="icon_box"><FontAwesomeIcon icon={faHeart} /></div>
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
                    </div>
                </div>
            </div>

            <Footer />

            <style jsx>{`
                .serial_box {
                    width: calc(100% - 100px);
                    direction: rtl;
                    margin: 100px 50px;
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
                    height: 350px;
                    margin-left: 40px;
                }

                .meta_box {
                    display: flex;
                    align-items: end;
                    height: fit-content;
                    width: 180px;
                    justify-content: space-between;
                    color: #757575;
                    border: solid #222;
                    border-width: 0 0 1px 0;
                    padding: 0 0 12px 100px;
                    margin-top: 10px;
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
                    padding: 0 0 12px 100px;
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
            `}</style>
        </div>
    )
}

export default SerialPage