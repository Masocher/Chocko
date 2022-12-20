// redux
import { useSelector, useDispatch } from "react-redux"
import { closeDownloadBox } from "../redux/actions"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"

// components
import DownloadBoxLinks from "./download-pop-up-links"

const DownloadPopUpBox = () => {

    const dispatch = useDispatch()
    const downloadBoxStatus = useSelector(rootReducer => rootReducer.reducer_13)

    return (
        <div className={`download_box_container ${downloadBoxStatus ? "show" : ""}`}>
            <div className="close_btn" onClick={() => dispatch(closeDownloadBox())}><FontAwesomeIcon icon={faClose} /></div>

            <div className="download_box_title">باکس دانلود</div>

            <DownloadBoxLinks />

            <style jsx>{`
                .download_box_container {
                    background-color: #111;
                    position: fixed;
                    bottom: -100%;
                    left: 0;
                    width: 100%;
                    height: calc(100% - 100px);
                    z-index: 2;
                    display: none;
                    transition: .5s;
                    flex-direction: column;
                    align-items: center;
                    padding: 50px 0;
                }
                .download_box_container.show {
                    bottom: 0;
                }

                .download_box_title {
                    font-size: 38px;
                    font-weight: 100;
                    height: fit-content;
                    border-bottom: 1px solid #ff9000;
                    width: 90%;
                    text-align: center;
                    padding-bottom: 10px;
                }

                .close_btn {
                    position: absolute;
                    top: 62px;
                    right: 80px;
                    font-size: 16px;
                    color: #000;
                    background-color: #ff9000;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: .2s;
                    border: 1px solid #ff9000;
                }
                .close_btn:hover {
                    background: none;
                    color: #ff9000;
                }

                @media (max-width: 1380px) {
                    .download_box_container {
                        display: flex;
                    }
                }

                @media (max-width: 426px) {
                    .download_box_title {
                        font-size: 30px;
                    }

                    .close_btn {
                        top: 58px;
                        right: 40px;
                        font-size: 14px;
                        width: 30px;
                        height: 30px;
                    }
                }

                @media (max-width: 376px) {
                    .close_btn {
                        top: 39px;
                    }

                    .download_box_container {
                        height: calc(100% - 60px);
                        padding: 30px 0;
                    }

                    .download_box_title {
                        margin-bottom: 5px;
                    }
                }

                @media (max-width: 321px) {
                    .download_box_title {
                        margin-bottom: 0;
                        font-size: 26px;
                    }

                    .close_btn {
                        top: 38px;
                        right: 30px;
                        font-size: 12px;
                        width: 25px;
                        height: 25px;
                    }
                }
            `}</style>
        </div>
    )
}

export default DownloadPopUpBox