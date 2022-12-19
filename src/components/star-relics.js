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
        </div>
    )
}

export default StarRelics

export const getServerSideProps = (props) => {
    return {
        id: props.starId
    }
}