// redux
import { useSelector } from "react-redux"

// assets
import cover_img from './../../../public/images/user-images/cover-img.jpg'

// tools
import Image from 'next/legacy/image'

const ProfileBox = () => {

    const dashboardSectionsNumber = useSelector(rootReducer => rootReducer.reducer_16)

    return (
        <div className={`profile_container ${dashboardSectionsNumber === 2 ? 'show' : ''}`}>
            <div className="profile_box">
                <div className="profile_user_box">
                    <Image style={{borderRadius: '10px'}} src={cover_img} fill height={700} objectFit="cover" />
                </div>
            </div>

            <style jsx>{`
                .profile_container {
                    width: calc(100% - 420px);
                    height: 100%;
                    display: none;
                    position: relative;
                }
                .profile_container.show {
                    display: flex;
                }

                .profile_box {
                    background-color: #000;
                    width: 100%;
                    height: 100%;
                    padding: 50px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    overflow-y: scroll;
                    align-items: flex-start;
                }
                .profile_box::-webkit-scrollbar {
                    width: 7px;
                }
                .profile_box::-webkit-scrollbar-track {
                    background: #111;
                }
                .profile_box::-webkit-scrollbar-thumb {
                    background: #191919;
                }
                .profile_box::-webkit-scrollbar-thumb:hover {
                    background: #333;
                }

                .profile_user_box {
                    width: calc(100% - 60px);
                    padding: 30px;
                    background-color: #111;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    )
}

export default ProfileBox