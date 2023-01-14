// redux
import { useSelector } from "react-redux"

const WatchList = () => {

    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)

    return (
        <div className={`watch_list_container ${dashboardSectionsNumber === 3 ? 'show' : ''}`}>
            Hello World

            <style jsx>{`
                .watch_list_container {
                    width: calc(100% - 420px);
                    height: 100%;
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    position: relative;
                    padding: 0 50px;
                }

                .watch_list_container.show {
                    display: flex;
                }
            `}</style>
        </div>
    )
}

export default WatchList