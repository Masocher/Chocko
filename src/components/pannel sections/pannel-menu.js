// react-redux
import { useSelector, useDispatch } from "react-redux"
import { closeProfileBox, openDashboardSections, logOut } from "../../redux/actions"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faStar, faHome, faPlus, faEdit, faUser } from "@fortawesome/free-solid-svg-icons"

// tools
import Link from "next/link"

const PannelMenu = () => {

    const dispatch = useDispatch()
    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)
    const profileBoxStatus = useSelector(rootReducer => rootReducer.reducer_15)

    return (
        <div className="pannel_menu">
            <div className={`user_box_2 ${profileBoxStatus ? 'show' : ''}`}>
                <Link href="/"><div className="log_out_btn_2" onClick={() => dispatch(logOut())}>خروج از حساب</div></Link>

                <div className="user_img"></div>
                <div className="user_name">Masocher</div>
                <div className="user_phone_number">09012345678</div>

                <div className="close_icon_2" onClick={() => dispatch(closeProfileBox())}><FontAwesomeIcon icon={faClose} /></div>    
            </div>

            <div className="close_icon" onClick={() => dispatch(closeProfileBox())}><FontAwesomeIcon icon={faClose} /></div>

            <div className={`right_side_content ${profileBoxStatus ? 'show' : ''}`}>
                <div className="user_box">
                    <div className="user_img"></div>
                    <div className="user_name">Masocher</div>
                    <div className="user_phone_number">09012345678</div>
                </div>

                <div className="dashboard_sections">
                    <div className={`dashboard_section ${dashboardSectionsNumber == 1 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(1))}><FontAwesomeIcon icon={faHome} /> <div>داشبورد</div></div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 2 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(2))}><FontAwesomeIcon icon={faUser} /> <div>مشاهده پروفایل</div></div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 3 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(3))}><FontAwesomeIcon icon={faStar} /> <div>لیست تماشا</div></div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 4 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(4))}><FontAwesomeIcon icon={faPlus} /> <div>درخواست فیلم و سریال</div></div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 5 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(5))}><FontAwesomeIcon icon={faEdit} /> <div>ویرایش اطلاعات</div></div>
                </div>

                <div className="log_out_btn" onClick={() => dispatch(logOut())}>خروج از حساب کاربری</div>
            </div>

            <style jsx>{`
                .right_side_content {
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 70px;
                    padding: 0 60px;
                    transition: .5s;
                    opacity: 0;
                }
                .right_side_content.show {
                    opacity: 1;
                }

                .close_icon {
                    color: #111;
                    border-radius: 8px;
                    background-color: #ff9000;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: .2s;
                    border: 1px solid #ff9000;
                    cursor: pointer;
                    position: absolute;
                    top: 75px;
                    right: 50px;
                    font-size: 14px;
                }
                .close_icon:hover {
                    background: none;
                    color: #ff9000;
                }

                .user_box, .user_box_2 {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .user_box_2 {
                    display: none;
                }

                .user_img {
                    width: 85px;
                    height: 85px;
                    border-radius: 50%;
                    background-color: #222;
                    border: 2px solid #ff9000;
                }

                .user_name {
                    font-size: 24px;
                    margin-top: 10px;
                    letter-spacing: .5px;
                }

                .user_phone_number {
                    color: #7c7c7c;
                    font-size: 12px;
                    margin-top: -5px;
                    font-weight: 100;
                    letter-spacing: .5px;
                }

                .dashboard_sections {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    margin-top: 40px;
                }

                .dashboard_section {
                    background-color: #000;
                    padding: 15px 20px;
                    border-radius: 10px;
                    color: #fff;
                    width: calc(100% - 20px);
                    text-align: start;
                    margin-bottom: 20px;
                    font-weight: 100;
                    letter-spacing: .5px;
                    cursor: pointer;
                    border: 1px solid #000;
                    display: flex;
                    align-items: center;
                    user-select: none;
                    font-size: 16px;
                }
                .dashboard_section div {
                    font-size: 14px;
                    margin: 1px 13px 0 0;
                }
                .dashboard_section:hover {
                    border-color: #ff9000;
                    color: #ff9000;
                }
                .dashboard_section.show {
                    color: #000;
                    background-color: #ff9000;
                    border-color: #ff9000;
                }
                .dashboard_section.show:hover {
                    color: #000;
                }

                .close_icon_2 {
                    color: #000;
                    background-color: #ff9000;
                    width: 25px;
                    height: 25px;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    cursor: pointer;
                }

                .log_out_btn, .log_out_btn_2 {
                    background-color: #ff9000;
                    color: #000;
                    border: 1px solid #ff9000;
                    cursor: pointer;
                    transition: .2s;
                    font-size: 13px;
                    padding: 8px 15px;
                    border-radius: 5px;
                    margin-top: 10px;
                }
                .log_out_btn:hover, .log_out_btn_2:hover {
                    background: none;
                    color: #ff9000;
                }

                .log_out_btn_2 {
                    margin: 0;
                    position: absolute;
                    left: 20px;
                    top: 20px;
                    font-size: 11px;
                }

                @media (max-width: 1025px) {
                    .right_side_content.show {
                        width: 240px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-top: 50px;
                        padding: 0 50px;
                    }

                    .close_icon {
                        width: 26px;
                        height: 26px;
                        top: 56px;
                    }
                }

                @media (max-width: 769px) {
                    .close_icon {
                        display: none;
                    }

                    .user_box {
                        display: none;
                    }

                    .user_box_2.show {
                        display: flex;
                        height: fit-content;
                        position: fixed;
                        top: 0;
                        left: 50%;
                        transform: translate(-50%, 0);
                        z-index: 1;
                        background-color: #111;
                        width: 100%;
                        justify-content: center;
                        padding: 15px 0;
                    }

                    .user_img {
                        width: 50px;
                        height: 50px;
                    }

                    .user_name {
                        font-size: 16px;
                        margin-top: 8px;
                    }

                    .user_phone_number {
                        display: none;
                    }

                    .right_side_content.show {
                        position: fixed;
                        background-color: #111;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 100px;
                        z-index: 1;
                        padding: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .dashboard_sections {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-evenly;
                        width: 100%;
                        margin: 0;
                        flex-direction: row;
                    }

                    .dashboard_section {
                        padding: 0;
                        border-radius: 50%;
                        width: 50px;
                        height: 50px;
                        margin: 0;
                        font-size: 18px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .dashboard_section div {
                        display: none;
                    }
                }

                @media (max-width: 426px) {
                    .right_side_content.show {
                        height: 80px;
                    }

                    .dashboard_section {
                        width: 40px;
                        height: 40px;
                        font-size: 16px;
                    }
                }

                @media (max-width: 321px) {
                    .dashboard_section {
                        width: 33px;
                        height: 33px;
                        font-size: 14px;
                        border-radius: 50%;
                    }

                    .dashboard_sections {
                        height: 80px;
                    }
                }
            `}</style>
        </div>
    )
}

export default PannelMenu