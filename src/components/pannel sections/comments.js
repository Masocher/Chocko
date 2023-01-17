// redux
import { useSelector } from "react-redux"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const Comments = () => {

    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)
    
    return (
        <div className={`comments_container ${dashboardSectionsNumber === 6 ? 'show' : ''}`}>
            
            <div className="comments_boxes">
                <div className="comment">
                    <div className="comment_top_side">
                        <div className="comment_information">
                            <div className="user_image"></div>
                            <div className="user_name">Masocher</div>
                        </div>

                        <div className="comment_title">سریال black</div>
                    </div>

                    <div className="comment_description">طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌ بندی برای پر کردن صفحه و ارائه اولیه شکل ظاهری استفاده میکند.طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌ بندی برای پر کردن صفحه و ارائه اولیه شکل ظاهری استفاده میکند.</div>
                </div>

                <div className="comment">
                    <div className="comment_top_side">
                        <div className="comment_information">
                            <div className="user_image"></div>
                            <div className="user_name">Masocher</div>
                        </div>

                        <div className="comment_title">سریال black</div>
                    </div>

                    <div className="comment_description">طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌ بندی برای پر کردن صفحه و ارائه اولیه شکل ظاهری استفاده میکند.</div>
                </div>

                <div className="comment">
                    <div className="comment_top_side">
                        <div className="comment_information">
                            <div className="user_image"></div>
                            <div className="user_name">Masocher</div>
                        </div>

                        <div className="comment_title">سریال black</div>
                    </div>

                    <div className="comment_description">طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌ بندی برای پر کردن صفحه و ارائه اولیه شکل ظاهری استفاده میکند.</div>
                </div>

                <div className="comment">
                    <div className="comment_top_side">
                        <div className="comment_information">
                            <div className="user_image"></div>
                            <div className="user_name">Masocher</div>
                        </div>

                        <div className="comment_title">سریال black</div>
                    </div>

                    <div className="comment_description">طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌ بندی برای پر کردن صفحه و ارائه اولیه شکل ظاهری استفاده میکند.طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌ بندی برای پر کردن صفحه و ارائه اولیه شکل ظاهری استفاده میکند.طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌ بندی برای پر کردن صفحه و ارائه اولیه شکل ظاهری استفاده میکند.طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌ بندی برای پر کردن صفحه و ارائه اولیه شکل ظاهری استفاده میکند.</div>
                </div>
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

                .comments_boxes {
                    background-color: #000;
                    height: calc(100% - 100px);
                    width: 100%;
                    padding: 50px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }

                .comment {
                    background-color: #111;
                    padding: 30px;
                    border-radius: 10px;
                    width: calc(48% - 60px);
                    height: fit-content;
                }

                .comment_top_side {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }

                .comment_information {
                    display: flex;
                    align-items: center;
                }

                .user_image {
                    width: 50px;
                    height: 50px;
                    background-color: #333;
                    border-radius: 50%;
                }

                .user_name {
                    letter-spacing: .5px;
                    margin: 5px 10px 0 0;
                }

                .comment_title {
                    display: flex;
                    align-items: center;
                    font-size: 10px;
                    background-color: #000;
                    padding: 8px 10px;
                    border-radius: 5px;
                    font-family: Vazir;
                    cursor: pointer;
                    transition: .2s;
                    user-select: none;
                    border: 1px solid #000;
                    letter-spacing: .5px;
                }
                .comment_title:hover {
                    color: #ff9000;
                    border-color: #ff9000;
                }

                .comment_description {
                    font-family: Vazir;
                    font-size: 12px;
                    line-height: 28px;
                    letter-spacing: .5px;
                    background-color: #000;
                    width: clac(100% - 30px);
                    height: 115px;
                    overflow-y: scroll;
                    padding: 20px 15px;
                }
                .comment_description::-webkit-scrollbar {
                    width: 7px;
                }
                .comment_description::-webkit-scrollbar-track {
                    background: #000;
                }
                .comment_description::-webkit-scrollbar-thumb {
                    background: #222;
                }
                .comment_description::-webkit-scrollbar-thumb:hover {
                    background: #333;
                }
            `}</style>
        </div>
    )
}

export default Comments