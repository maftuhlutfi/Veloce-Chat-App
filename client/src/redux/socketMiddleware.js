export default function socketMiddleware(socket) {
    return ({dispatch, getState}) => next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState)
        }

        const {promise, type, types, ...rest} = action;

        if (type !== 'socket' && !promise) {
            return next(action)
        }

        const [START, SUCCESS, FAILURE] = types;
        next({...rest, type: START});

        return promise(socket)
            .then(res => {
                return next({...rest, payload: res, type: SUCCESS})
            })
            .catch(err => {
                console.log(err)
                return next({...rest, payload: err, type: FAILURE})
            })
    }
}