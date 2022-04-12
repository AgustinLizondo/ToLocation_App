import { insertUserData, loadUserData } from "../../db";

export const INSERT_DATA = 'INSERT_DATA';
export const LOAD_DATA = 'LOAD_DATA';

export const setUserData = (payload) => {
    return async dispatch => {
        try {
            if(payload.name && payload.city){
                const result = await insertUserData(payload.name, payload.city)
            }

            dispatch({
                type: INSERT_DATA,
                payload
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const takeUserData = () => {
    return async dispatch => {
        try {
            const result = await loadUserData()
            dispatch({
                type: LOAD_DATA,
                userData: result.rows._array
            })
        } catch (err) {
            console.log(err)
        }
    }
}