"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personRouter = (0, express_1.Router)();
personRouter.get('/', (req, res) => {
    res.send('Get a list of people');
});
personRouter.get('/:id', (req, res) => {
    res.send(`Get the person ${req.params.id}`);
});
personRouter.post('/', (req, res) => {
    res.send(`Create a new person with ID: ${req.body.id}`);
});
personRouter.patch('/:id', (req, res) => {
    res.send(`Update the person ${req.params.id} with the values of ${req.body.name}, ${req.body.email}, and ${req.body.rol}`);
});
personRouter.delete('/', (req, res) => {
    res.send(`Deleting the person ${req.body.id}`);
});
exports.default = personRouter;
