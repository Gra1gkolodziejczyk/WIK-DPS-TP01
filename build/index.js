"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('This is a web page!');
});
app.get('/ping', (req, res) => {
    res.send(req.hostname);
    console.log(os_1.default.hostname());
});
app.get('/tarace', (req, res) => {
    res.send(req.headers);
});
app.get('/*', (req, res) => {
    res.send('This is a PAGE 404');
});
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
