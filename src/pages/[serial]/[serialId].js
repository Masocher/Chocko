// tools
import { useRouter } from "next/router"

// redux
import { useSelector } from "react-redux"

// components
import Header from "../../components/header"
import Footer from "../../components/footer"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark, faH, faHeart } from "@fortawesome/free-solid-svg-icons"

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
                    </div>
                </div>
            </div>

            <Footer />

            <style jsx>{`
                .serial_box {
                    width: calc(100% - 100px);
                    direction: rtl;
                    margin: 50px;
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
                    align-items: center;
                    height: fit-content;
                    width: 200px;
                    justify-content: space-between;
                    color: #757575;
                }

                .icon_box {
                    width: 35px;
                    height: 35px;
                    font-size: 20px;
                    border: solid #757575;
                    border-width: 0 0 1px 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 3px;
                }

                .manufacturing_country {
                    font-size: 14px;
                    border: solid #757575;
                    border-width: 0 0 1px 0;
                    padding: 0 10px;
                    cursor: pointer;
                    transition: .2s;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 3px;
                }
                .manufacturing_country:hover {
                    color: #ff9000;
                    border-color: #ff9000;
                }

                .serial_title {
                    font-size: 30px;
                    color: #fff;
                    font-weight: 100;
                    margin-top: 30px;
                }
            `}</style>
        </div>
    )
}

export default SerialPage