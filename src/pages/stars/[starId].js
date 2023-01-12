// tools
import { useRouter } from "next/router";

// redux
import { useSelector } from "react-redux";

// components
import Header from "../../components/header";
import Footer from "../../components/footer";
import StarRelics from "../../components/star-relics";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus, faLocationDot, faCalendarDays, faAddressCard, faStar } from "@fortawesome/free-solid-svg-icons"

const StarPage = () => {
    const router = useRouter()

    const filmsAndSerialsInformation = useSelector(rootReducer => rootReducer.reducer_12)

    const starInformation = filmsAndSerialsInformation[router.query.starId]

    return (
        <div className="star_box_container">
            <Header />

            <div className="star_internal_container">
                <div className="star_container">
                    <div className="star_box">
                        <div className="right_side">
                            <div className="star_img"></div>
                        </div>

                        <div className="left_side">
                            <div className="star_name_2">{starInformation.name}</div>

                            <div className="star_professions">
                                {
                                    starInformation.professions.map(profession =>
                                        <div className="profession" key={profession.id}>{profession.title}</div>
                                    )
                                }
                            </div>

                            <div className="star_name">{starInformation.name}</div>

                            <div className="star_information">
                                <div className="star_info">
                                    <div className="star_info_icon"><FontAwesomeIcon icon={faCalendarDays} /></div>
                                    <div className="star_info_title">تاریخ تولد <span>{starInformation.birthDate}</span></div>
                                </div>

                                <div className="star_info">
                                    <div className="star_info_icon"><FontAwesomeIcon icon={faUserPlus} /></div>
                                    <div className="star_info_title">سن <span>{starInformation.age}</span></div>
                                </div>

                                <div className="star_info">
                                    <div className="star_info_icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                                    <div className="star_info_title">محل تولد <span>{starInformation.birthPlace}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about_box">
                        <div className="about_title"><span><FontAwesomeIcon icon={faAddressCard} /></span> درباره هنرمند</div>
                        <div className="about_description">
                            مورگان فریمن بازیگر آمریکایی است. او برای صدای عمیق خود و نقش‌های گوناگونی که در طیف گسترده‌ای از ژانرهای فیلم ایفا کرده، معروف است. فریمن در طول بیش از پنج دهه حرفهٔ خود افتخارات گوناگونی از جمله یک جایزهٔ اسکار و یک جایزهٔ گلدن گلوب دریافت کرده‌است.
                        </div>
                    </div>
                </div>

                <div className="relics">
                    <div className="relics_title"><span><FontAwesomeIcon icon={faStar} /></span> آثار هنرمند</div>

                    <StarRelics starId={router.query.starId} />
                </div>
            </div>

            <Footer />

            <style jsx>{`
                .star_internal_container {
                    width: calc(100% - 100px);
                    margin: 100px 50px;
                }

                .star_container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    height: 360px;
                    direction: rtl;
                }

                .star_box {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                }

                .right_side {
                    height: 100%;
                }

                .star_img {
                    background-color: #222;
                    width: 275px;
                    height: 100%;
                    border-radius: 10px;
                }

                .left_side {
                    margin-right: 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                    height: 100%;
                    width: fit-content;
                }

                .star_name {
                    font-size: 35px;
                    color: #fff;
                    border-right: 1px solid #ff9000;
                    padding: 0 20px 0 100px;
                    letter-spacing: .5px;
                    width: fit-content;
                    margin-top: 20px;
                }

                .star_name_2 {
                    font-size: 28px;
                    color: #fff;
                    letter-spacing: .5px;
                    margin-top: 30px;
                    width: 100%;
                    text-align: center;
                    display: none;
                }

                .star_information {
                    display: flex;
                    margin-top: 20px;
                    border-top: 1px solid #333;
                    padding-top: 20px;
                    width: 100%;
                }

                .star_info {
                    display: flex;
                    flex-direction: column;
                    background-color: #111;
                    align-items: center;
                    justify-content: center;
                    width: 100px;
                    height: 100px;
                    border: solid #000;
                    border-width: 0 0 0 4px;
                }

                .star_info_title {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 10px;
                    color: #999;
                }

                .star_info_title span {
                    font-size: 14px;
                    margin-top: 5px;
                    color: #999;
                }

                .star_info_icon {
                    font-size: 20px;
                    color: #ff9000;
                }

                .star_professions {
                    display: flex;
                    border-bottom: 1px solid #333;
                    width: 100%;
                    padding-bottom: 20px;
                }

                .profession {
                    margin-left: 15px;
                    color: #999;
                    background-color: #111;
                    border-radius: 5px;
                    padding: 8px 15px;
                    font-size: 14px;
                }

                .about_box {
                    width: 1000px;
                    color: #fff;
                }

                .about_title {
                    font-size: 36px;
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    border-bottom: 1px solid #333;
                    padding-bottom: 10px;
                }

                .about_title span {
                    margin: 10px 0 0 15px;
                    color: #ff9000;
                    font-size: 32px;
                }

                .about_description {
                    font-size: 15px;
                    font-family: Vazir;
                    line-height: 30px;
                }

                .relics {
                    width: 100%;
                    direction: rtl;
                    margin-top: 60px;
                }

                .relics_title {
                    font-size: 28px;
                    color: #fff;
                    border-bottom: 1px solid #ff9000;
                    width: fit-content;
                    padding-left: 100px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding-bottom: 5px;
                }

                .relics_title span {
                    color: #ff9000;
                    font-size: 22px;
                    margin-left: 7px;
                }

                @media (max-width: 1390px) {
                    .star_internal_container {
                        margin: 220px 50px 100px 50px;
                    }
                    
                    .star_box {
                        width: fit-content;
                        height: fit-content;
                    }

                    .star_container {
                        flex-direction: column;
                        justify-content: center;
                    }

                    .star_img {
                        height: 360px;
                    }

                    .relics {
                        margin-top: 150px;
                    }

                    .about_box {
                        width: 100%;
                        margin: 70px 0;
                    }
    
                    .about_title {
                        font-size: 30px;
                    }
    
                    .about_title span {
                        font-size: 30px;
                    }
    
                    .about_description {
                        font-size: 16px;
                    }
                }

                @media (max-width: 800px) {
                    .star_internal_container {
                        margin: 350px 50px 100px 50px;
                    }

                    .star_box {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }

                    .star_information {
                        justify-content: center;
                        border: none;
                        margin: 0;
                        padding: 0;
                    }

                    .relics {
                        margin-top: 300px;
                    }

                    .left_side {
                        margin-right: 0;
                    }    

                    .star_name {
                        display: none;
                    }

                    .star_name_2 {
                        display: block;
                    }

                    .star_professions {
                        border: none;
                        width: 100%;
                        padding: 0;
                        justify-content: space-evenly;
                        width: 100%;
                        margin: 30px 0 20px 0;
                    }
    
                    .profession {
                        margin: 0;
                    }
                }

                @media (max-width: 426px) {
                    .relics_title {
                        padding: 0 0 10px 0;
                        text-align: center;
                        width: 100%;
                        justify-content: center;
                    }
    
                    .relics_title span {
                        display: none;
                    }
                }

                @media (max-width: 321px) {
                    .star_internal_container {
                        margin: 380px 50px 100px 50px;
                    }
    
                    .relics {
                        margin-top: 330px;
                    }
                }
            `}</style>
        </div>
    )
}

export default StarPage