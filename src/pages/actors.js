// components
import Header from "../components/header"
import Footer from "../components/footer"

// redux
import { useSelector } from "react-redux"

const Actors = () => {

    const actors = useSelector(rootReducer => rootReducer.reducer_12)

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
                    font-size: 14px;
                    font-weight: 100;
                }

                @media (max-width: 550px) {
                    .actors_title_des {
                        margin: 0 20px;
                    }

                    .actors {
                        width: calc(100% - 40px);
                        padding: 0 20px;
                        justify-content: space-evenly;
                    }

                    .actor {
                        width: 45%;
                        margin: 0 0 70px 0;
                    }
                }

                @media (max-width: 426px) {
                    .actors {
                        width: calc(100% - 100px);
                        padding: 0 50px;
                    }

                    .actor {
                        width: 300px;
                        height: 400px;
                        margin: 0 0 70px 0;
                    }
                }

                @media (max-width: 376px) {
                    .actor {
                        height: 370px;
                    }
                }

                @media (max-width: 321px) {
                    .actors {
                        width: calc(100% - 80px);
                        padding: 0 40px;
                    }

                    .actor {
                        width: 100%;
                        height: 320px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Actors