import * as types from '../types';

const INITIAL_STATE = {
    room: null,
    chatLog: null,
    user: null,
    isLoading: false,
    errMsg: ''
}

const chatReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SOCKET_CONNECT_START:
        case types.SUBSCRIBE_START:
            return state;
        case types.SUBSCRIBE_SUCCESS:
            return ({
                ...state,
                errMsg: ''
            })
        case types.CREATE_ROOM_START:
        case types.JOIN_ROOM_START:
        case types.LEAVE_ROOM_START:
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
        case types.UPDATE_USERS_SUCCESS:
            return ({
                ...state,
                room: {
                    ...state.room,
                    users: action.payload
                }
            })
        case types.UPDATE_CHATLOG_SUCCESS:
            return ({
                ...state,
                chatLog: action.payload
            })
        case types.LEAVE_ROOM_SUCCESS:
            return ({
                ...state,
                room: null,
                chatLog: null,
                user: null,
                isLoading: false,
                errMsg: ''
            })
        case types.CREATE_ROOM_FAILURE:
        case types.JOIN_ROOM_FAILURE:
        case types.SOCKET_CONNECT_FAILURE:
        case types.SUBSCRIBE_FAILURE:
        case types.UPDATE_USERS_FAILURE:
        case types.UPDATE_CHATLOG_FAILURE:
        case types.LEAVE_ROOM_FAILURE:
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