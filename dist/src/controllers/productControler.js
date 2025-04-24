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
exports.deleteProduct = exports.modifyProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const product_1 = require("../models/product");
//Create new product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        // Save Product in the database
        const { nombre, descripcion, inventario, id_comedor = 1 } = req.body;
        const product = {
            nombre,
            descripcion,
            inventario,
            id_comedor
        };
        console.log("Creando producto con:", product);
        const data = yield product_1.Product.create(product);
        res.status(200).json({
            status: "success",
            message: "Product successfully created",
            payload: data,
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened creating a product. " + err.message,
            payload: null,
        });
    }
});
exports.createProduct = createProduct;
// Get all products using Promises
const getAllProducts = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query.
    product_1.Product.findAll()
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Products successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all products. " + err.message,
            payload: null,
        });
    });
};
exports.getAllProducts = getAllProducts;
// Get products by Id
const getProductById = (req, res) => {
    product_1.Product.findByPk(req.params.id)
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Products successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all products. " + err.message,
            payload: null,
        });
    });
};
exports.getProductById = getProductById;
// Modify product
const modifyProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        // Save Product in the database
        const [isUpdated] = yield product_1.Product.update(Object.assign({}, req.body), { where: { id: req.params.id } });
        if (isUpdated) {
            res.status(200).json({
                status: "success",
                message: "Product successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            res.status(500).json({
                status: "error",
                message: "Something happened updating the product.",
                payload: null,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a product. " + err.message,
            payload: null,
        });
    }
});
exports.modifyProduct = modifyProduct;
//Delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield product_1.Product.destroy({ where: { id } });
        res.status(200).json({ message: "Product deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting products",
            error,
        });
    }
});
exports.deleteProduct = deleteProduct;
