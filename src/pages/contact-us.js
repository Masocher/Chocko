// components
import Header from "./../components/header"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadphones } from "@fortawesome/free-solid-svg-icons"

const ContactUs = () => {
    return (
        <div className="contact_us_container">
            <Header />

            <div className="contact_us_title_box">
                <div className="contact_us_title">ارتباط با ما</div>
                <div className="contact_us_title_des">در این صفحه میتوانید اطلاعات ارتباطی چوکو را مشاهده کنید</div>
            </div>

            <div className="contact_us_sections">
                <div className="contact_boxes">
                    <div className="contact_box">
                        <span>شماره تماس</span> <br />
                        09012345678
                    </div>

                    <div className="contact_box">
                        <span>ایمیل</span> <br />
                        email@example.com
                    </div>

                    <div className="contact_box">
                        <span>اینستاگرام</span> <br />
                        example@
                    </div>

                    <div className="contact_box">
                        <span>تلگرام</span> <br />
                        example@
                    </div>
                </div>

                <div className="send_message_form">
                    <span><FontAwesomeIcon icon={faHeadphones} /></span>
                    <div className="message_form_title">فرم تماس با ما</div>
                    <div className="message_form_title_des">شما میتوانید از طریق فرم زیر پیام خودرا برای ما ارسال کنید</div>
                    {/* <hr className="box_bottom_border" /> */}

                    <form className="sign_container">
                        <input className="sign_input" placeholder="نام خودرا وارد کنید" />  
                        <input className="sign_input" placeholder="ایمیل خودرا وارد کنید" />  
                        <textarea className="sign_input" placeholder="پیام خودرا وارد کنید" />  

                        <div className="submit_btn">ارسال پیام</div>
                    </form>                    
                </div>
            </div>

            <style jsx>{`
                textarea {
                    resize: none;
                    height: 100px;
                }

                .contact_us_container {
                    color: #757575;
                    padding-bottom: 1px;
                }

                .sign_container {
                    height: fit-content;
                    margin-top: 40px;
                }

                .sign_input {
                    background-color: #090909;
                    border-color: #252525;
                    padding: 10px 20px;
                    margin-bottom: 12px;
                    width: 280px;
                }
                .sign_input::placeholder {
                    color: #505050;
                    font-size: 13px;
                }
                .sign_input:focus {
                    border-color: #404040;
                }

                .submit_btn {
                    padding: 5px 10px;
                }

                .contact_us_sections {
                    display: flex;
                    justify-content: center;
                    margin: 50px 0;
                    width: 100%;
                }

                .contact_us_title_box {
                    text-align: center;
                    margin: 50px 0 20px 0;
                }

                .contact_us_title {
                    font-size: 50px;
                    color: #757575;
                    margin: 0;
                    padding: 0;
                }

                .contact_us_title_des {
                    font-size: 18px;
                    font-weight: 100;
                    color: #454545;
                    position: relative;
                    bottom: 5px;
                }

                .contact_boxes {
                    direction: rtl;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-direction: column;
                }

                .contact_box {
                    background-color: #111;
                    width: 230px;
                    margin: 0 20px;
                    padding: 25px 20px;
                    letter-spacing: 1px;
                    text-align: center;
                    border-radius: 10px;
                }
                .contact_box span {
                    font-size: 20px;
                    margin-bottom: 5px;
                    letter-spacing: 0;
                }

                .send_message_form {
                    background-color: #111;
                    width: 500px;
                    margin: 0;
                    position: relative;
                    padding: 40px 0;
                    border-radius: 10px;
                }

                .message_form_title {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    font-size: 26px;
                    font-weight: 100;
                }

                .send_message_form span {
                    margin-left: 10px;
                    font-size: 22px;
                    width: 30px;
                    height: 30px;
                    background-color: #ff9000;
                    color: #000;
                    padding: 10px;
                    border-radius: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    position: absolute;
                    right: 40px;
                    top: -20px;
                }

                .message_form_title_des {
                    font-size: 16px;
                    color: #505050;
                    text-align: center;
                    margin-top: 5px;
                }
            `}</style>
        </div>
    )
}

export default ContactUs