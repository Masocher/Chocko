// redux
import { useSelector, useDispatch } from "react-redux"
import { closeProfileBox, openDashboardSections } from "../redux/actions"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faListAlt, faSquare, faClock, faCrown, faRotate, faEarth, faEdit, faCalendarAlt, faSquarePlus, faUser, faMessage, faVideoCamera, faPlayCircle } from "@fortawesome/free-solid-svg-icons"

const Pannel = () => {

    const dispatch = useDispatch()
    const profileBoxStatus = useSelector(rootReducer => rootReducer.reducer_15)
    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)

    return (
        <div className={`profile_container ${profileBoxStatus ? 'show' : ''}`}>
            <div className="close_icon" onClick={() => dispatch(closeProfileBox())}><FontAwesomeIcon icon={faClose} /></div>

            <div className="right_side_content">
                <div className="user_box">
                    <div className="user_img"></div>
                    <div className="user_name">Masocher</div>
                    <div className="user_phone_number">09031698509</div>
                </div>

                <div className="dashboard_sections">
                    <div className={`dashboard_section ${dashboardSectionsNumber == 1 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(1))}><FontAwesomeIcon icon={faSquare} style={{ fontSize: '16px', margin: '0 0 2px 13px' }} /> داشبورد</div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 2 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(2))}><FontAwesomeIcon icon={faUser} style={{ fontSize: '16px', margin: '0 0 2px 13px' }} /> مشاهده پروفایل</div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 3 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(3))}><FontAwesomeIcon icon={faListAlt} style={{ fontSize: '16px', margin: '0 0 2px 13px' }} /> لیست تماشا</div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 4 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(4))}><FontAwesomeIcon icon={faCrown} style={{ fontSize: '16px', margin: '0 0 2px 13px' }} /> خرید اشتراک</div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 5 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(5))}><FontAwesomeIcon icon={faSquarePlus} style={{ fontSize: '16px', margin: '0 0 2px 13px' }} /> درخواست فیلم و سریال</div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 6 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(6))}><FontAwesomeIcon icon={faMessage} style={{ fontSize: '16px', margin: '0 0 2px 13px' }} /> کامنت ها</div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 7 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(7))}><FontAwesomeIcon icon={faEdit} style={{ fontSize: '16px', margin: '0 0 2px 13px' }} /> ویرایش اطلاعات</div>
                </div>
            </div>

            <div className="dashboard_box">
                <div className="subscription_time">
                    <div className="calendar_icon"><FontAwesomeIcon icon={faCalendarAlt} /></div>
                    <div className="dashboard_content">
                        <div className="dashboard_inf_box_title">زمان باقی مانده اشتراک</div>
                        <div className="timer">
                            <div className="time">
                                00
                                <span>ثانیه</span>
                            </div>
                            <span>:</span>
                            <div className="time">
                                00
                                <span>دقیقه</span>
                            </div>
                            <span>:</span>
                            <div className="time">
                                00
                                <span>ساعت</span>
                            </div>
                            <span>:</span>
                            <div className="time">
                                00
                                <span>روز</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user_inf_boxes_1">
                    <div className="dashboard_inf_box">
                        <div className="dashboard_inf_top_content">
                            <div className="dashboard_inf_number">۵</div>
                            <div className="dashboard_inf_icon"><FontAwesomeIcon icon={faMessage} /></div>
                        </div>
                        <div className="dashboard_inf_box_title">کامنت های ارسال شده</div>
                        <div className="show_more_box">مشاهده بیشتر</div>
                    </div>

                    <div className="dashboard_inf_box">
                        <div className="dashboard_inf_top_content">
                            <div className="dashboard_inf_number">۰</div>
                            <div className="dashboard_inf_icon"><FontAwesomeIcon icon={faVideoCamera} /></div>
                        </div>
                        <div className="dashboard_inf_box_title">فیلم های درخواستی</div>
                        <div className="show_more_box">مشاهده بیشتر</div>
                    </div>

                    <div className="dashboard_inf_box">
                        <div className="dashboard_inf_top_content">
                            <div className="dashboard_inf_number">۱۲</div>
                            <div className="dashboard_inf_icon"><FontAwesomeIcon icon={faPlayCircle} /></div>
                        </div>
                        <div className="dashboard_inf_box_title">لیست پخش مورد علاقه</div>
                        <div className="show_more_box">مشاهده بیشتر</div>
                    </div>
                </div>

                <div className="user_inf_boxes">
                    <div className="dashboard_inf_box">
                        <div className="dashboard_inf_top_content">
                            <div className="dashboard_inf_icon"><FontAwesomeIcon icon={faCrown} /></div>
                        </div>
                        <div className="dashboard_inf_box_title">اشتراک ویژه</div>
                        <div className="dashboard_inf_box_description">اشتراک ویژه ندارید</div>
                    </div>

                    <div className="dashboard_inf_box">
                        <div className="dashboard_inf_top_content">
                            <div className="dashboard_inf_icon"><FontAwesomeIcon icon={faRotate} /></div>
                        </div>
                        <div className="dashboard_inf_box_title">آخرین فعالیت شما</div>
                        <div className="dashboard_inf_box_description">۱۴۰۱<span>/</span>۱۰<span>/</span>۲۰</div>
                    </div>

                    <div className="dashboard_inf_box">
                        <div className="dashboard_inf_top_content">
                            <div className="dashboard_inf_icon"><FontAwesomeIcon icon={faClock} /></div>
                        </div>
                        <div className="dashboard_inf_box_title">تاریخ عضویت شما</div>
                        <div className="dashboard_inf_box_description">۱۴۰۱<span>/</span>۱۰<span>/</span>۲۰</div>
                    </div>

                    <div className="dashboard_inf_box">
                        <div className="dashboard_inf_top_content">
                            <div className="dashboard_inf_icon"><FontAwesomeIcon icon={faEarth} /></div>
                        </div>
                        <div className="dashboard_inf_box_title">آی پی شما</div>
                        <div className="dashboard_inf_box_description">51.81.153.216</div>
                    </div>
                </div>

                <div className="user_tickets">
                    <div className="user_tickets_title_box">
                        <div>تیکت های اخیر</div>
                        <span>مشاهده همه</span>
                    </div>

                    <div className="tickets_box">
                        <span>چیزی یافت نشد !</span>
                    </div>
                </div>
            </div>

            <style>{`
                .profile_container {
                    position: fixed;
                    bottom: -100%;
                    left: 0;
                    color: #fff;
                    background-color: #111;
                    width: 100%;
                    height: 100%;
                    z-index: 3;
                    display: flex;
                    align-items: flex-start;
                    transition: .5s;
                }
                .profile_container.show {
                    bottom: 0;
                }

                .right_side_content {
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 50px;
                    padding: 0 60px;
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
                    margin-bottom: 50px;
                    position: absolute;
                    top: 50px;
                    right: 55px;
                    font-size: 14px;
                }
                .close_icon:hover {
                    background: none;
                    color: #ff9000;
                }

                .user_box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
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

                .logo_box {
                    font-size: 35px;
                    font-weight: bold;
                    letter-spacing: 2px;
                    color: #ff9000;
                    user-select: none;
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
                    margin-bottom: 15px;
                    font-size: 14px;
                    font-weight: 100;
                    letter-spacing: .5px;
                    cursor: pointer;
                    border: 1px solid #000;
                    display: flex;
                    align-items: center;
                    user-select: none;
                }
                .dashboard_section:hover {
                    border-color: #ff9000;
                    color: #ff9000;
                }
                .dashboard_section.show {
                    color: #000;
                    background-color: #ff9000;
                }
                .dashboard_section.show:hover {
                    color: #000;
                }

                .dashboard_box {
                    background-color: #000;
                    width: calc(100% - 410px);
                    height: calc(100% - 100px);
                    padding: 50px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    overflow-y: scroll;
                }
                .dashboard_box::-webkit-scrollbar {
                    width: 7px;
                }

                .dashboard_box::-webkit-scrollbar-track {
                    background: #111;
                }
                
                .dashboard_box::-webkit-scrollbar-thumb {
                    background: #191919;
                }
                
                .dashboard_box::-webkit-scrollbar-thumb:hover {
                    background: #333;
                }

                .subscription_time, .dashboard_inf_box {
                    background-color: #111;
                    width: 300px;
                    height: 100px;
                    color: #ff9000;
                    display: flex;
                    align-items: center;
                    padding: 30px 40px;
                    border-radius: 10px;
                }

                .calendar_icon {
                    font-size: 30px;
                    margin-left: 20px;
                }

                .timer {
                    display: flex;
                    color: #fff;
                    font-size: 24px;
                }

                .timer span {
                    margin: 0 5px;
                }

                .time {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .time span {
                    background-color: #000;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-size: 10px;
                    font-family: Vazir;
                }

                .dashboard_inf_box {
                    background-color: #111;
                    width: 200px;
                    height: fit-content;
                    display: flex;
                    align-items: center;
                    margin-right: 17px;
                    height: 120px;
                    padding: 20px 0;
                    border-radius: 10px;
                    flex-direction: column;
                }

                .dashboard_inf_box_title {
                    margin-bottom: 5px;
                    color: #fff;
                    font-family: Vazir;
                    font-size: 13px;
                    letter-spacing: .5px;
                }

                .user_inf_boxes_1 .dashboard_inf_icon {
                    color: #ff9000;
                    font-size: 26px;
                    color: #ff9000;
                    margin: 8px 0 0 15px;
                }

                .dashboard_inf_number {
                    font-size: 30px;
                    color: #ff9000;
                    display: flex;
                    align-items: center;
                }

                .dashboard_inf_top_content {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    width: calc(100% - 90px);
                    direction: ltr;
                }

                .show_more_box {
                    background-color: #ff9000;
                    color: #000;
                    font-size: 10px;
                    padding: 4px 10px;
                    border-radius: 5px;
                    margin-top: 15px;
                    cursor: pointer;
                    transition: .2s;
                    user-select: none;
                    border: 1px solid #ff9000;
                    font-family: Vazir;
                    font-weight: bolder;
                }
                .show_more_box:hover {
                    background: none;
                    color: #ff9000;
                }

                .user_inf_boxes, .user_inf_boxes_1 {
                    width: 425px;
                    height: 345px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-content: space-between;
                }

                .user_inf_boxes_1 {
                    flex-wrap: nowrap;
                    width: calc(100% - 380px);
                    align-items: center;
                    height: fit-content;
                }

                .user_inf_boxes .dashboard_inf_box {
                    margin: 0;
                }

                .user_inf_boxes .dashboard_inf_box .dashboard_inf_top_content {
                    justify-content: center;
                }

                .user_inf_boxes .dashboard_inf_box .dashboard_inf_icon {
                    color: #ff9000;
                    font-size: 34px;
                    color: #ff9000;
                    margin: 0;
                }

                .dashboard_inf_box_description {
                    margin-top: 3px;
                    letter-spacing: .5px;
                    font-weight: 100;
                    font-size: 18px;
                }

                .dashboard_inf_box_description span {
                    font-size: 14px;
                    margin: 0 2px;
                }

                .user_tickets {
                    width: 580px;
                    height: 305px;
                    padding: 20px 0;
                    background-color: #111;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .user_tickets_title_box {
                    border-bottom: 1px solid #333;
                    height: 70px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: calc(100% - 150px);
                    padding: 0 40px;
                    font-size: 20px;
                    letter-spacing: .5px;
                }

                .user_tickets_title_box span {
                    color: #000;
                    font-size: 11px;
                    padding: 5px 12px;
                    border-radius: 5px;
                    background-color: #ff9000;
                    cursor: pointer;
                    transition: .2s;
                    font-family: Vazir;
                    font-weight: bold;
                    border: 1px solid #ff9000;
                }
                .user_tickets_title_box span:hover {
                    background: none;
                    color: #ff9000;
                }

                .tickets_box {
                    width: calc(100% - 120px);
                    margin-top: 30px;
                    height: calc(100% - 100px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 40px;
                    background-color: #181818;
                    border-radius: 5px;
                }

                .tickets_box span {
                    margin-bottom: 20px;
                    color: #999;
                    font-size: 20px;
                    padding: 10px 50px;
                }
            `}</style>
        </div>
    )
}

export default Pannel