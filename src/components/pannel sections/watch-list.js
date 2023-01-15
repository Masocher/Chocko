// redux
import { useSelector } from "react-redux"

// components
import Movie from "../movie"


const WatchList = () => {

    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)
    const filmsAndSerialsInformation = useSelector(rootReducer => rootReducer.reducer_11)

    return (
        <div className={`watch_list_container ${dashboardSectionsNumber === 3 ? 'show' : ''}`}>
            <div className="watch_list_box">
                {
                    filmsAndSerialsInformation.map(movie => <Movie key={movie.id} title={movie.title} />)
                }
            </div>
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

                .watch_list_box {
                    background-color: #000;
                    width: 100%;
                    height: 100%;
                    padding: 50px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    overflow-y: scroll;
                    align-items: flex-start;
                }
                .watch_list_box::-webkit-scrollbar {
                    width: 7px;
                }
                .watch_list_box::-webkit-scrollbar-track {
                    background: #111;
                }
                .watch_list_box::-webkit-scrollbar-thumb {
                    background: #191919;
                }
                .watch_list_box::-webkit-scrollbar-thumb:hover {
                    background: #333;
                }
            `}</style>
        </div>
    )
}

export default WatchList