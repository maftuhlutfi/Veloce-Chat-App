import { io } from "socket.io-client";

const host = 'http://localhost:4000'

export default class socketClient {
    socket;

    connect() {
        this.socket = io(host);
        return new Promise((resolve, reject) => {
            this.socket.on('connect', () => resolve());
            this.socket.on('connect_error', err => reject(err));
        })
    }

    disconnect() {
        return new Promise(resolve => {
            this.socket.disconnect(() => {
                this.socket = null;
                resolve();
            })
        })
    }

    emit(event, data) {
        return new Promise((resolve, reject) => {
            if (!this.socket) return reject('No socket connection.');

            this.socket.emit(event, data, res => {
                if (res.error) {
                    console.error(res.error);
                    return reject(res.error)
                }
            })

            return resolve();
        })
    }

    on(event, func) {
        return new Promise((resolve, reject) => {
            if (!this.socket) return reject('No socket connection.');

            this.socket.on(event, func);
            resolve();
        })
    }
}