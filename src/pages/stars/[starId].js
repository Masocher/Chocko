// tools
import Router from "next/router";

// redux
import { useSelector } from "react-redux";

// components
import Header from "../../components/header";
import Footer from "../../components/footer";

const StarPage = () => {
    const router = Router

    const filmsAndSerialsInformation = useSelector(rootReducer => rootReducer.reducer_12)

    const starInformation = filmsAndSerialsInformation[router.query.starId]

    return (
        <div className="star_box_container">
            <Header />

            <div className="star_box">
                <div className="right_side">
                    <div className="star_img"></div>
                </div>
            </div>

            <Footer />

            <style jsx>{`
                .star_box {
                    width: calc(100% - 100px);
                    direction: rtl;
                    margin: 100px 50px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }

                .star_img {
                    background-color: #222;
                    width: 275px;
                    height: 360px;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    )
}

export default StarPage