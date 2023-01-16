// redux
import { useSelector } from "react-redux"

const MovieRequest = () => {

    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)

    return (
        <div className={`movie_request_container ${dashboardSectionsNumber === 5 ? 'show' : ''}`}>
            <div className="movie_request_box">
                <div className="title">درخواست فیلم و سریال</div>
                <form className="movie_request_form">
                    <input className="movie_name movie_req_input" type="text" placeholder="نام فیلم یا سریال" />
                    <textarea className="about_movie movie_req_input" placeholder="درباره فیلم یا سریال" />
                </form>
                <div className="submit_btn">ارسال</div>
            </div>

            <style jsx>{`
                .movie_request_container {
                    width: calc(100% - 420px);
                    height: 100%;
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    background-color: #000;
                }
                .movie_request_container.show {
                    display: flex;
                }

                .movie_request_box {
                    background-color: #111;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 400px;
                    padding: 40px;
                    border-radius: 10px;
                }

                .title {
                    font-size: 30px;
                }

                .movie_request_form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: calc(100% - 100px);
                    padding: 0 50px;
                    margin: 30px 0 20px 0;
                }

                .movie_req_input {
                    background-color: #000;
                    border: none;
                    padding: 15px 20px;
                    font-size: 14px;
                    color: #fff;
                    outline: 0;
                    border-radius: 5px;
                }
                .movie_req_input::placeholder {
                    color: #999;
                    font-size: 13px;
                }
                .movie_req_input:focus {
                    border-color: #444;
                }

                .movie_name {
                    font-family: Vazir;
                    width: 100%;
                }

                .about_movie {
                    height: 200px;
                    resize: none;
                    font-family: Vazir;
                    margin-top: 15px;
                    width: 100% !important;
                }

                .submit_btn {
                    padding: 5px 20px;
                }
            `}</style>
        </div>
    )
}

export default MovieRequest