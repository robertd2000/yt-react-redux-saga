import { showAlert } from "./actions"
import { CREATE_POST } from "./types"

const forbidden = ['spam', 'fuck', 'dick']

export const forbiddenMiddleware = ({ dispatch }) => next => action => {
    if (action.type === CREATE_POST) {
        const found = forbidden.filter(w => action.payload.title.includes(w))
        if (found.length > 0) {
            return dispatch(showAlert('spam'))
        }
    }

    return next(action)
}