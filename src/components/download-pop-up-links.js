// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

const DownloadBoxLinks = () => {
    return (
        <div className="download_pop_up_box_container">
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

                            <div className="download_btn_2">
                                <div className="download_btn_icon">
                                    <FontAwesomeIcon icon={faDownload} />
                                </div>
                                دانلود
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

                            <div className="download_btn_2">
                                <div className="download_btn_icon">
                                    <FontAwesomeIcon icon={faDownload} />
                                </div>
                                دانلود
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
                .download_pop_up_box_container {
                    width: 95%;
                    margin: 20px auto 0 auto;
                    position: relative;
                    direction: rtl;
                }

                .down_box {
                    background-color: #000;
                }

                .download_btn_2 {
                    display: none;
                }

                .download_btn, .download_btn_2, .download_btn_icon {
                    font-size: 12px;
                }

                .softsub {
                    width: 90px;
                    text-align: center;
                }

                .file_quality {
                    width: 60px;
                }

                .size {
                    width: 80px;
                }

                .softsub, .file_quality, .size {
                    font-size: 12px;
                    padding: 9px 0;
                }

                @media (max-width: 650px) {
                    .size_box {
                        display: none;
                    }

                    .quality_box {
                        margin-right: 20px;
                    }
                }

                @media (max-width: 376px) {
                    .download_btn {
                        display: none;
                    }

                    .download_btn_2, .download_btn_icon {
                        font-size: 10px;
                    }

                    .softsub {
                        width: 80px;
                    }

                    .file_quality {
                        width: 50px;
                    }

                    .softsub, .file_quality, .size {
                        font-size: 10px;
                    }

                    .download_btn_2 {
                        display: flex;
                    }

                    .down_box {
                        height: 80px;
                        width: 80%;
                        padding: 0 25px;
                        margin: 0 0 15px 0;
                        border-radius: 10px;
                    }
                }
            `}</style>
        </div>
    )
}

export default DownloadBoxLinks