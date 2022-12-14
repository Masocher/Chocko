import { OPEN_MENU, CLOSE_MENU, SET_LIGHT_STATUS, CLOSE_CATEGORIES, OPEN_CATEGORIES } from "./types";
import { combineReducers } from "redux";

let menuStatus = false;
let temStatus  = false;
let categoriesStatus = false;
let categoriesSectionsNumber = 1;

let filmsCategoriesList = [
    { id: 1, title: "درام", number: 100 },
    { id: 2, title: "هیجان انگیز", number: 101 },
    { id: 3, title: "کمدی", number: 102 },
    { id: 4, title: "اکشن", number: 103 },
    { id: 5, title: "جنایی", number: 104 },
    { id: 6, title: "ترسناک", number: 105 },
    { id: 7, title: "عاشقانه", number: 106 },
    { id: 8, title: "ماجراجویی", number: 107 },
    { id: 9, title: "رازآلود", number: 108 },
    { id: 10, title: "علمی تخیلی", number: 109 },
    { id: 11, title: "فانتزی", number: 110 },
    { id: 12, title: "بیوگرافی", number: 111 },
    { id: 13, title: "انیمیشن", number: 112 },
    { id: 14, title: "خانوادگی", number: 113 },
    { id: 15, title: "تاریخی", number: 114 },
    { id: 16, title: "مستند", number: 115 },
    { id: 17, title: "جنگی", number: 116 },
    { id: 18, title: "آهنگ", number: 117 },
    { id: 19, title: "ورزشی", number: 118 },
    { id: 20, title: "وسترن", number: 119 },
    { id: 21, title: "موزیکال", number: 120 },
    { id: 22, title: "کوتاه", number: 121 },
    { id: 23, title: "اخبار", number: 122 },
    { id: 24, title: "خبری", number: 123 },
]

let serialsCategoriesList = [
    { id: 1, title: "درام", number: 100 },
    { id: 2, title: "هیجان انگیز", number: 101 },
    { id: 3, title: "کمدی", number: 102 },
    { id: 4, title: "اکشن", number: 103 },
    { id: 5, title: "جنایی", number: 104 },
    { id: 6, title: "ترسناک", number: 105 },
    { id: 7, title: "عاشقانه", number: 106 },
    { id: 8, title: "ماجراجویی", number: 107 },
    { id: 9, title: "رازآلود", number: 108 },
    { id: 10, title: "علمی تخیلی", number: 109 },
    { id: 11, title: "فانتزی", number: 110 },
    { id: 12, title: "بیوگرافی", number: 111 },
    { id: 13, title: "انیمیشن", number: 112 },
    { id: 14, title: "خانوادگی", number: 113 },
    { id: 15, title: "تاریخی", number: 114 },
    { id: 16, title: "مستند", number: 115 },
    { id: 17, title: "جنگی", number: 116 },
    { id: 18, title: "آهنگ", number: 117 },
    { id: 19, title: "ورزشی", number: 118 },
    { id: 20, title: "وسترن", number: 119 },
    { id: 21, title: "موزیکال", number: 120 },
    { id: 22, title: "کوتاه", number: 121 },
    { id: 23, title: "اخبار", number: 122 },
    { id: 24, title: "خبری", number: 123 },
]

let sectionsCategoriesList = [
    { id: 1, title: "فیلم ها", number: 100 },
    { id: 2, title: "سریال ها", number: 101 },
    { id: 3, title: "انیمه", number: 102 },
    { id: 4, title: "مستند", number: 103 },
    { id: 5, title: "انیمیشن", number: 104 },
    { id: 6, title: "شخصیت ها", number: 105 },
    { id: 7, title: "باکس آفیس", number: 105 },
]

let listsCategoriesList = [
    { id: 1, title: "برندگان اسکار", number: 100 },
    { id: 2, title: "برندگان گلدن گلوب", number: 101 },
    { id: 3, title: "فیلم های هندی", number: 102 },
    { id: 4, title: "4K فیلم های", number: 103 },
    { id: 5, title: "250 فیلم برتر", number: 104 },
    { id: 6, title: "3D فیلم های", number: 105 },
    { id: 7, title: "فیلم های ایرانی", number: 105 },
]

let homeSliderSlides = [
    { id: 1, title: 1 },
    { id: 2, title: 2 },
    { id: 3, title: 3 },
    { id: 4, title: 4 },
    { id: 5, title: 5 },
    { id: 6, title: 6 },
]

