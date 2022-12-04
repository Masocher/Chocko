// redux
import { useDispatch, useSelector } from "react-redux"
import { closeMenu, setLight } from "./../redux/actions"

// tools
import Link from "next/link"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faHome, faTicket } from "@fortawesome/free-solid-svg-icons"

const Menu = () => {

    const dispatch = useDispatch()
    let menuStatus = useSelector(rootReducer => rootReducer.reducer_1)
    let temStatus = useSelector(rootReducer => rootReducer.reducer_2)

    return (
        <div className={`menu_container ${ menuStatus ? 'show' : '' }`}>
            <div className={`black_layer ${ menuStatus ? 'show' : '' }`} onClick={ () => dispatch(closeMenu()) }></div>
            <div className="menu_box">
                <div className="logo_box">CHO|CKO</div>
                
                <div className="menu_sections">
                    <div className="categories">دسته بندی ها</div>
                    <div className="actors">بــازیگران</div>
                </div>

                <div className="pages">
                    <Link style={{color: "#9c9c9c", textDecoration: "none", width: "100%", display: "flex", alignItems: "center"}} href='/'><div className="page_link"><FontAwesomeIcon style={{marginLeft: "10px"}} className="page_icon" icon={faHome} />صفحه اصلی</div></Link>
                    <Link style={{color: "#9c9c9c", textDecoration: "none", width: "100%", display: "flex", alignItems: "center"}} href='/contact-us'><div className="page_link"><FontAwesomeIcon style={{marginLeft: "10px"}} className="page_icon" icon={faPhone} />تماس با ما</div></Link>
                    <Link style={{color: "#9c9c9c", textDecoration: "none", width: "100%", display: "flex", alignItems: "center"}} href='/buy-subscription'><div className="page_link"><FontAwesomeIcon style={{marginLeft: "10px"}} className="page_icon" icon={faTicket} />خرید اشتراک</div></Link>
                </div>


                <div className="status_btn">
                    {
                        temStatus ? "حالت شب" : "حالت روز"
                    }
                    <div className={`check_box ${ temStatus ? 'show' : '' }`} onClick={ () => dispatch(setLight()) }>
                        <div className={`check_btn ${ temStatus ? 'show' : '' }`}></div>
                    </div>
                </div>

                <div className="user_box">
                    <div className="have_not_account">شما حساب کاربری ندارید !</div>
                    <div className="sign_buttons">
                        <div className="sign_btn">ورود</div>
                        <div className="sign_btn">عضویت</div>
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
                    background-color: rgba(0, 0, 0, .6);
                    cursor: pointer;
                    transition: .3s;
                }
                .black_layer.show {
                    right: 0;
                }

                .menu_box {
                    width: 420px;
                    background-color: #111111;
                    height: 100%;
                    position: absolute;
                    right: 0;
                    top: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
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

                .user_box {
                    width: 85%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    background-color: #000;
                    padding: 30px 0;
                    position: absolute;
                    bottom: 30px;
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
                    margin-top: 15px;
                }

                .sign_btn {
                    width: fit-content;
                    background-color: #ff9000;
                    color: #000;
                    padding: 5.5px 13px;
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
                    margin-top: 50px;
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
            `}</style>
        </div>
    )
}

export default Menu