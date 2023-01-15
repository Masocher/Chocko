const Movie = (data) => {
    return (
        <div className="movie_container">
            <div className="movie_img"></div>
            <div className="movie_title">{data.title}</div>

            <style jsx>{`
                .movie_container {
                    position: relative;
                    margin: 10px;
                }

                .movie_img {
                    width: 180px;
                    height: 260px;
                    background-color: #111;
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