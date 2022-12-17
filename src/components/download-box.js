// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

const DownloadBox = () => {
    return (
        <div className="download_box_container">
            <div className="download_box_title">باکس دانلود</div>

            <div className="download_box">
                <div className="down_box">
                    <div className="left_side_box">
                        <div className="download_btn_box">
                            <div className="download_btn">
                                <div className="download_btn_icon">
                                    <FontAwesomeIcon icon={faDownload} />
                                </div>
                                دانلود با لینک مستقیم
                            </div>
                        </div>
                    </div>

                    <div className="right_side_box">
                        <div className="quality_box"><div className="file_quality">1080p</div></div>
                        <div className="size_box"><div className="size"><span>1</span> گیگابایت</div></div>
                        <div className="softsub">زیرنویس فارسی</div>
                    </div>
                </div>

                <div className="down_box">
                    <div className="left_side_box">
                        <div className="download_btn_box">
                            <div className="download_btn">
                                <div className="download_btn_icon">
                                    <FontAwesomeIcon icon={faDownload} />
                                </div>
                                دانلود با لینک مستقیم
                            </div>
                        </div>
                    </div>

                    <div className="right_side_box">
                        <div className="quality_box"><div className="file_quality">720p</div></div>
                        <div className="size_box"><div className="size"><span>1</span> گیگابایت</div></div>
                        <div className="softsub">زیرنویس فارسی</div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .download_box_container {
                    width: 95%;
                    margin: 100px auto 0 auto;
                    position: relative;
                    direction: rtl;
                }

                .right_side_box, .left_side_box {
                    display: flex;
                    align-items: center;
                }

                .download_box {
                    width: 100%;
                    height: fit-content;
                    border-radius: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                .down_box {
                    background-color: #111;
                    width: calc(100% - 60px);
                    height: 100px;
                    border-radius: 3px;
                    margin-top: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 30px;
                    direction: ltr;
                }

                .download_box_title {
                    font-size: 30px;
                    letter-spacing: .5px;
                }

                .download_btn {
                    width: fit-content;
                    display: flex;
                    font-size: 14px;
                    font-weight: 100;
                    letter-spacing: .5px;
                    padding: 8px 15px;
                    border-radius: 5px;
                    border: 1px solid #ff9000;
                    cursor: pointer;
                    transition: .2s;
                    background-color: #ff9000;
                    color: #000;
                    direction: rtl;
                }
                .download_btn:hover {
                    color: #ff9000;
                    background: none;
                }

                .download_btn_icon {
                    margin-left: 8px;
                    font-size: 15px;
                }

                .softsub {
                    background-color: #ff9000;
                    color: #000;
                    padding: 6px 15px;
                    border-radius: 5px;
                    font-size: 16px;
                }

                .size_box {
                    margin: 0 30px;
                    padding: 0 30px;
                    border-right: 2px solid #222;
                    border-left: 2px solid #222;
                    height: 38px;
                    display: flex;
                    align-items: center;
                }

                .size {
                    background-color: #ff9000;
                    color: #000;
                    width: 100px;
                    text-align: center;
                    border-radius: 5px;
                    font-size: 16px;
                    padding: 6px 0;
                    direction: rtl;
                }
                .size span {
                    margin-left: 4px;
                }

                .file_quality {
                    background-color: #c0c0c0;
                    color: #000;
                    width: 70px;
                    text-align: center;
                    border-radius: 5px;
                    font-size: 16px;
                    padding: 6px 0;
                }

                @media (max-width: 1390px) {
                    .download_box_container {
                        display: none;
                    }
                }

                @media (max-width: 730px) {
                    .download_box {
                        align-items: center;
                        flex-direction: column;
                    }

                    .down_box {
                        flex-direction: column-reverse;
                    }
                }
            `}</style>
        </div>
    )
}

export default DownloadBox