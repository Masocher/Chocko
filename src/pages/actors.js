// components
import Header from "../components/header"
import Footer from "../components/footer"

// redux
import { useSelector } from "react-redux"

const Actors = () => {

    const actors = useSelector(rootReducer => rootReducer.reducer_13)

    return (
        <div className="actors_container">
            <Header />

            <div className="actors_title_box">
                <div className="actors_title">هنرمندان</div>
                <div className="actors_title_des">در این صفحه میتوانید به بیوگرافی و اطلاعات بازیگران ، نویسندگان و مابقی هنرمندان دسترسی داشته باشید</div>
            </div>

            <div className="actors">
                {
                    actors.map(actor =>
                        <div className="actor" key={ actor.id }>
                            <div className="actor_name">{ actor.name }</div>
                        </div>
                    )
                }
            </div>

            <Footer />

            <style jsx>{`
                .actors_title_box {
                    text-align: center;
                    margin: 50px 0 55px 0;
                }

                .actors_title {
                    font-size: 50px;
                    color: #757575;
                    margin: 0;
                    padding: 0;
                }

                .actors_title_des {
                    font-size: 18px;
                    font-weight: 100;
                    color: #454545;
                    position: relative;
                    bottom: 5px;
                }

                .actors {
                    width: calc(100% - 60px);
                    padding: 0 30px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    color: #757575;
                }

                .actor {
                    background-color: #111;
                    width: 200px;
                    height: 280px;
                    border-radius: 10px;
                    margin: 0 20px 70px 20px;
                    position: relative;
                }

                .actor_name {
                    position: absolute;
                    bottom: -35px;
                    left: 5px;
                }
            `}</style>
        </div>
    )
}

export default Actors