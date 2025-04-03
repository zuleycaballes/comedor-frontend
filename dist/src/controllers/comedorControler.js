"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComedor = exports.modifyComedor = exports.getComedorById = exports.getAllComedores = exports.createComedor = void 0;
const comedor_1 = require("../models/comedor");
// Create and Save a new Comedor
const createComedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request
        if (!req.body) {
            res.status(400).json({
                status: "error",
                message: "Content can not be empty",
                payload: null,
            });
            return;
        }
        // Save Comedor in the database
        const comedor = Object.assign({}, req.body);
        const data = yield comedor_1.Comedor.create(comedor);
        res.status(200).json({
            status: "success",
            message: "Comedor successfully created",
            payload: data,
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened creating a comedor. " + err.message,
            payload: null,
        });
    }
});
exports.createComedor = createComedor;
// Get all comedores using Promises
const getAllComedores = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM COMEDOR in a SQL query.
    comedor_1.Comedor.findAll()
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Comedores successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all comedores. " + err.message,
            payload: null,
        });
    });
};
exports.getAllComedores = getAllComedores;
// Get comedor by Id
const getComedorById = (req, res) => {
    comedor_1.Comedor.findByPk(req.params.id)
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Comedor successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving the comedor. " + err.message,
            payload: null,
        });
    });
};
exports.getComedorById = getComedorById;
// Modify comedor
const modifyComedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request
        if (!req.body) {
            res.status(400).json({
                status: "error",
                message: "Content can not be empty.",
                payload: null,
            });
            return;
        }
        // Save Comedor in the database
        const [isUpdated] = yield comedor_1.Comedor.update(Object.assign({}, req.body), { where: { id: req.params.id } });
        if (isUpdated) {
            res.status(200).json({
                status: "success",
                message: "Comedor successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            res.status(500).json({
                status: "error",
                message: "Something happened updating the comedor.",
                payload: null,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a comedor. " + err.message,
            payload: null,
        });
    }
});
exports.modifyComedor = modifyComedor;
//Delete comedor
const deleteComedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield comedor_1.Comedor.destroy({ where: { id } });
        res.status(200).json({ message: "Comedor deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting comedor",
            error,
        });
    }
});
exports.deleteComedor = deleteComedor;
