import {
    OPEN_MENU, CLOSE_MENU, SET_LIGHT_STATUS, OPEN_CATEGORIES,
    CLOSE_CATEGORIES, OPEN_CATEGORIES_SECTIONS, OPEN_DOWNLOAD_BOX,
    CLOSE_DOWNLOAD_BOX, OPEN_PROFILE_BOX, CLOSE_PROFILE_BOX, OPEN_DASHBOARD_SECTIONS,
    SIGN_UP, SIGN_IN, LOG_OUT, ON_START, START_LOADING, STOP_LOADING
} from "./types";

export const openMenu = () => {
    return { type: OPEN_MENU }
}
export const closeMenu = () => {
    return { type: CLOSE_MENU }
}

export const setLight = () => {
    return { type: SET_LIGHT_STATUS }
}

export const openCategories = () => {
    return { type: OPEN_CATEGORIES }
}
export const closeCategories = () => {
    return { type: CLOSE_CATEGORIES }
}

export const openDownloadBox = () => {
    return { type: OPEN_DOWNLOAD_BOX }
}
export const closeDownloadBox = () => {
    return { type: CLOSE_DOWNLOAD_BOX }
}

export const openProfileBox = () => {
    return { type: OPEN_PROFILE_BOX }
}
export const closeProfileBox = () => {
    return { type: CLOSE_PROFILE_BOX }
}

export const startLoading = () => {
    return { type: START_LOADING }
}
export const stopLoading = () => {
    return { type: STOP_LOADING }
}

export const openCategoriesSections = (section_number) => {
    return { type: OPEN_CATEGORIES_SECTIONS, payload: section_number }
}

export const openDashboardSections = (section_number) => {
    return { type: OPEN_DASHBOARD_SECTIONS, payload: section_number }
}

export const signUp = (username, password) => {
    return { type: SIGN_UP, payload: {username : username, password : password} }
}
export const signIn = (username, password) => {
    return { type: SIGN_IN, payload: {username : username, password : password} }
}
export const logOut = () => {
    return { type: LOG_OUT }
}
export const onStart = () => {
    return { type: ON_START }
}