let filterBoxFilters = [
    [
        { id: 1, order: "پیشفرض" },
        { id: 2, order: "جدیدترین ها" },
        { id: 3, order: "پر بازدیدترین ها" },
        { id: 4, order: "برترین ها" },
    ],
    [
        { id: 1, country: "آرژانتین" },
        { id: 2, country: "آفریقای جنوبی" },
        { id: 3, country: "آلبانی" },
        { id: 4, country: "آلمان" },
        { id: 5, country: "آلمان غربی" },
        { id: 6, country: "آمریکا" },
        { id: 7, country: "اتریش" },
        { id: 8, country: "اسپانیا" },
        { id: 9, country: "استرالیا" },
        { id: 10, country: "اسرائیل" },
        { id: 11, country: "اسلواکی" },
        { id: 12, country: "ایران" },
        { id: 13, country: "افغانستان" },
        { id: 14, country: "الجزایر" },
        { id: 15, country: "انگلستان" },
        { id: 16, country: "ایتالیا" },
        { id: 17, country: "ایرلند" },
        { id: 18, country: "ایسلند" },
        { id: 19, country: "بلژیک" },
        { id: 20, country: "برزیل" },
    ],
    [
        { id: 1, quality: "4K" },
        { id: 2, quality: "1080p" },
        { id: 3, quality: "720p" },
        { id: 4, quality: "480p" },
        { id: 5, quality: "360p" },
        { id: 6, quality: "240p" },
    ],
    [
        { id: 1, age: "عمومی" },
        { id: 2, age: "تصمیم گیری با والدین" },
        { id: 3, age: "بالای 13 سال" },
        { id: 4, age: "بالای 17 سال" },
    ]
]

let filmsAndSerialsInformation = [
    [
        { id: 1, title: "serial" },
        { id: 2, title: "serial" },
        { id: 3, title: "serial" },
        { id: 4, title: "serial" },
        { id: 5, title: "serial" },
        { id: 6, title: "serial" },
        { id: 7, title: "serial" },
    ],
    [
        { id: 1, title: "Korean serial" },
        { id: 2, title: "Korean serial" },
        { id: 3, title: "Korean serial" },
        { id: 4, title: "Korean serial" },
        { id: 5, title: "Korean serial" },
        { id: 6, title: "Korean serial" },
        { id: 7, title: "Korean serial" },
    ],
    [
        { id: 1, title: "film" },
        { id: 2, title: "film" },
        { id: 3, title: "film" },
        { id: 4, title: "film" },
        { id: 5, title: "film" },
        { id: 6, title: "film" },
        { id: 7, title: "film" },
    ],
    [
        { id: 1, title: "Indian film" },
        { id: 2, title: "Indian film" },
        { id: 3, title: "Indian film" },
        { id: 4, title: "Indian film" },
        { id: 5, title: "Indian film" },
        { id: 6, title: "Indian film" },
        { id: 7, title: "Indian film" },
    ],
    [
        { id: 1, title: "anime" },
        { id: 2, title: "anime" },
        { id: 3, title: "anime" },
        { id: 4, title: "anime" },
        { id: 5, title: "anime" },
        { id: 6, title: "anime" },
        { id: 7, title: "anime" },
    ],
    [
        { id: 1, title: "animation" },
        { id: 2, title: "animation" },
        { id: 3, title: "animation" },
        { id: 4, title: "animation" },
        { id: 5, title: "animation" },
        { id: 6, title: "animation" },
        { id: 7, title: "animation" },
    ],
]

let actors = [
    { id: 1, name: "Morgan Freeman" },
    { id: 2, name: "Morgan Freeman" },
    { id: 3, name: "Morgan Freeman" },
    { id: 4, name: "Morgan Freeman" },
    { id: 5, name: "Morgan Freeman" },
    { id: 6, name: "Morgan Freeman" },
    { id: 7, name: "Morgan Freeman" },
    { id: 8, name: "Morgan Freeman" },
    { id: 9, name: "Morgan Freeman" },
    { id: 10, name: "Morgan Freeman" },
    { id: 11, name: "Morgan Freeman" },
    { id: 12, name: "Morgan Freeman" },
]

const reducer_1 = (state = menuStatus, action) => {
    switch (action.type) {
        case OPEN_MENU: return state = true
        case CLOSE_MENU: return state = false
        default: return state
    }
}

const reducer_2 = (state = temStatus, action) => {
    switch (action.type) {
        case SET_LIGHT_STATUS: return !state
        default: return state
    }
}

const reducer_3 = (state = categoriesStatus, action) => {
    switch(action.type) {
        case OPEN_CATEGORIES: return state = true
        case CLOSE_CATEGORIES: return state = false
        default: return state
    }
}

const reducer_4 = (state = categoriesSectionsNumber, action) => {
    switch(action.payload) {
        case 1: return state = 1
        case 2: return state = 2
        case 3: return state = 3
        case 4: return state = 4
        default: return state
    }
}

const reducer_5 = (state = filmsCategoriesList) => {
    return state
}

const reducer_6 = (state = serialsCategoriesList) => {
    return state
}

const reducer_7 = (state = sectionsCategoriesList) => {
    return state
}

const reducer_8 = (state = listsCategoriesList) => {
    return state
}

const reducer_9 = (state = homeSliderSlides) => {
    return state
}

const reducer_10 = (state = filterBoxFilters) => {
    return state
}

const reducer_11 = (state = filmsAndSerialsInformation) => {
    return state
}

const reducer_12 = (state = actors) => {
    return state
}

const rootReducer = combineReducers({
    reducer_1, reducer_2, reducer_3,
    reducer_4, reducer_5, reducer_6,
    reducer_7, reducer_8, reducer_9,
    reducer_10, reducer_11, reducer_12,
})

export default rootReducer