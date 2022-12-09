// components
import Header from "./../components/header"

const ContactUs = () => {
    return (
        <div className="contact_us_container">
            <Header />

            <div className="contact_us_title_box">
                <div className="contact_us_title">ارتباط با ما</div>
                <div className="contact_us_title_des">در این صفحه میتوانید اطلاعات ارتباطی چوکو را مشاهده کنید</div>
                <hr className="box_bottom_border" />
            </div>

            

            <style jsx>{`
                .contact_us_title_box {
                    text-align: center;
                    margin: 40px 0 20px 0;
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
            `}</style>
        </div>
    )
}

export default ContactUs