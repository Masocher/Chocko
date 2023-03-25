// redux
import { useSelector } from "react-redux"

const Loading = () => {

    const loadingStatus = useSelector(rootReducer => rootReducer.reducer_17)

    return (
        <div className={`loading_coantiner ${loadingStatus ? 'show' : ''}`}>
            <div className="loading_box">
                <div className="logo_box">CHO|CKO</div>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <style>{`
                .loading_coantiner {
                    background-color: rgba(0, 0, 0, .8);
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: none;
                    z-index: 100;
                }
                .loading_coantiner.show {
                    display: flex;
                }

                .loading_box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    background-color: #111;
                    padding: 30px 60px;
                    border-radius: 10px;
                }

                .logo_box {
                    font-size: 35px;
                    font-weight: bold;
                    letter-spacing: 2px;
                    color: #ff9000;
                    user-select: none;
                }

                .lds-ellipsis {
                    display: inline-block;
                    position: relative;
                    width: 80px;
                    height: 45px;
                    margin-top: -25px;
                }

                .lds-ellipsis div {
                    position: absolute;
                    top: 33px;
                    width: 13px;
                    height: 13px;
                    border-radius: 50%;
                    background: #ff9000;
                    animation-timing-function: cubic-bezier(0, 1, 1, 0);
                }

                .lds-ellipsis div:nth-child(1) {
                    left: 8px;
                    animation: lds-ellipsis1 0.6s infinite;
                }

                .lds-ellipsis div:nth-child(2) {
                    left: 8px;
                    animation: lds-ellipsis2 0.6s infinite;
                }

                .lds-ellipsis div:nth-child(3) {
                    left: 32px;
                    animation: lds-ellipsis2 0.6s infinite;
                }

                .lds-ellipsis div:nth-child(4) {
                    left: 56px;
                    animation: lds-ellipsis3 0.6s infinite;
                }

                @keyframes lds-ellipsis1 {
                    0% {
                        transform: scale(0);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                @keyframes lds-ellipsis3 {
                    0% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(0);
                    }
                }

                @keyframes lds-ellipsis2 {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(24px, 0);
                    }
                }
            `}</style>
        </div>
    )
}

export default Loading