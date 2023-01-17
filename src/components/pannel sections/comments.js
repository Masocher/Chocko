// redux
import { useSelector } from "react-redux"

const Comments = () => {

    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)
    
    return (
        <div className={`comments_container ${dashboardSectionsNumber === 6 ? 'show' : ''}`}>
            
            <div className="comments_box">
                Hello World
            </div>

            <style jsx>{`
                .comments_container {
                    width: calc(100% - 420px);
                    height: 100%;
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    position: relative;
                    padding: 0 50px;
                }
                .comments_container.show {
                    display: flex;
                }

                .comments_box {
                    background-color: #000;
                    height: calc(100% - 100px);
                    width: 100%;
                    padding: 50px;
                }
            `}</style>
        </div>
    )
}

export default Comments