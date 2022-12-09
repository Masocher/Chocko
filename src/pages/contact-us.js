// components
import Header from "./../components/header"

const ContactUs = () => {
    return (
        <div className="contact_us_container">
            <Header />

            <div className="contact_us_title_box">
                <div className="contact_us_title">ارتباط با ما</div>
                <div className="contact_us_title_des">در این صفحه میتوانید اطلاعات ارتباطی چوکو را مشاهده کنید</div>
            </div>

            <hr className="box_bottom_border" />

            <div className="contact_boxes">
                <div className="contact_box">
                    <span>شماره تماس</span> <br />
                    09012345678
                </div>
                <div className="contact_box">
                    <span>ایمیل</span> <br />
                    email@example.com
                </div>
            </div>

            <style jsx>{`
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
                    color: #505050;
                    position: relative;
                    bottom: 5px;
                }

                .box_bottom_border {
                    border: none;
                    height: 1px;
                    background-color: #ff9000;
                    width: 4%;
                    margin: 10px auto 0 auto;
                    opacity: 1;
                }

                .contact_boxes {
                    color: #757575;
                    direction: rtl;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 50px 0;
                }

                .contact_box {
                    background-color: #111;
                    width: 300px;
                    margin: 0 20px;
                    padding: 30px 20px;
                    letter-spacing: 1px;
                    text-align: center;
                    border-radius: 100px;
                }
                .contact_box span {
                    font-size: 20px;
                    margin-bottom: 5px;
                    letter-spacing: 0;
                }
            `}</style>
        </div>
    )
}

export default ContactUs