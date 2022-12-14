// components
import Header from "../components/header"
import Footer from "../components/footer"

const BuySubscription = () => {
    return (
        <div className="buy_subscription_container">
            <Header />

            <div className="buy_subscription_title_box">
                <div className="buy_subscription_title">خرید اشتراک</div>
                <div className="buy_subscription_title_des">با خرید اشتراک با تعداد ماه های بیشتر از رایگان بودن خدمات چوکو بهره مند بشید</div>
            </div>

            <Footer />

            <style jsx>{`
                .buy_subscription_title_box {
                    text-align: center;
                    margin: 50px 0 0 0;
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
            `}</style>
        </div>
    )
}

export default BuySubscription