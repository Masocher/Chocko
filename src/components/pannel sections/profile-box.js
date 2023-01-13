// redux
import { useSelector, useDispatch } from "react-redux"
import { openDashboardSections } from "../../redux/actions"

// assets
import cover_img from './../../../public/images/user-images/cover-img.jpg'

// tools
import Image from 'next/legacy/image'

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faRotate } from "@fortawesome/free-solid-svg-icons"

const ProfileBox = () => {

    const dispatch = useDispatch()
    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)

    return (
        <div className={`profile_container ${dashboardSectionsNumber === 2 ? 'show' : ''}`}>
            <div className="profile_box">
                <div className="profile_user_box">
                    <Image style={{borderRadius: '10px'}} src={cover_img} fill height={700} objectFit="cover" />

                    <div className="user_informations_container">
                        <div className="user_informations_box">
                            <div className="user_information_box_1">
                                <div className="user_profile_img"></div>
                                <div className="user_name">Masocher</div>
                            </div>

                            <div className="user_information_box_2">
                                <div className="user_last_activity">
                                    <div className="clock_icon"><FontAwesomeIcon icon={faRotate} /></div>
                                    <div className="last_activity">آخرین فعالیت</div>
                                    <div className="last_activity_date">۱۴۰۱<span>/</span>۱۰<span>/</span>۲۰</div>
                                </div>

                                <div className="user_registery_date">
                                <div className="calendar_icon"><FontAwesomeIcon icon={faCalendarAlt} /></div>
                                    عضو از
                                    <div className="registery_date">۲ سال پیش</div>
                                </div>
                            </div>
                        </div>

                        <div className="edit_profile_information" onClick={() => dispatch(openDashboardSections(7))}>ویرایش پروفایل</div>
                    </div>
                </div>

                <div className="user_about_box">
                    <div className="user_about_title"><span>.</span> درباره من</div>

                    <div className="user_about_description">
                        طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌ بندی برای پر کردن صفحه و ارائه اولیه شکل ظاهری استفاده میکند.
                    </div>
                </div>
            </div>

            <style jsx>{`
                .profile_container {
                    width: calc(100% - 420px);
                    height: 100%;
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    position: relative;
                    padding: 0 50px;
                }
                .profile_container.show {
                    display: flex;
                }

                .profile_box {
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
                .profile_box::-webkit-scrollbar {
                    width: 7px;
                }
                .profile_box::-webkit-scrollbar-track {
                    background: #111;
                }
                .profile_box::-webkit-scrollbar-thumb {
                    background: #191919;
                }
                .profile_box::-webkit-scrollbar-thumb:hover {
                    background: #333;
                }

                .edit_profile_information {
                    background-color: #ff9000;
                    color: #000;
                    padding: 8px 25px;
                    border-radius: 5px;
                    border: 1px solid #ff9000;
                    font-size: 14px;
                    letter-spacing: .5px;
                    cursor: pointer;
                    transition: .2s;
                    margin-top: 10px;
                }
                .edit_profile_information:hover {
                    background: none;
                    color: #ff9000;
                }

                .profile_user_box {
                    width: calc(100% - 60px);
                    padding: 30px;
                    background-color: #111;
                    border-radius: 10px;
                }

                .user_informations_container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 200px 0 40px;
                }

                .user_informations_box {
                    position: relative;
                }

                .user_information_box_1 {
                    display: flex;
                    align-items: center;
                }

                .user_profile_img {
                    position: absolute;
                    top: -70px;
                    right: -160px;
                    width: 130px;
                    height: 130px;
                    background-color: #222;
                    border-radius: 50%;
                    border: 12px solid #111;
                }

                .user_name {
                    font-size: 30px;
                    letter-spacing: .5px;
                }

                .user_information_box_2 {
                    display: flex;
                    font-family: Vazir;
                    font-size: 12px;
                    color: #ccc;
                }

                .user_last_activity {
                    display: flex;
                    aling-items: center;
                }
                .last_activity_date {
                    margin-right: 5px;
                }
                .last_activity_date span {
                    font-size: 14px;
                    margin: 0 2px;
                }

                .user_registery_date {
                    display: flex;
                    aling-items: center;
                    margin-right: 10px;
                    border-right: 2px solid #333;
                    padding-right: 10px;
                }
                .registery_date {
                    margin-right: 3px
                }

                .calendar_icon, .clock_icon {
                    color: #ff9000;
                    margin: 1px 0 0 7px;
                }

                .user_about_box {
                    width: calc(100% - 100px);
                    padding: 20px 50px 40px 50px;
                    background-color: #111;
                    border-radius: 10px;
                    margin-top: 15px;
                }

                .user_about_title {
                    font-size: 30px;
                    letter-spacing: .5px;
                    padding-right: 20px;
                    position: relative;
                }

                .user_about_title span {
                    color: #ff9000;
                    font-size: 50px;
                    position: absolute;
                    top: -22px;
                    right: -1px;
                }

                .user_about_description {
                    font-family: Vazir;
                    margin-top: 15px;
                }
            `}</style>
        </div>
    )
}

export default ProfileBox