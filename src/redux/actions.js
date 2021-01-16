export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';


export const setPostAC = (text) => ({ type: UPDATE_MESSAGE, text })

export const sendPostAC = () => ({ type: SEND_MESSAGE })