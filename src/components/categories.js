// redux
import { useDispatch, useSelector } from "react-redux"
import { openCategoriesSections, closeCategories } from "../redux/actions"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinesLeaning, faVideoCamera, faFilm, faList, faClose, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Categories = () => {

    const categoriesStatus = useSelector(rootReducer => rootReducer.reducer_3)
    const categoriesSectionsNumber = useSelector(rootReducer => rootReducer.reducer_4)
    const filmsCategoriesList = useSelector(rootReducer => rootReducer.reducer_5)
    const serialsCategoriesList = useSelector(rootReducer => rootReducer.reducer_6)
    const sectionsCategoriesList = useSelector(rootReducer => rootReducer.reducer_7)
    const listsCategoriesList = useSelector(rootReducer => rootReducer.reducer_8)
    const dispatch = useDispatch()

    return (
        <div className={`categories_container ${categoriesStatus ? "show" : ""}`}>
            <div className="genres_box">
                <div className="close_btn_2" onClick={() => dispatch(closeCategories())}><FontAwesomeIcon icon={faAngleRight} /> بازگشت</div>

                <div className="genres_title">دسته بندی ها</div>

                <div className="genres">
                    <div className={`genre ${categoriesSectionsNumber == 1 ? "show" : ""}`} onClick={() => dispatch(openCategoriesSections(1))}><FontAwesomeIcon style={{ margin: "0 10px" }} icon={faLinesLeaning} />بخش ها</div>
                    <div className={`genre ${categoriesSectionsNumber == 2 ? "show" : ""}`} onClick={() => dispatch(openCategoriesSections(2))}><FontAwesomeIcon style={{ margin: "0 10px" }} icon={faList} />لیست ها</div>
                    <div className={`genre ${categoriesSectionsNumber == 3 ? "show" : ""}`} onClick={() => dispatch(openCategoriesSections(3))}><FontAwesomeIcon style={{ margin: "0 10px" }} icon={faVideoCamera} />ژانر فیلم</div>
                    <div className={`genre ${categoriesSectionsNumber == 4 ? "show" : ""}`} onClick={() => dispatch(openCategoriesSections(4))}><FontAwesomeIcon style={{ margin: "0 10px" }} icon={faFilm} />ژانر سریال</div>
                </div>
            </div>

            <div className="categories_sections_content">
                <div className="close_btn" onClick={() => dispatch(closeCategories())}><FontAwesomeIcon icon={faClose} /></div>

                <div className={`content_box ${categoriesSectionsNumber == 1 ? "show" : ""}`}>
                    {
                        sectionsCategoriesList.map(category =>
                            <div className="sec_category" key={category.id}>
                                <div className="category_title"><div className="category_number">( {category.number} )</div> {category.title}</div>
                            </div>
                        )
                    }
                </div>

                <div className={`content_box ${categoriesSectionsNumber == 2 ? "show" : ""}`}>
                    {
                        listsCategoriesList.map(category =>
                            <div className="list_category" key={category.id}>
                                <div className="category_title"><div className="category_number">( {category.number} )</div> {category.title}</div>
                            </div>
                        )
                    }
                </div>

                <div className={`content_box ${categoriesSectionsNumber == 3 ? "show" : ""}`}>
                    {
                        filmsCategoriesList.map(category =>
                            <div className="film_category" key={category.id}>
                                <div className="category_title"><div className="category_number">( {category.number} )</div> {category.title}</div>
                            </div>
                        )
                    }
                </div>

                <div className={`content_box ${categoriesSectionsNumber == 4 ? "show" : ""}`}>
                    {
                        serialsCategoriesList.map(category =>
                            <div className="serial_category" key={category.id}>
                                <div className="category_title"><div className="category_number">( {category.number} )</div> {category.title}</div>
                            </div>
                        )
                    }
                </div>

            </div>

            <style jsx>{`
                .categories_container {
                    width: calc(55% - 60px);
                    height: fit-content;
                    border-radius: 10px;
                    background-color: #111;
                    position: absolute;
                    bottom: 170px;
                    left: -200%;
                    transition: .6s cubic-bezier(.8,0,0,1);
                    border: 1px solid #1f1f1f;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 30px 30px 30px 0px;
                    z-index: 2;
                }
                .categories_container.show {
                    left: 130px;
                }

                .genres_box {
                    width: fit-content;
                    position: relative;
                }

                .genres {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 250px;
                    border-left: 1px solid #1f1f1f;
                    padding-left: 20px;
                }

                .genres_title {
                    font-size: 15px;
                    margin-bottom: 20px;
                    height: 100%;
                    width: 100%;
                    border-bottom: 1px solid #ff9000;
                    padding: 0 0 10px 0;
                    text-align: center;
                }

                .genre {
                    background-color: #000;
                    width: fit-content;
                    padding: 13px 10px 13px 0;
                    width: 100px;
                    border-radius: 15px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    cursor: pointer;
                    transition: .2s;
                    border: 1px solid #000;
                    font-size: 14px;
                }
                .genre:hover {
                    border-color: #ff9000;
                    color: #ff9000;
                }
                .genre.show {
                    background-color: #ff9000;
                    color: #111;
                }

                .categories_sections_content {
                    display: flex;
                    justify-content: center;
                    position: relative;
                }

                .content_box {
                    display: none;
                    flex-wrap: wrap;
                    justify-content: center;
                    direction: ltr;
                    width: 90%;
                }
                .content_box.show {
                    display: flex;
                }

                .film_category, .serial_category, .sec_category, .list_category {
                    width: fit-content;
                    color: #999;
                    margin: 0 5px 12px 5px;
                    cursor: pointer;
                    transition: .2s;
                    background-color: #000;
                    padding: 10px 15px;
                    border-radius: 10px;
                    border: 1px solid #111;
                    height: fit-content;
                }
                .film_category:hover, .serial_category:hover, .sec_category:hover, .list_category:hover {
                    border-color: #ff9000;
                    color: #ff9000;
                }

                .category_title {
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                }

                .category_number {
                    font-size: 12px;
                    font-weight: 100;
                    margin-right: 5px;
                }

                .sec_category, .list_category {
                    padding: 15px 20px;
                    width: 90px;
                }
                .sec_category .category_title, .list_category .category_title {
                    font-size: 18px;
                    flex-direction: column-reverse;
                    align-items: center;
                }
                .sec_category .category_number, .list_category .category_number {
                    font-size: 14px;
                    margin: 3px 0 0 0;
                }

                .list_category {
                    padding: 19px 20px;
                }
                .list_category .category_title {
                    font-size: 13px;
                    font-weight: 100;
                }

                .close_btn {
                    background-color: #ff9000;
                    color: #000;
                    font-size: 20px;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    left: -10px;
                    top: -10px;
                    cursor: pointer;
                    transition: .2s;
                    border: 1px solid #ff9000;
                    display: none;
                }
                .close_btn:hover, .close_btn_2:hover {
                    background-color: #111;
                    color: #ff9000;
                }

                .close_btn_2 {
                    font-size: 14px;
                    background-color: #ff9000;
                    color: #000;
                    width: 50px;
                    padding: 5px 13px;
                    border-radius: 10px 10px 0 10px;
                    transition: .2s;
                    cursor: pointer;
                    border: 1px solid #ff9000;
                    justify-content: space-between;
                    align-items: center;
                    display: none;
                    position: absolute;
                    top: -15px;
                    right: 0;
                }

                @media (max-width: 1530px) {
                    .close_btn {
                        display: flex;
                    }

                    .categories_container {
                        width: calc(100% - 30px);
                        height: calc(100% - 60px);
                        top: 100%;
                        left: 0;
                        border-radius: 0;
                        border: none;
                        background-color: #000;
                        justify-content: center;
                    }
                    .categories_container.show {
                        top: 0;
                        left: 0;
                    }

                    .genres_box {
                        background-color: #111;
                        padding: 30px;
                        border-radius: 0 10px 10px 0;
                    }
                    
                    .genres {
                        width: fit-content;
                        background-color: #111;
                        padding: 0 30px;
                        border: none;
                    }

                    .categories_sections_content {
                        background-color: #111;
                        padding: 30px 0;
                        height: 305px;
                        border-radius: 10px 0 0 10px;
                        align-items: center;
                        width: 70%;
                    }
                    
                    .film_category, .serial_category, .sec_category, .list_category {
                        margin: 5px;
                    }
                }

                @media (max-width: 953px) {
                    .genres_box {
                        padding: 80px 30px;
                    }

                    .categories_sections_content {
                        height: 405px;
                        margin-left: 30px;
                    }

                    .category_title {
                        font-size: 11px;
                    }

                    .category_number {
                        font-size: 11px;
                    }

                    .film_category, .serial_category, .sec_category, .list_category {
                        margin: 3px;
                    }
                }

                @media (max-width: 620px) {
                    .close_btn {
                        display: none;
                    }

                    .close_btn_2 {
                        display: flex;
                    }

                    .genres_box {
                        border-radius: 10px;
                        padding: 50px 20px;
                    }

                    .categories_sections_content {
                        background: none;
                    }

                    .film_category, .serial_category, .sec_category, .list_category {
                        background-color: #111;
                    }
                    .film_category:hover, .serial_category:hover, .sec_category:hover, .list_category:hover {
                        background-color: #000;
                    }
                }

                @media (max-width: 426px) {
                    .categories_container {
                        overflow-y: scroll;
                    }

                    .genres_box {
                        border-radius: 10px;
                        padding: 30px 20px 10px 20px;
                    }
                    
                    .genres {
                        width: fit-content;
                        background-color: #111;
                        padding: 0 10px;
                        border: none;
                        justify-content: space-evenly;
                    }
                    
                    .genre {
                        font-size: 12px;
                        padding: 10px 5px 10px 0;
                        width: 90px;
                    }

                    .close_btn_2 {
                        font-size: 10px;
                        width: 35px;
                        top: -10px;
                    }
                }

                @media (max-width: 426px) {
                    .categories_container {
                        justify-content: flex-start;
                        flex-direction: column;
                        align-items: center;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                    }

                    .genres {
                        height: fit-content;
                        padding: 0 20px 30px 20px;
                        width: calc(100% - 40px);
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .genres_box {
                        width: 100%;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        border-radius: 0;
                    }

                    .genres_title {
                        font-size: 16px;
                        width: 50%;
                        padding: 20px 0 10px 0;
                    }

                    .close_btn_2 {
                        top: 0;
                        right: 0;
                        border-radius: 0 0 0 10px;
                    }

                    .categories_sections_content {
                        padding: 0;
                        height: 100%;
                        align-items: flex-start;
                        width: 100%;
                        margin: 20px auto;
                    }

                    .genre {
                        font-size: 12px;
                        padding: 10px 2px 10px 8px;
                        width: 75px;
                    }

                    .sec_category, .list_category {
                        margin: 5px;
                    }
                }

                @media (max-width: 376px) {
                    .genres {
                        padding: 0 10px 30px 10px;
                        width: calc(100% - 20px);
                    }

                    .genres_title {
                        font-size: 14px;
                        width: 55%;
                    }

                    .genre {
                        font-size: 10px;
                        width: 70px;
                    }
                }

                @media (max-width: 321px) {
                    .genres {
                        padding: 0 10px 20px 10px;
                    }

                    .genres_title {
                        font-size: 12px;
                    }

                    .genre {
                        font-size: 8px;
                        width: 57px;
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    )
}

export default Categories