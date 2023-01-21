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
            `}</style>
        </div>
    )
}

export default EditInformations