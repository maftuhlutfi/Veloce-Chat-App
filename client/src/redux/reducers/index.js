import * as types from '../types';

const INITIAL_STATE = {
    socket: null,
    room: null,
    chatLog: null,
    user: null,
    isLoading: false,
    errMsg: ''
}

const chatReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SOCKET_CONNECT_SUCCESS:
            return ({
                ...state,
                socket: action.payload
            })
        case types.CREATE_ROOM_START:
        case types.JOIN_ROOM_START:
            return ({
                ...state,
                isLoading: true
            });
        case types.CREATE_ROOM_SUCCESS:
        case types.JOIN_ROOM_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                room: action.payload.room,
                chatLog: action.payload.chatLog,
                user: action.payload.user,
                errMsg: ''
            })
        case types.CREATE_ROOM_FAILURE:
        case types.JOIN_ROOM_FAILURE:
        case types.SOCKET_CONNECT_FAILURE:
            return ({
                ...state,
                isLoading: false,
                errMsg: action.payload
            })
        default:
            return state;
    }
}

export default chatReducers;