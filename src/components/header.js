// components
import Menu from "./menu"
import Pannel from "./pannel"

// redux
import { useDispatch, useSelector } from "react-redux"
import { openMenu, openProfileBox } from "./../redux/actions"

// tools
import Link from "next/link"
import { useEffect } from "react"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars, faUser } from "@fortawesome/free-solid-svg-icons"

const Header = () => {

    const dispatch = useDispatch()

    let authenticated = useSelector(rootReducer => rootReducer.signIn.authenticated)
    console.log('authenticated : ' + authenticated)

    return (
        <div className="header_container">
            <Link href="/" style={{ textDecoration: "none" }}><div className="logo_box">CHO|CKO</div></Link>

            <form className="search_box">
                <input className="search_input" type="text" placeholder="نام فیلم یا سریال مورد نظر را وارد کنید ..." />
                <div className="search_btn"><FontAwesomeIcon icon={faSearch} /></div>
            </form>

            <div className="sign_box">
                <div className="menu_icon" onClick={() => dispatch(openMenu())}><FontAwesomeIcon icon={faBars} /></div>

                {
                    authenticated === true ?
                        <div className="profile_box">
                            <div className="profile_icon" onClick={() => dispatch(openProfileBox())}><FontAwesomeIcon icon={faUser} /></div>
                        </div>
                        :
                        <>
                            <Link style={{ textDecoration: "none" }} href="/sign-in"><div className="sign_btn">ورود</div></Link>
                            <Link style={{ textDecoration: "none" }} href="/sign-up"><div className="sign_btn">عضویت</div></Link>
                        </>
                }
            </div>

            <Menu />

            <Pannel />
            <style jsx>{`
                .header_container {
                    background-color: #111;
                    padding: 0 70px;
                    height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    direction: rtl;
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
                    padding: 9px 55px 9px 15px;
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

                .menu_icon, .profile_icon {
                    background-color: #ff9000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #222;
                    padding: 9.5px 11px;
                    border-radius: 5px;
                    border: 1px solid #ff9000;
                    cursor: pointer;
                    transition: .2s;
                    font-size: 16px;
                    margin-left: 15px;
                }
                .menu_icon:hover, .profile_icon:hover {
                    background: none;
                    color: #ff9000;
                }

                .sign_box {
                    width: fit-content;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .sign_btn {
                    width: fit-content;
                    background-color: #ff9000;
                    color: #222;
                    padding: 5.5px 12px;
                    border-radius: 5px;
                    border: 1px solid #ff9000;
                    cursor: pointer;
                    transition: .2s;
                    font-size: 14px;
                    font-weight: 100;
                    margin-right: 10px;
                }
                .sign_btn:hover {
                    background: none;
                    color: #ff9000;
                }

                @media (max-width: 800px) {
                    .sign_btn {
                        display: none;
                    }

                    .profile_icon {
                        display: none;
                    }

                    .sign_box {
                        width: fit-content;
                    }

                    .menu_icon {
                        margin: 0;
                        padding: 8.5px 10px;
                        font-size: 14px;
                    }

                    .logo_box {
                        font-size: 28px;
                    }

                    .header_container {
                        padding: 0 50px;
                        height: 90px;
                    }

                    .search_input {
                        padding-top: 5px;
                        padding-bottom: 5px;
                        font-size: 12px;
                    }
                    .search_input::placeholder {
                        font-size: 12px;
                    }

                    .search_box {
                        width: 50%;
                    }
                }

                @media (max-width: 426px) {
                    .logo_box {
                        font-size: 20px;
                    }

                    .header_container {
                        padding: 0 20px;
                        height: 80px;
                    }

                    .menu_icon {
                        margin: 0;
                        padding: 6.5px 8px;
                        font-size: 12px;
                    }

                    .search_input {
                        padding: 1px 35px 1px 15px;
                        font-size: 10px;
                    }
                    .search_input::placeholder {
                        font-size: 10px;
                    }

                    .search_box {
                        width: 50%;
                    }
    
                    .search_btn {
                        right: 14px;
                        top: 8px;
                        font-size: 11px;
                    }
                }

                @media (max-width: 376px) {
                    .header_container {
                        padding: 0 15px;
                        height: 70px;
                    }

                    .logo_box {
                        font-size: 18px;
                    }

                    .menu_icon {
                        margin: 0;
                        padding: 5.5px 7px;
                        font-size: 10px;
                    }

                    .search_btn {
                        right: 14px;
                        top: 9px;
                        font-size: 10px;
                    }

                    .search_input {
                        padding: 0 35px 0 15px;
                        font-size: 8px;
                    }
                    .search_input::placeholder {
                        font-size: 8px;
                    }

                    .search_box {
                        width: 55%;
                    }
                }
            `}</style>
        </div>
    )
}

export default Header