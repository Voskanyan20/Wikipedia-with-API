export const API_REQUEST = 'API_REQUEST'
export const API_SUCCESS = 'API_SUCCESS'


export function wikiRequest(text) {
    return {
        type: API_REQUEST,
        payload: text
    }
}