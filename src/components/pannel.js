// redux
import { useSelector } from "react-redux"

// components
import PannelMenu from "./pannel sections/pannel-menu"
import DashboardBox from "./pannel sections/dashboard-box"
import ProfileBox from "./pannel sections/profile-box"
import WatchList from "./pannel sections/watch-list"
import MovieRequest from "./pannel sections/movie-request"

const Pannel = () => {

    const profileBoxStatus = useSelector(rootReducer => rootReducer.reducer_15)

    return (
        <div className={`profile_container ${profileBoxStatus ? 'show' : ''}`}>
            
            <PannelMenu />
            <DashboardBox />
            <ProfileBox />
            <WatchList />
            <MovieRequest />

            <style>{`
                .profile_container {
                    position: fixed;
                    bottom: -100%;
                    left: 0;
                    color: #fff;
                    background-color: #111;
                    width: 100%;
                    height: 100%;
                    z-index: 3;
                    display: flex;
                    align-items: flex-start;
                    transition: .5s;
                    opacity: 0;
                }
                .profile_container.show {
                    bottom: 0;
                    opacity: 1;
                }
                
                @media (max-width: 769px) {
                    .profile_container {
                        background-color: #000;
                        justify-content: center;
                    }
                }
            `}</style>
        </div>
    )
}

export default Pannel