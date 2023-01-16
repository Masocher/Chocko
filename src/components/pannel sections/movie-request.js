// redux
import { useSelector } from "react-redux"

const MovieRequest = () => {

    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)

    return (
        <div className={`movie_request_container ${dashboardSectionsNumber === 5 ? 'show' : ''}`}>
            Hello World

            <style jsx>{`
                .movie_request_container {
                    width: calc(100% - 420px);
                    height: 100%;
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    position: relative;
                    padding: 0 50px;
                    background-color: #000;
                }
                .movie_request_container.show {
                    display: flex;
                }
            `}</style>
        </div>
    )
}

export default MovieRequest