import express from 'express';
import http from 'http';
const { Server } = from 'socketio';

const app = express();
const server = http.createServer(app);
const sockets = socketio(server);
