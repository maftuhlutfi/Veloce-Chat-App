import * as types from "../types";
import { io } from "socket.io-client";
import axios from "axios";

const BASE_API = 'http://localhost:4000';

export const socketConnectStart = host => dispatch => {
    try {
        const socket = io(host);
        dispatch(socketConnectSuccess(socket));
    } catch(err) {
        socketConnectFailure(err);
    }
}

export const socketConnectSuccess = socket => ({
    type: types.SOCKET_CONNECT_SUCCESS,
    payload: socket
})

export const socketConnectFailure = err => ({
    type: types.SOCKET_CONNECT_FAILURE,
    payload:err
})

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

export const createRoomStart = roomData => async dispatch => {
    dispatch({type: types.CREATE_ROOM_START});
    try {
        const data = await createRoomApi(roomData);
        console.log(data);
        dispatch(createRoomSuccess(data));
    }
    catch(err) {
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
        dispatch(joinRoomSuccess(data))
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