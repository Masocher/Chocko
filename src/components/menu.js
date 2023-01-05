// components
import Categories from "./categories"

// redux
import { useDispatch, useSelector } from "react-redux"
import { closeMenu, setLight, openCategories, closeCategories } from "./../redux/actions"

// tools
import Link from "next/link"
import { useRouter } from "next/router"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faHome, faTicket, faClose } from "@fortawesome/free-solid-svg-icons"

const Menu = () => {

    const route = useRouter()

    const dispatch = useDispatch()
    let menuStatus = useSelector(rootReducer => rootReducer.reducer_1)
    let temStatus = useSelector(rootReducer => rootReducer.reducer_2)
    let categoriesStatus = useSelector(rootReducer => rootReducer.reducer_3)

    return (
        <div className={`menu_container ${menuStatus ? "show" : ""}`}>
            <div className={`black_layer ${menuStatus ? "show" : ""}`} onClick={() => {
                dispatch(closeMenu())
                dispatch(closeCategories())
            }}></div>

            <Categories />

            <div className="menu_box">
                <div className="close_box" onClick={() => dispatch(closeMenu())}><FontAwesomeIcon icon={faClose} /></div>

                <div className="logo_box">CHO|CKO</div>

                <div className="menu_sections">
                    <div className={`categories ${categoriesStatus ? "show" : ""}`} onClick={() => categoriesStatus ? dispatch(closeCategories()) : dispatch(openCategories())}>دسته بندی ها</div>
                    <Link href="/stars" style={{ textDecoration: "none" }}
                        onClick={() => {
                            dispatch(closeMenu())
                            dispatch(closeCategories())
                        }}
                    ><div className={`actors ${route.pathname == "/stars" ? "show" : ""}`}>هنرمندان</div></Link>
                </div>

                <div className="pages">
                    <Link style={{ color: "#9c9c9c", textDecoration: "none", width: "100%", display: "flex", alignItems: "center" }} href="/">
                        <div onClick={() => {
                            dispatch(closeMenu())
                            dispatch(closeCategories())
                        }} className="page_link"><FontAwesomeIcon style={{ marginLeft: "10px" }} className="page_icon" icon={faHome} />صفحه اصلی</div>
                    </Link>

                    <Link style={{ color: "#9c9c9c", textDecoration: "none", width: "100%", display: "flex", alignItems: "center" }} href="/contact-us">
                        <div onClick={() => {
                            dispatch(closeMenu())
                            dispatch(closeCategories())
                        }} className="page_link"><FontAwesomeIcon style={{ marginLeft: "10px" }} className="page_icon" icon={faPhone} />تماس با ما</div>
                    </Link>

                    <Link style={{ color: "#9c9c9c", textDecoration: "none", width: "100%", display: "flex", alignItems: "center" }} href="/buy-subscription">
                        <div onClick={() => {
                            dispatch(closeMenu())
                            dispatch(closeCategories())
                        }} className="page_link"><FontAwesomeIcon style={{ marginLeft: "10px" }} className="page_icon" icon={faTicket} />خرید اشتراک</div>
                    </Link>
                </div>


                <div className="status_btn">
                    حالت روز
                    <div className={`check_box ${temStatus ? "show" : ""}`} onClick={() => dispatch(setLight())}>
                        <div className={`check_btn ${temStatus ? "show" : ""}`}></div>
                    </div>
                </div>

                <div className="user_box">
                    <div className="have_not_account">شما حساب کاربری ندارید !</div>
                    <div className="sign_buttons">
                        <Link href="/sign-in" style={{ textDecoration: "none" }}><div className="sign_btn">ورود</div></Link>
                        <Link href="/sign-up" style={{ textDecoration: "none" }}><div className="sign_btn">عضویت</div></Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .menu_container {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 100%;
                    height: 100%;
                    transition: .3s;
                    user-select: none;
                    z-index: 3;
                }
                .menu_container.show {
                    right: 0;
                }

                .black_layer {
                    position: absolute;
                    right: 200%;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, .8);
                    transition: .3s;
                }
                .black_layer.show {
                    right: 0;
                }

                .menu_box {
                    width: 420px;
                    background-color: #111;
                    height: 100%;
                    position: absolute;
                    right: 0;
                    top: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    overflow-y: scroll;
                    overflow-x: hidden;
                }
                .menu_box::-webkit-scrollbar {
                    width: 7px;
                }

                .menu_box::-webkit-scrollbar-track {
                    background: #111;
                }
                
                .menu_box::-webkit-scrollbar-thumb {
                    background: #191919;
                }
                
                .menu_box::-webkit-scrollbar-thumb:hover {
                    background: #333;
                }

                .logo_box {
                    font-size: 45px;
                    font-weight: bold;
                    letter-spacing: 2px;
                    color: #ff9000;
                    text-align: center;
                    width: 80%;
                    padding: 20px 0;
                    margin: 20px auto 40px auto;
                    border-bottom: 1px solid #303030;
                }

                .menu_sections {
                    display: flex;
                    justify-content: space-between;
                    width: 270px;
                }

                .categories, .actors {
                    background-color: #000;
                    border-radius: 10px;
                    padding: 10px 0;
                    width: 120px;
                    font-size: 14px;
                    font-weight: 0;
                    text-align: center;
                    border: 1px solid #000;
                    cursor: pointer;
                    transition: .3s;
                    color: #999;
                }
                .categories:hover, .actors:hover {
                    border-color: #ff9000;
                    color: #ff9000;
                }
                .categories.show, .actors.show {
                    background-color: #ff9000;
                    color: #111;
                }

                .user_box {
                    width: 85%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    background-color: #000;
                    padding: 30px 0;
                    margin: 50px 0 0 0;
                    border-radius: 10px;
                    border: 1px solid #303030;
                }

                .have_not_account {
                    font-size: 14px;
                    color: #ff9000;
                    font-weight: 0;
                }

                .sign_buttons {
                    display: flex;
                    justify-content: space-between;
                    width: 120px;
                    margin-top: 14px;
                }

                .sign_btn {
                    width: fit-content;
                    background-color: #ff9000;
                    color: #111;
                    padding: 5px 13px;
                    border-radius: 3px;
                    cursor: pointer;
                    transition: .1s;
                    font-size: 12px;
                    font-weight: 100;
                    position: relative;
                    bottom: 0;
                }
                .sign_btn:hover {
                    bottom: 3px;
                }

                .pages {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 70%;
                    margin-top: 30px;
                }

                .page_link {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 0;
                    background-color: #000;
                    border-radius: 10px;
                    padding: 12px 25px;
                    width: 100%;
                    margin-top: 15px;
                    cursor: pointer;
                    transition: .2s;
                    border: 1px solid #000;
                    position: relative;
                    right: 0;
                }
                .page_link:hover {
                    border-right-color: #ff9000;
                    right: 5px;
                    border-radius: 10px 0 0 10px;
                }

                .status_btn {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #000;
                    width: calc(85% - 50px);
                    padding: 12px 25px;
                    border-radius: 10px;
                    margin-top: 30px;
                    border: 1px solid #303030;
                }

                .check_box {
                    width: 22px;
                    border: 3px solid #999;
                    height: 15px;
                    border-radius: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 0 3px;
                    cursor: pointer;
                    transition: .2s;
                }
                .check_box.show {
                    background-color: #ff9000;
                    border-color: #ff9000;
                    justify-content: flex-start;
                }

                .check_btn {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: #999;
                    transition: .2s;
                }
                .check_btn.show {
                    background-color: #000;
                }

                .close_box {
                    position: absolute;
                    top: 42px;
                    left: 40px;
                    background-color: #ff9000;
                    color: #000;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: .2s;
                    border: 1px solid #ff9000;
                    display: none;
                    font-size: 14px;
                }
                .close_box:hover {
                    background: none;
                    color: #ff9000;
                }

                @media (max-height: 700px) {
                    .user_box {
                        margin: 30px 0;
                    }
                }

                @media (max-width: 426px) {
                    .menu_box {
                        width: 100%;
                    }

                    .close_box {
                        display: flex;
                    }

                    .pages {
                        margin-top: 0;
                    }

                    .logo_box {
                        font-size: 36px;
                        padding: 10px 0;
                        margin: 20px auto 25px auto;
                    }

                    .menu_sections {
                        width: 55%;
                    }

                    .page_link {
                        font-size: 12px;
                    }
                    
                    .categories, .actors {
                        width: 100px;
                        font-size: 12px;
                    }

                    .user_box {
                        width: 100%;
                        padding: 25px 0 30px 0;
                        bottom: 0;
                        border-radius: 0;
                        borde-top: 1px solid #303030;
                    }

                    .have_not_account {
                        font-size: 14px;
                    }
    
                    .sign_buttons {
                        margin-top: 10px;
                    }
    
                    .sign_btn {
                        padding: 4.5px 12px;
                    }

                    .status_btn {
                        width: calc(70% - 50px);
                        padding: 15px 25px;
                        margin-top: 15px;
                        border: none;
                    }
                }

                @media (max-width: 376px) {
                    .menu_sections {
                        width: 60%;
                    }
                }

                @media (max-width: 321px) {
                    .menu_sections {
                        width: 70%;
                    }
                }
            `}</style>
        </div>
    )
}

export default Menu