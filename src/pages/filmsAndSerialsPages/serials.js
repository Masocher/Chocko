// redux
import { useSelector } from "react-redux"

// tools
import Link from "next/link"

// components
import Header from "../../components/header"
import Footer from "../../components/footer"

const Serials = () => {

    const itemsInformation = useSelector(rootReducer => rootReducer.reducer_11)

    return (
        <div className="items_coantiner">
            <Header />

            <div className="items">
                {
                    itemsInformation[0].map(serial =>
                        <div key={serial.id} className="item_box">
                            <Link href="/[itemCategory]/[itemId]" as={`/${serial.categoryNumber}/${serial.id}`}>
                                <div className="item_content">
                                    <div className="item_title">{serial.category}</div>
                                </div>
                            </Link>
                        </div>    
                    )
                }
            </div>

            <Footer />

            <style jsx>{`
                .items_coantiner {
                    display: flex;
                    flex-direction: column;
                }

                .items {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .item_box {
                    width: 199px;
                    height: 280px;
                    position: relative;
                    margin: 60px 20px 0 20px;
                }

                .item_content {
                    background-color: #222;
                    border-radius: 10px;
                    color: #fff;
                    font-size: 22px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    width: 100%;
                    height: 100%;
                }

                .item_title {
                    position: absolute;
                    bottom: -35px;
                    left: 5px;
                    font-weight: 100;
                    font-size: 16px;
                    letter-spacing: .5px;
                }
            `}</style>
        </div>
    )
}

export default Serials