const Movie = (data) => {
    return (
        <div className="movie_container">
            <div className="movie_img"></div>
            <div className="movie_title">{data.title}</div>

            <style jsx>{`
                .movie_container {
                    position: relative;
                    margin: 0 10px 60px 10px;
                }

                .movie_img {
                    width: 180px;
                    height: 260px;
                    background-color: #222;
                    border-radius: 10px;
                }

                .movie_title {
                    position: absolute;
                    bottom: -35px;
                    left: 5px;
                    font-weight: 100;
                    font-size: 16px;
                    letter-spacing: .5px;
                }

                @media (max-width: 1025px) {
                    .movie_img {
                        width: 160px;
                        height: 220px;
                    }

                    .movie_container {
                        margin: 0 5px 50px 5px;
                    }

                    .movie_title {
                        font-size: 14px;
                    }
                }

                @media (max-width: 376px) {
                    .movie_img {
                        width: 140px;
                        height: 180px;
                    }

                    .movie_container {
                        margin: 0 5px 40px 5px;
                    }

                    .movie_title {
                        font-size: 12px;
                        bottom: -30px;
                    }
                }

                @media (max-width: 321px) {
                    .movie_img {
                        width: 120px;
                        height: 160px;
                    }

                    .movie_container {
                        margin: 0 5px 40px 5px;
                    }

                    .movie_title {
                        font-size: 10px;
                        bottom: -25px;
                    }
                }
            `}</style>
        </div>
    )
}

export const getServerSideProps = (props) => {
    return {
        data: {
            title: props.title
        }
    }
}

export default Movie