// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="copy_write_box">تمامی حقوق این وبسایت متعلق به چوکو میباشد.</div>
            <div className="site_section" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><FontAwesomeIcon icon={faCaretUp} /></div>

            <style jsx>{`
                .footer_container {
                    width: calc(100% - 200px);
                    background-color: #111;
                    height: 70px;
                    margin-top: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-top: 1px solid #222;
                    direction: rtl;
                    padding: 0 100px;
                }

                .site_section {
                    background-color: #ff9000;
                    color: #000;
                    height: 40px;
                    width: 40px;
                    border-radius: 50%;
                    font-size: 22px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: .2s;
                    cursor: pointer;
                    border: 1px solid #ff9000;
                    position: relative;
                    bottom: 30px;
                }
                .site_section:hover {
                    background-color: #000;
                    color: #ff9000;
                }

                .copy_write_box {
                    color: silver;
                }

                @media (max-width: 601px) {
                    .footer_container {
                        width: calc(100% - 80px);
                        padding: 0 40px;
                    }
                }

                @media (max-width: 426px) {
                    .footer_container {
                        width: calc(100% - 80px);
                        padding: 0 40px;
                        height: 60px;
                        margin-top: 60px;
                    }

                    .site_section {
                        height: 22px;
                        width: 22px;
                        font-size: 16px;
                        bottom: 1px;
                    }

                    .copy_write_box {
                        font-size: 12px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Footer