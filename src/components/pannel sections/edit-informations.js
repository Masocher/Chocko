// redux
import { useSelector } from "react-redux"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons"

const EditInformations = () => {

    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)

    return (
        <div className={`edit_informations_container ${dashboardSectionsNumber === 5 ? 'show' : ''}`}>
            
            <div className="edit_informations_box">
                <div className="informations_box">
                    <div className="input_boxes">
                        <div className="input_box">
                            <span>نام کاربری</span>
                            <input type='text' className="inf_input" />
                        </div>

                        <div className="input_box">
                            <span>ایمیل</span>
                            <input type='email' dir="ltr" className="inf_input" />
                        </div>
                    </div>

                    <div className="input_boxes">
                        <div className="input_box">
                            <span>نام و نام خانوادگی ( فارسی )</span>
                            <input type='text' className="inf_input" />
                        </div>

                        <div className="input_box">
                            <span>شماره موبایل</span>
                            <input type='text' className="inf_input" />
                        </div>
                    </div>

                    <div className="input_boxes">
                        <div className="input_box">
                            <span>رمز عبور</span>
                            <input type='password' className="inf_input pass_input" />
                            <div className="lock_icon"><FontAwesomeIcon icon={faLock} /></div>
                        </div>

                        <div className="input_box">
                            <span>تکرار رمز عبور</span>
                            <input type='password' className="inf_input pass_input" />
                            <div className="lock_icon"><FontAwesomeIcon icon={faLock} /></div>
                        </div>
                    </div>

                    <div className="password_description">اگه میخوای رمزتو تغییر بدی رمز جدیدتو اینجا بنویس در غیر این صورت خالی رهاش کن.</div>
                    
                    <div className="save_changes_btn">ذخیره اطلاعات</div>
                </div>
            </div>

            <style jsx>{`
                .edit_informations_container {
                    width: calc(100% - 420px);
                    height: 100%;
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    background-color: #000;
                }
                .edit_informations_container.show {
                    display: flex;
                }

                .edit_informations_box {
                    width: 100%;
                    height: 100%;
                    background-color: #111;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .informations_box {
                    width: 650px;
                }

                .input_boxes {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 35px;
                }

                .input_box {
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }

                span {
                    font-family: Vazir;
                    font-size: 11px;
                    margin: 0 25px 10px 0;
                    color: #ccc;
                }

                .inf_input {
                    background-color: #000;
                    border: 1px solid #000;
                    padding: 20px 25px;
                    border-radius: 15px;
                    color: #fff;
                    outline: 0;
                    font-size: 14px;
                    font-family: Vazir;
                    width: 250px;
                    letter-spacing: .5px;
                    transition: .2s;
                }
                .inf_input:focus {
                    border-color: #ff9000;
                }

                .save_changes_btn {
                    padding: 10px 40px;
                    border-radius: 10px;
                    font-size: 14px;
                    border: 1px solid;
                    background-color: #ff9000;
                    color: #000;
                    transition: .2s;
                    cursor: pointer;
                    width: fit-content;
                    margin: 40px auto 0 auto;
                }
                .save_changes_btn:hover {
                    background: none;
                    color: #ff9000;
                }

                .lock_icon {
                    position: absolute;
                    top: 47px;
                    right: 25px;
                }

                .pass_input {
                    width: 180px;
                    padding: 20px 60px;
                }
                
                .password_description {
                    font-family: Vazir;
                    font-size: 12px;
                    letter-spacing: .5px;
                    margin: -10px 10px 0 0;
                }

                @media (max-width: 1140px) {
                    .informations_box {
                        width: 500px;
                    }

                    .inf_input {
                        width: 180px;
                    }

                    .pass_input {
                        width: 110px;
                    }
                }

                @media (max-width: 1025px) {
                    .edit_informations_container {
                        width: 100%;
                    }

                    .password_description {
                        font-size: 10px;
                        letter-spacing: 0;
                        margin: -15px 10px 0 0;
                    }
                }

                @media (max-width: 426px) {
                    .informations_box {
                        width: 360px;
                    }

                    .input_boxes {
                        margin-bottom: 25px;
                    }

                    .inf_input {
                        width: 130px;
                        padding: 15px 20px;
                        font-size: 12px;
                        letter-spacing: 0;
                    }

                    .pass_input {
                        width: 90px;
                        padding: 15px 40px;
                    }

                    span {
                        font-size: 10px;
                        margin: 0 15px 7px 0;
                    }

                    .password_description {
                        margin: -5px 10px 0 0;
                    }

                    .lock_icon {
                        top: 38px;
                        right: 20px;
                        font-size: 12px;
                    }

                    .save_changes_btn {
                        padding: 10px 30px;
                        font-size: 12px;
                        margin: 30px auto 0 auto;
                    }
                }

                @media (max-width: 376px) {
                    .edit_informations_container {
                        width: 100%;
                        margin-top: 10px;
                    }

                    .password_description {
                        width: 65%;
                        margin: -5px auto 0 auto;
                        text-align: center;
                        line-height: 22px;
                    }

                    span {
                        font-size: 8px;
                    }

                    .informations_box {
                        width: 320px;
                    }

                    .input_boxes {
                        margin-bottom: 20px;
                    }

                    .inf_input {
                        width: 110px;
                        padding: 12px 20px;
                        font-size: 12px;
                        letter-spacing: 0;
                    }

                    .lock_icon {
                        top: 34px;
                        right: 18px;
                        font-size: 10px;
                    }

                    .pass_input {
                        width: 80px;
                        padding: 12px 35px;
                    }

                    .save_changes_btn {
                        padding: 10px 50px;
                        font-size: 10px;
                        letter-spacing: .5px;
                        margin: 20px auto 0 auto;
                    }
                }

                @media (max-width: 321px) {
                    .informations_box {
                        width: 280px;
                    }

                    .inf_input {
                        width: 95px;
                        padding: 12px 18px;
                        font-size: 10px;
                    }

                    .pass_input {
                        width: 60px;
                        padding: 12px 35px;
                    }

                    .lock_icon {
                        top: 30px;
                        right: 18px;
                        font-size: 10px;
                    }

                    .password_description {
                        width: 60%;
                        margin: -10px auto 0 auto;
                        line-height: 16px;
                        font-size: 8px;
                    }

                    span {
                        font-size: 6px;
                    }

                    .save_changes_btn {
                        padding: 10px 80px;
                    }
                }
            `}</style>
        </div>
    )
}

export default EditInformations