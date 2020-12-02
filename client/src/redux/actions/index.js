import * as types from "../types";
import axios from "axios";

const BASE_API = 'http://localhost:4000';

const createRoomApi = roomData => {
    return axios({
        method: 'POST',
        withCredentials: true,
        url: `${BASE_API}/create`,
        data: roomData
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err);
        throw err.response.data
    })
}

const joinRoomApi = roomAndUser => {
    return axios({
        method: 'POST',
        withCredentials: true,
        url: `${BASE_API}/join`,
        data: roomAndUser
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        throw err.response.data
    })
}

const updateUsersApi = roomCode => {
    return axios({
        method: 'GET',
        withCredentials: true,
        url: `${BASE_API}/getusers/${roomCode}`
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        throw err.response.data
    })
}

export function socketConnect() {
    return {
        type: 'socket',
        types: [types.SOCKET_CONNECT_START, types.SOCKET_CONNECT_SUCCESS, types.SOCKET_CONNECT_FAILURE],
        promise: socket => socket.connect()
    };
}

export const createRoomStart = roomData => async dispatch => {
    dispatch({type: types.CREATE_ROOM_START});
    try {
        const data = await createRoomApi(roomData);
        dispatch(createRoomSuccess(data));
        dispatch(emitJoinRoom(data.room.roomCode));
        dispatch(onJoinRoom(dispatch, data.room.roomCode))
    }
    catch (err) {
        dispatch(createRoomFailure(err));
    }
}

export const createRoomSuccess = data => ({
    type: types.CREATE_ROOM_SUCCESS,
    payload: data
})

export const createRoomFailure = err => ({
    type: types.CREATE_ROOM_FAILURE,
    payload: err
})

export const joinRoomStart = roomAndUser => async dispatch => {
    dispatch({type: types.JOIN_ROOM_START});
    try {
        const data = await joinRoomApi(roomAndUser);
        dispatch(joinRoomSuccess(data));
        dispatch(emitJoinRoom(data.room.roomCode));
        dispatch(onJoinRoom(dispatch, data.room.roomCode))
    } catch(err) {
        dispatch(joinRoomFailure(err))
    }
}

export const joinRoomSuccess = data => ({
    type: types.JOIN_ROOM_SUCCESS,
    payload: data
})

export const joinRoomFailure = err => ({
    type: types.JOIN_ROOM_FAILURE,
    payload: err
})

export const updateUsersStart = roomCode => async dispatch => {
    dispatch({type: types.UPDATE_USERS_START});
    try {
        const users = await updateUsersApi(roomCode);
        dispatch(updateUsersSuccess(users));
    } catch(err) {
        dispatch(updateUsersFailure(err))
    }
}

export const updateUsersSuccess = users => ({
    type: types.UPDATE_USERS_SUCCESS,
    payload: users
})

export const updateUsersFailure = err => ({
    type: types.UPDATE_USERS_FAILURE,
    payload: err
})

export const emitJoinRoom = roomCode => ({
    type: 'socket',
    types: ['EMIT_JOIN_ROOM', 'EMIT_JOIN_ROOM_SUCCESS', 'EMIT_JOIN_ROOM_FAILURE'],
    promise: socket => socket.emit('join room', roomCode)
})

export const onJoinRoom = (dispatch, roomCode) => ({
    type: 'socket',
    types: ['ON_JOIN_ROOM', 'ON_JOIN_ROOM_SUCCESS', 'ON_JOIN_ROOM_FAILURE'],
    promise: socket => socket.on('update users', () => dispatch(updateUsersStart(roomCode)))
})