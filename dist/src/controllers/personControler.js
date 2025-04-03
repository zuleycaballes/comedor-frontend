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
exports.deletePerson = exports.modifyPerson = exports.getPersonById = exports.getAllPeople = exports.createPerson = void 0;
const person_1 = require("../models/person");
// Create and Save a new Person
const createPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        // Save Person in the database
        const person = Object.assign({}, req.body);
        const data = yield person_1.Person.create(person);
        res.status(200).json({
            status: "success",
            message: "Person successfully created",
            payload: data,
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened creating a person. " + err.message,
            payload: null,
        });
    }
});
exports.createPerson = createPerson;
// Get all people using Promises
const getAllPeople = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PERSON in a SQL query.
    person_1.Person.findAll()
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "People successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all people. " + err.message,
            payload: null,
        });
    });
};
exports.getAllPeople = getAllPeople;
// Get person by Id
const getPersonById = (req, res) => {
    person_1.Person.findByPk(req.params.id)
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Person successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving the person. " + err.message,
            payload: null,
        });
    });
};
exports.getPersonById = getPersonById;
// Modify person
const modifyPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        // Save Person in the database
        const [isUpdated] = yield person_1.Person.update(Object.assign({}, req.body), { where: { id: req.params.id } });
        if (isUpdated) {
            res.status(200).json({
                status: "success",
                message: "Person successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            res.status(500).json({
                status: "error",
                message: "Something happened updating the person.",
                payload: null,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a person. " + err.message,
            payload: null,
        });
    }
});
exports.modifyPerson = modifyPerson;
//Delete person
const deletePerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield person_1.Person.destroy({ where: { id } });
        res.status(200).json({ message: "Person deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting person",
            error,
        });
    }
});
exports.deletePerson = deletePerson;
