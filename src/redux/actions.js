import { OPEN_MENU, CLOSE_MENU, SET_LIGHT_STATUS, OPEN_CATEGORIES, CLOSE_CATEGORIES, OPEN_CATEGORIES_SECTIONS, OPEN_ACTORS, CLOSE_ACTORS } from "./types";

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

export const openActors = () => {
    return { type: OPEN_ACTORS }
}
export const closeActors = () => {
    return { type: CLOSE_ACTORS }
}

export const openCategoriesSections = (section_number) => {
    return { type: OPEN_CATEGORIES_SECTIONS, payload: section_number }
}