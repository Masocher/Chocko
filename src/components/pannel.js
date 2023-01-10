// redux
import { useSelector, useDispatch } from "react-redux"
import { closeProfileBox, openDashboardSections } from "../redux/actions"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faStar, faHome, faClock, faCrown, faRotate, faEarth, faEdit, faCalendarAlt, faSquarePlus, faUser, faMessage, faVideoCamera, faPlayCircle } from "@fortawesome/free-solid-svg-icons"

const Pannel = () => {

    const dispatch = useDispatch()
    const profileBoxStatus = useSelector(rootReducer => rootReducer.reducer_15)
    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)

    return (
        <div className={`profile_container ${profileBoxStatus ? 'show' : ''}`}>
            <div className={`user_box_2 ${profileBoxStatus ? 'show' : ''}`}>
                <div className="user_img"></div>
                <div className="user_name">Masocher</div>
                <div className="user_phone_number">09031698509</div>
            </div>

            <div className="close_icon" onClick={() => dispatch(closeProfileBox())}><FontAwesomeIcon icon={faClose} /></div>

            <div className={`right_side_content ${profileBoxStatus ? 'show' : ''}`}>
                <div className="user_box">
                    <div className="user_img"></div>
                    <div className="user_name">Masocher</div>
                    <div className="user_phone_number">09031698509</div>
                </div>

                <div className="dashboard_sections">
                    <div className={`dashboard_section ${dashboardSectionsNumber == 1 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(1))}><FontAwesomeIcon icon={faHome} /> <div>داشبورد</div></div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 2 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(2))}><FontAwesomeIcon icon={faUser} /> <div>مشاهده پروفایل</div></div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 3 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(3))}><FontAwesomeIcon icon={faStar} /> <div>لیست تماشا</div></div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 4 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(4))}><FontAwesomeIcon icon={faCrown} /> <div>خرید اشتراک</div></div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 5 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(5))}><FontAwesomeIcon icon={faSquarePlus} /> <div>درخواست فیلم و سریال</div></div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 6 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(6))}><FontAwesomeIcon icon={faMessage} /> <div>کامنت ها</div></div>
                    <div className={`dashboard_section ${dashboardSectionsNumber == 7 ? 'show' : ''}`} onClick={() => dispatch(openDashboardSections(7))}><FontAwesomeIcon icon={faEdit} /> <div>ویرایش اطلاعات</div></div>
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
                        <div className="dashboard_inf_box_title">نظرات ارسال شده</div>
                        <div className="show_more_box">نمایش بیشتر</div>
                    </div>

                    <div className="dashboard_inf_box">
                        <div className="dashboard_inf_top_content">
                            <div className="dashboard_inf_number">۰</div>
                            <div className="dashboard_inf_icon"><FontAwesomeIcon icon={faVideoCamera} /></div>
                        </div>
                        <div className="dashboard_inf_box_title">فیلم های درخواستی</div>
                        <div className="show_more_box">نمایش بیشتر</div>
                    </div>

                    <div className="dashboard_inf_box">
                        <div className="dashboard_inf_top_content">
                            <div className="dashboard_inf_number">۱۲</div>
                            <div className="dashboard_inf_icon"><FontAwesomeIcon icon={faPlayCircle} /></div>
                        </div>
                        <div className="dashboard_inf_box_title">لیست مورد علاقه</div>
                        <div className="show_more_box">نمایش بیشتر</div>
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
                    overflow-y: scroll;
                    background-color: #000;
                }
                .profile_container::-webkit-scrollbar {
                    width: 7px;
                }
                .profile_container::-webkit-scrollbar-track {
                    background: #111;
                }
                .profile_container::-webkit-scrollbar-thumb {
                    background: #191919;
                }
                .profile_container::-webkit-scrollbar-thumb:hover {
                    background: #333;
                }
                .profile_container.show {
                    bottom: 0;
                }

                .right_side_content {
                    width: 300px;
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 60px;
                    background-color: #111;
                }
                .right_side_content.show {
                    display: flex;
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
                    top: 55px;
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
                    margin-bottom: 15px;
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
                    text-align: center;
                }

                @media (max-width: 1514px) {
                    .dashboard_box {
                        justify-content: center;
                    }

                    .user_inf_boxes_1 {
                        width: 90%;
                        margin: 25px 0 25px 0;
                    }

                    .dashboard_inf_box {
                        margin-right: 0;
                    }

                    .user_tickets {
                        margin-top: 25px;
                        width: 90%;
                    }

                    .subscription_time {
                        width: 90%;
                        justify-content: center;
                        padding: 30px 0;
                    }

                    .user_inf_boxes {
                        width: 90%;
                        height: fit-content;
                        justify-content: space-between;
                        align-content: space-between;
                    }
                }

                @media (max-width: 1388px) {
                    .user_inf_boxes {
                        width: 425px;
                        height: 345px;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        align-content: space-between;
                    }
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

                    .dashboard_box {
                        justify-content: center;
                        padding: 50px;
                        height: 1050px;
                        width: calc(100% - 380px);
                    }

                    .close_icon {
                        width: 26px;
                        height: 26px;
                    }

                    .dashboard_inf_box {
                        width: 170px;
                        padding: 15px 0;
                    }

                    .user_inf_boxes .dashboard_inf_box .dashboard_inf_icon {
                        font-size: 30px;
                        margin-top: 5px;
                    }
                }

                @media (max-width: 769px) {
                    .profile_container {
                        justify-content: center;
                    }

                    .dashboard_box {
                        padding: 135px 0 200px 0;
                        height: 1000px;
                        width: 100%;
                        position: relative;
                    }

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
                    .dashboard_box {
                        height: 910px;
                    }

                    .user_tickets {
                        width: 90%;
                        height: 250px;
                        padding: 20px 0 10px 0;
                    }
    
                    .user_tickets_title_box {
                        height: 60px;
                        width: calc(100% - 70px);
                        padding: 0 15px;
                        font-size: 18px;
                    }

                    .user_inf_boxes {
                        width: 90%;
                        height: 345px;
                    }

                    .right_side_content.show {
                        height: 80px;
                    }

                    .dashboard_section {
                        width: 40px;
                        height: 40px;
                        font-size: 16px;
                    }

                    .show_more_box {
                        font-size: 8px;
                    }

                    .user_inf_boxes_1 {
                        width: 100%;
                    }
                    .user_inf_boxes_1 .dashboard_inf_box {
                        height: 120px;
                        wdith: 100%;
                        border-radius: 0;
                    }
                    .user_inf_boxes_1 .dashboard_inf_box .dashboard_inf_top_content .dashboard_inf_icon {
                        display: none;
                        margin: 0;
                    }
                    .user_inf_boxes_1 .dashboard_inf_box .dashboard_inf_top_content { 
                        justify-content: center;
                    }
                    .user_inf_boxes_1 .dashboard_inf_box .dashboard_inf_box_title {
                        font-size: 10px;
                    }

                    .subscription_time {
                        width: 100%;
                        border-radius: 0;
                    }
                }

                @media (max-width: 376px) {
                    .dashboard_box {
                        height: 810px;
                    }

                    .user_inf_boxes {
                        width: 82%;
                        height: 290px;
                    }

                    .timer {
                        font-size: 20px;
                    }
    
                    .time span {
                        padding: 3px 5px;
                    }

                    .subscription_time {
                        padding: 20px 30px;
                    }

                    .user_inf_boxes .dashboard_inf_box {
                        width: 145px;
                        height: 110px;
                    }

                    .dashboard_inf_box_description {
                        font-size: 16px;
                    }

                    .tickets_box span {
                        margin-bottom: 10px;
                    }

                    .user_tickets {
                        height: 230px;
                    }
                }

                @media (max-width: 321px) {
                    .user_inf_boxes {
                        width: 95%;
                    }

                    .dashboard_section {
                        width: 33px;
                        height: 33px;
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Pannel