// redux
import { useSelector } from "react-redux"

const EditInformations = () => {

    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)

    return (
        <div className={`edit_informations_container ${dashboardSectionsNumber === 5 ? 'show' : ''}`}>
            Hello World

            <style jsx>{`
                .edit_informations_container {
                    width: calc(100% - 420px);
                    height: 100%;
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    background-color: #000;
                }
                .edit_informations_container.show {
                    display: flex;
                }
            `}</style>
        </div>
    )
}

export default EditInformations