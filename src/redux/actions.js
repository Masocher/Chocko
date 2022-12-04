import { OPEN_MENU, CLOSE_MENU, SET_LIGHT_STATUS } from "./types";

export const openMenu = () => {
    return { type: OPEN_MENU }
}

export const closeMenu = () => {
    return { type: CLOSE_MENU }
}

export const setLight = () => {
    return { type: SET_LIGHT_STATUS }
}