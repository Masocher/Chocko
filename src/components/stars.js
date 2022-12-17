const Stars = ({ stars }) => {
    return (
        <div className="stars_container">
            {
                stars.map(star =>
                    <div className="star_box">
                        <div className="star_img"></div>
                        <div className="star_name">{ star.name }</div>
                    </div>
                )
            }
        </div>
    )
}

const getServerSideProps = (props) => {
    return {
        stars: props.stars
    }
}

export default Stars