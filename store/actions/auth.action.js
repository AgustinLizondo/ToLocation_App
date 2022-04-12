import { Alert } from 'react-native'
import config from '../../config'

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
let FIREBASE_SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.FIREBASE_API_KEY}`;
let FIREBASE_SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.FIREBASE_API_KEY}`;

const verifySigning = (data) => {
    if (data.error) {
        switch (data.error.errors[0].message) {
            case 'EMAIL_EXISTS':
                Alert.alert(
                    'Email in use',
                    '',
                    ['OK']
                )
                break
            case 'MISSING_PASSWORD':
                Alert.alert(
                    'Any password provided',
                    '',
                    ['OK']
                )
                break
            case 'INVALID_EMAIL':
                Alert.alert(
                    'Email not valid',
                    '',
                    ['OK']
                )
                break
            case 'EMAIL_NOT_FOUND':
                Alert.alert(
                    'Email not registered',
                    '',
                    ['OK']
                )
                break
            case 'INVALID_PASSWORD':
                Alert.alert(
                    'Password not valid',
                    '',
                    ['OK']
                )
                break
            default:
                Alert.alert(
                    'Error',
                    '',
                    ['OK']
                )
        }
    }
}

export const signUp = (email, password) => {
    return async dispatch => {
        const response = await fetch(FIREBASE_SIGN_UP, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })
        const data = await response.json()

        verifySigning(data)

        dispatch({
            type: SIGN_UP,
            token: data.idToken,
            userId: data.localId,
            email: data.email
        });
    }
}

export const signIn = (email, password) => {
    return async dispatch => {
        const response = await fetch(FIREBASE_SIGN_IN, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })
        const data = await response.json()

        verifySigning(data)

        dispatch({
            type: SIGN_IN,
            token: data.idToken,
            userId: data.localId,
            isRegistered: data.registered,
            email: data.email
        });
    }
}

