// components
import Header from "../components/header"
import Footer from "../components/footer"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const BuySubscription = () => {
    return (
        <div className="buy_subscription_container">
            <Header />

            <div className="buy_subscription_title_box">
                <div className="buy_subscription_title">خرید اشتراک</div>
                <div className="buy_subscription_title_des">با خرید اشتراک با تعداد ماه های بیشتر از خدمات چوکو بهره مند بشید</div>
            </div>

            <div className="subscriptions_box">
                <div className="subscription">
                    <div className="subscription_title">۳۰ روزه</div>
                    <div className="subscription_price">۳۰,۰۰۰ <span>تومان</span></div>
                    <div className="advantages">
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> تماشای آنلاین</div>
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> امکان دانلود فیلم ها و سریال ها</div>
                    </div>
                    <div className="buy_btn">خرید</div>
                </div>

                <div className="subscription">
                    <div className="subscription_title">۳ ماهه</div>
                    <div className="subscription_price">۸۵,۰۰۰ <span>تومان</span></div>
                    <div className="advantages">
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> تماشای آنلاین</div>
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> امکان دانلود فیلم ها و سریال ها</div>
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> استفاده از سیستم پشتیبانی چوکو</div>
                    </div>
                    <div className="buy_btn">خرید</div>
                </div>

                <div className="subscription">
                    <div className="subscription_title">۶ ماهه</div>
                    <div className="subscription_price">۱۵۵,۰۰۰ <span>تومان</span></div>
                    <div className="advantages">
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> تماشای آنلاین</div>
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> امکان دانلود فیلم ها و سریال ها</div>
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> استفاده از سیستم پشتیبانی چوکو</div>
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> درخواست فیلم و سریال</div>
                    </div>
                    <div className="buy_btn">خرید</div>
                </div>

                <div className="subscription">
                    <div className="subscription_title">۱ ساله</div>
                    <div className="subscription_price">۲۸۰,۰۰۰ <span>تومان</span></div>
                    <div className="advantages">
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> تماشای آنلاین</div>
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> امکان دانلود فیلم ها و سریال ها</div>
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> استفاده از سیستم پشتیبانی چوکو</div>
                        <div className="advantage_box"><div className="icon_box"><FontAwesomeIcon icon={faCheck} /></div> درخواست فیلم و سریال</div>
                    </div>
                    <div className="buy_btn">خرید</div>
                </div>
            </div>

            <Footer />

            <style jsx>{`
                .buy_subscription_title_box {
                    text-align: center;
                    margin: 50px 0 55px 0;
                }

                .buy_subscription_title {
                    font-size: 50px;
                    color: #757575;
                    margin: 0;
                    padding: 0;
                }

                .buy_subscription_title_des {
                    font-size: 18px;
                    font-weight: 100;
                    color: #454545;
                    position: relative;
                    bottom: 5px;
                }

                .subscriptions_box {
                    width: calc(100% - 60px);
                    height: fit-content;
                    padding: 40px 30px;
                    background-color: #111;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    direction: rtl;
                }

                .subscription {
                    background-color: #000;
                    height: calc(100% - 110px);
                    width: 350px;
                    border-radius: 30px;
                    color: #999;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 40px 0 55px 0;
                }

                .subscription_title {
                    font-size: 26px;
                    font-weight: 100;
                    width: 80px;
                    text-align: center;
                    padding: 10px 20px;
                    border-radius: 50px;
                    background-color: #111;
                    color: #757575;
                    margin-bottom: -10px;
                }

                .advantages {
                    width: 80%;
                    border-top: 1px solid #333;
                    padding-top: 30px;
                }

                .advantage_box {
                    display: flex;
                    font-size: 14px;
                    font-weight: 100;
                    margin: 10px 20px 10px 0;
                }

                .icon_box {
                    background-color: #ff9000;
                    margin-left: 10px;
                    color: #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    width: 17px;
                    height: 17px;
                    font-size: 11px;
                }

                .buy_btn {
                    font-size: 18px;
                    background-color: #ff9000;
                    color: #000;
                    margin-top: 30px;
                    width: 75%;
                    padding: 8px 0;
                    text-align: center;
                    border-radius: 10px;
                    transition: .2s;
                    cursor: pointer;
                    border: 1px solid #ff9000;
                }
                .buy_btn:hover {
                    background: none;
                    color: #ff9000;
                }

                .subscription_price {
                    color: #ff9000;
                    font-size: 40px;
                    background-color: #000;
                    position: relative;
                    top: 30px;
                    padding: 0 20px;
                }
                
                .subscription_price span {
                    font-size: 14px;
                    color: #999;
                    letter-spacing: .5px;
                    position: relative;
                    bottom: 5px;
                    right: 2px;
                }

                @media (max-width: 1480px) {
                    .subscriptions_box {
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                    }

                    .subscription {
                        width: 40%;
                        margin-top: 20px;
                    }
                }

                @media (max-width: 820px) {
                    .subscriptions_box {
                        flex-direction: column;
                        align-items: center;
                    }

                    .subscription {
                        width: 100%;
                        margin-top: 20px;
                    }
                }

                @media (max-width: 426px) {
                    .buy_subscription_title_des {
                        margin: 0 20px;
                    }
                }

                @media (max-width: 321px) {
                    .advantages {
                        width: 81%;
                    }
                }
            `}</style>
        </div>
    )
}

export default BuySubscription