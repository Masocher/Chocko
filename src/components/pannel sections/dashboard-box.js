// redux
import { useSelector } from "react-redux"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCrown, faRotate, faEarth, faCalendarAlt, faMessage, faVideoCamera, faPlayCircle } from "@fortawesome/free-solid-svg-icons"

const DashboardBox = () => {

    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)

    return (
        <div className={`dashboard_container ${dashboardSectionsNumber === 1 ? 'show' : ''}`}>
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

            <style jsx>{`
                .dashboard_container {
                    width: 100%;
                    height: 100%;
                    display: none;
                }
                .dashboard_container.show {
                    display: flex;
                }

                .dashboard_box {
                    background-color: #000;
                    width: 100%;
                    height: 100%;
                    padding: 50px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    overflow-y: scroll;
                    align-items: flex-start;
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

                .user_inf_boxes {
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
                    display: flex;
                    justify-content: space-between;
                    align-content: space-between;
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
                    width: 560px;
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

                @media (max-width: 1520px) {
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
                        margin: 25px 0 100px 0;
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

                @media (max-width: 1422px) {
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
                    .dashboard_box {
                        justify-content: center;
                        padding: 50px 20px;
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
                    .dashboard_box {
                        padding: 135px 0 0 0;
                        height: 420px;
                        width: 100%;
                        position: relative;
                    }

                    .user_tickets {
                        margin-bottom: 30px;
                    }
                }

                @media (max-width: 426px) {
                    .dashboard_box {
                        height: 435px;
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

                    .show_more_box {
                        font-size: 8px;
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

                    .user_inf_boxes_1 {
                        width: 100%;
                        height: fit-content;
                    }

                    .subscription_time {
                        width: 100%;
                        border-radius: 0;
                    }
                }

                @media (max-width: 376px) {
                    .dashboard_box {
                        height: 435px;
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
                    .dashboard_box {
                        height: 440px;
                    }

                    .user_inf_boxes {
                        width: 95%;
                    }
                }
            `}</style>
        </div>
    )
}

export default DashboardBox