// redux
import { useSelector } from "react-redux"

const StarRelics = ({ starId }) => {

    const relics = useSelector(rootReducer => rootReducer.reducer_12)

    return (
        <div className="relics_container">
            {
                relics[starId].relics.map(relic =>
                    <div className="relic_box" key={relic.id}>
                        <div className="relice_img"></div>
                        <div className="relic_name">{relic.title}</div>
                    </div>
                )
            }

            <style jsx>{`
                .relics_container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .relic_box {
                    width: 150px;
                    height: 200px;
                    position: relative;
                    direction: ltr;
                    margin: 60px 10px 0 10px;
                }

                .relice_img {
                    width: 100%;
                    height: 100%;
                    background-color: #111;
                    border-radius: 10px;
                }

                .relic_name {
                    position: absolute;
                    color: #fff;
                    bottom: -30px;
                    left: 5px;
                    font-size: 12px;
                    letter-spacing: .5px;
                }

                @media (max-width: 426px) {
                    .relic_box {
                        margin: 40px 6px 20px 6px;
                    }
                }
            `}</style>
        </div>
    )
}

export default StarRelics

export const getServerSideProps = (props) => {
    return {
        id: props.starId
    }
}