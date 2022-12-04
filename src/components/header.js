// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <div className="header_container">
            <div className="logo_box">CHO|CKO</div>

            <form className="search_box">
                <input className="search_input" type="text" placeholder="نام فیلم یا سریال مورد نظر را وارد کنید ..." />
                <div className="search_btn"><FontAwesomeIcon icon={faSearch} /></div>
            </form>

            <div className="sign_box">
                <div className="menu_icon"><FontAwesomeIcon icon={faBars} /></div>
                <div className="sign_btn">ورود</div>
                <div className="sign_btn">عضویت</div>
            </div>
            <style jsx>{`
                .header_container {
                    background-color: #151515;
                    padding: 0 70px;
                    height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    direction: rtl;
                    margin-top: 40px;
                    color: #9c9c9c;
                }

                .logo_box {
                    font-size: 35px;
                    font-weight: bold;
                    letter-spacing: 2px;
                    color: #ff9000;
                    user-select: none;
                }

                .search_box {
                    width: 40%;
                    height: 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                }

                .search_input {
                    width: 100%;
                    height: 100%;
                    padding: 8px 55px 8px 15px;
                    font-family: Lalezar;
                    border-radius: 30px;
                    border: none;
                    outline: 0;
                    background-color: #000;
                    color: #999;
                }
                .search_input::placeholder {
                    color: #666;
                    font-weight: 0;
                    font-size: 14px;
                }

                .search_btn {
                    position: absolute;
                    right: 21px;
                    top: 4px;
                    color: #999;
                    cursor: pointer;
                    font-size: 16px;
                }

                .menu_icon {
                    background-color: #ff9000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #000;
                    padding: 9.5px 11px;
                    border-radius: 5px;
                    border: 1px solid #ff9000;
                    cursor: pointer;
                    transition: .2s;
                    font-size: 15px;
                    margin-left: 15px;
                }
                .menu_icon:hover {
                    border-radius: 50%;
                }

                .sign_box {
                    width: 175px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .sign_btn {
                    width: fit-content;
                    background-color: #ff9000;
                    color: #000;
                    padding: 5.5px 12px;
                    border-radius: 5px;
                    border: 1px solid #ff9000;
                    cursor: pointer;
                    transition: .3s;
                    font-size: 14px;
                    font-weight: 100;
                }
                .sign_btn:hover {
                    background: none;
                    color: #ff9000;
                }

                .sign_in_btn {
                    background: none;
                    color: #ff9000;
                    border: 1px solid #ff9000;
                }
            `}</style>
        </div>
    )
}

export default Header