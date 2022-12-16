// tools
import { useRouter } from "next/router"

// redux
import { useSelector } from "react-redux"

// components
import Header from "../../components/header"
import Footer from "../../components/footer"

const SerialPage = () => {
    const router = useRouter()

    const filmsAndSerialsInformation = useSelector(rootReducer => rootReducer.reducer_11)

    const serialInformation = filmsAndSerialsInformation[0][router.query.serialId]

    return (
        <div className="serial_box_container" style={{ color: "#fff" }}>
            <Header />

            <div className="serial_box">
                <div className="serial_cover"></div>
                <div className="serial_title">{serialInformation.category}-{router.query.serialId}</div>
            </div>

            <Footer />

            <style jsx>{`
                .serial_box {
                    width: calc(100% - 100px);
                    direction: rtl;
                    margin: 50px;
                    display: flex;
                }

                .serial_cover {
                    background-color: #222;
                    border-radius: 10px;
                    width: 275px;
                    height: 350px;
                }
            `}</style>
        </div>
    )
}

export default SerialPage