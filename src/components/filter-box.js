// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"

// redux
import { useSelector } from "react-redux"

// tools
import { useState } from "react"

const FilterBox = () => {

    const order_filters = useSelector(rootReducer => rootReducer.reducer_10[0])
    const country_filters = useSelector(rootReducer => rootReducer.reducer_10[1])
    const quality_filters = useSelector(rootReducer => rootReducer.reducer_10[2])
    const age_filters = useSelector(rootReducer => rootReducer.reducer_10[3])

    const filmsCategoriesList = useSelector(rootReducer => rootReducer.reducer_5)

    let [ order, setOrder ] = useState(false)
    let [ country, setCountry ] = useState(false)
    let [ quality, setQuality ] = useState(false)
    let [ age, setAge ] = useState(false)
    let [ genres, setGenres ] = useState(false)

    return (
        <div className="filter_box_container">
            <div className="search_btn">جستجو</div>

            <div className="filter" onClick={ () => {
                setAge(! age)
                setCountry(false)
                setGenres(false)
                setOrder(false)
                setQuality(false)
            } }>          
                <span className={`${ age ? 'show' : '' }`}><FontAwesomeIcon icon={faAngleLeft} /></span>
                رده سنی
                
                <div className={`drop_down ${ age ? 'show' : '' }`}>
                    {
                        age_filters.map(filter => <div onClick={ () => setAge(false) } className="filter_box" key={ filter.id }>{ filter.age }</div>)
                    }
                </div>
            </div>

            <div className="filter" onClick={ () => {
                setQuality(! quality)
                setCountry(false)
                setGenres(false)
                setOrder(false)
                setAge(false)
            } }>
                <span className={`${ quality ? 'show' : '' }`}><FontAwesomeIcon icon={faAngleLeft} /></span>
                کیفیت

                <div className={`drop_down ${ quality ? 'show' : '' }`}>
                    {
                        quality_filters.map(filter => <div onClick={ () => setAge(false) } className="filter_box" key={ filter.id }>{ filter.quality }</div>)
                    }
                </div>
            </div>

            <div className="filter" onClick={ () => {
                setCountry(! country)
                setQuality(false)
                setGenres(false)
                setOrder(false)
                setAge(false)
            } }>
                <span className={`${ country ? 'show' : '' }`}><FontAwesomeIcon icon={faAngleLeft} /></span>
                کشور

                <div className={`drop_down ${ country ? 'show' : '' }`}>
                    {
                        country_filters.map(filter => <div onClick={ () => setCountry(false) } className="filter_box" key={ filter.id }>{ filter.country }</div>)
                    }
                </div>
            </div>

            <div className="filter" onClick={ () => {
                setOrder(! order)
                setQuality(false)
                setGenres(false)
                setCountry(false)
                setAge(false)
            } }>
                <span className={`${ order ? 'show' : '' }`}><FontAwesomeIcon icon={faAngleLeft} /></span>
                ترتیب

                <div className={`drop_down ${ order ? 'show' : '' }`}>
                    {
                        order_filters.map(filter => <div onClick={ () => setOrder(false) } className="filter_box" key={ filter.id }>{ filter.order }</div>)
                    }
                </div>
            </div>

            <div className="filter" onClick={ () => {
                setGenres(! genres)
                setQuality(false)
                setOrder(false)
                setCountry(false)
                setAge(false)
            } }>
                <span className={`${ genres ? 'show' : '' }`}><FontAwesomeIcon icon={faAngleLeft} /></span>
                ژانر

                <div className={`drop_down ${ genres ? 'show' : '' }`}>
                    {
                        filmsCategoriesList.map(filter => <div onClick={ () => setGenres(false) } className="filter_box" key={ filter.id }>{ filter.title }</div>)
                    }
                </div>
            </div>

            <div className="filter_box_title">فیلتر های پیشرفته</div>

            <style jsx>{`
                .filter_box_container {
                    width: calc(95% - 100px);
                    height: 100px;
                    border-radius: 10px;
                    margin: 0 auto 40px auto;
                    padding: 0 50px;
                    color: #fff;
                    background-color: #111;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid #1f1f1f;
                }

                .filter {
                    background-color: #000;
                    color: #757575;
                    border-radius: 10px;
                    padding: 12px 25px 12px 20px;
                    width: 100px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: 1px solid #000;
                    cursor: pointer;
                    transition: .2s;
                    font-size: 16px;
                    position: relative;
                }
                .filter:hover {
                    border-color: #ff9000;
                    color: #ff9000;
                }

                .filter span {
                    background-color: #111;
                    font-size: 12px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 23px;
                    height: 23px;
                    border-radius: 50%;
                    transition: .3s;
                }
                .filter span.show {
                    transform: rotateZ(-90deg);
                }

                .search_btn {
                    background-color: #ff9000;
                    color: #000;
                    padding: 9px 25px;
                    border-radius: 10px;
                    border: 1px solid #ff9000;
                    cursor: pointer;
                    transition: .2s;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .search_btn:hover {
                    color: #ff9000;
                    background: none;
                }

                .filter_box_title {
                    color: #ff9000;
                    font-size: 24px;
                }

                .drop_down {
                    height: 100px;
                    position: absolute;
                    bottom: -190px;
                    right: -50px;
                    direction: rtl;
                    color: #757575;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    width: 250px;
                    height: 175px;
                    border: 1px solid #1f1f1f;
                    border-radius: 10px;
                    display: none;
                }
                .drop_down.show {
                    display: block;
                }
                .drop_down::-webkit-scrollbar {
                    width: 5px;
                }
                .drop_down::-webkit-scrollbar-thumb {
                    background: #1f1f1f !important;
                    border-radius: 3px !important;
                }
                .drop_down::-webkit-scrollbar-thumb:hover {
                    background: #333 !important;
                }

                .filter_box {
                    background-color: #000;
                    padding: 15px 20px;
                    width: calc(100% - 40px);
                    transition: .1s;
                    border: solid #222;
                    border-width: .5px 0 .5px 0;
                }
                .filter_box:hover {
                    color: #ff9000;
                }
            `}</style>
        </div>
    )
}

export default FilterBox