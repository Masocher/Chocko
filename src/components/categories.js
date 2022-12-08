// redux
import { useDispatch, useSelector } from "react-redux"
import { openCategoriesSections } from "../redux/actions"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinesLeaning, faVideoCamera, faFilm, faList } from "@fortawesome/free-solid-svg-icons"

const Categories = () => {

    const categoriesStatus = useSelector(rootReducer => rootReducer.reducer_3)
    const categoriesSectionsNumber = useSelector(rootReducer => rootReducer.reducer_4)
    const filmsCategoriesList = useSelector(rootReducer => rootReducer.reducer_5)
    const serialsCategoriesList = useSelector(rootReducer => rootReducer.reducer_6)
    const sectionsCategoriesList = useSelector(rootReducer => rootReducer.reducer_7)
    const listsCategoriesList = useSelector(rootReducer => rootReducer.reducer_8)
    const dispatch = useDispatch()

    return (
        <div className={`categories_container ${ categoriesStatus ? 'show' : '' }`}>
            <div className="genres_box">
                <div className="genres_title">دسته بندی ها</div>

                <div className="genres">
                    <div className={`genre ${ categoriesSectionsNumber == 1 ? 'show' : '' }`} onClick={ () => dispatch(openCategoriesSections(1)) }><FontAwesomeIcon style={{margin: "0 10px"}} icon={faLinesLeaning} />بخش ها</div>
                    <div className={`genre ${ categoriesSectionsNumber == 2 ? 'show' : '' }`} onClick={ () => dispatch(openCategoriesSections(2)) }><FontAwesomeIcon style={{margin: "0 10px"}} icon={faList} />لیست ها</div>
                    <div className={`genre ${ categoriesSectionsNumber == 3 ? 'show' : '' }`} onClick={ () => dispatch(openCategoriesSections(3)) }><FontAwesomeIcon style={{margin: "0 10px"}} icon={faVideoCamera} />ژانر فیلم</div>
                    <div className={`genre ${ categoriesSectionsNumber == 4 ? 'show' : '' }`} onClick={ () => dispatch(openCategoriesSections(4)) }><FontAwesomeIcon style={{margin: "0 10px"}} icon={faFilm} />ژانر سریال</div>
                </div>
            </div>

            <div className="categories_sections_content">
                <div className={`content_box ${ categoriesSectionsNumber == 1 ? 'show' : '' }`}>
                    {
                        sectionsCategoriesList.map(category => 
                            <div className="sec_category" key={ category.id }>
                                <div className="category_title"><div className="category_number">( { category.number } )</div> { category.title }</div>
                            </div>
                        )
                    }
                </div>

                <div className={`content_box ${ categoriesSectionsNumber == 2 ? 'show' : '' }`}>
                    {
                        listsCategoriesList.map(category => 
                            <div className="list_category" key={ category.id }>
                                <div className="category_title"><div className="category_number">( { category.number } )</div> { category.title }</div>
                            </div>
                        )
                    }
                </div>

                <div className={`content_box ${ categoriesSectionsNumber == 3 ? 'show' : '' }`}>
                    {
                        filmsCategoriesList.map(category => 
                            <div className="film_category" key={ category.id }>
                                <div className="category_title"><div className="category_number">( { category.number } )</div> { category.title }</div>
                            </div>
                        )
                    }
                </div>

                <div className={`content_box ${ categoriesSectionsNumber == 4 ? 'show' : '' }`}>
                    {
                        serialsCategoriesList.map(category => 
                            <div className="serial_category" key={ category.id }>
                                <div className="category_title"><div className="category_number">( { category.number } )</div> { category.title }</div>
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
                    box-shadow: 0 0 100px rgba(0, 0, 0, .7);
                    border: 1px solid #1f1f1f;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 30px 30px 30px 0px;
                }
                .categories_container.show {
                    left: 130px;
                }

                .genres_box {
                    width: fit-content;
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
                    color: #000;
                }

                .categories_sections_content {
                    display: flex;
                    justify-content: center;
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
                    color: #757575;
                    margin: 0 5px 12px 5px;
                    cursor: pointer;
                    transition: .2s;
                    background-color: #000;
                    padding: 10px 15px;
                    border-radius: 10px;
                    border: 1px solid #111;
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
            `}</style>
        </div>
    )
}

export default Categories