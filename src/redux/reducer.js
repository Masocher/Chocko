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

const rootReducer = combineReducers({
    reducer_1, reducer_2, reducer_3,
    reducer_4, reducer_5, reducer_6,
    reducer_7, reducer_8, reducer_9
})

export default rootReducer