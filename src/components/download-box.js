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
        </div>
    )
}

export default DownloadBox