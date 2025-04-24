"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const productControler_1 = require("../controllers/productControler");
const productRouter = (0, express_1.Router)();
// Configuración de multer
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // carpeta de destino
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // nombre único
    }
});
const upload = (0, multer_1.default)({ storage });
// Rutas de productos
productRouter.get('/', productControler_1.getAllProducts);
productRouter.get('/:id', productControler_1.getProductById);
productRouter.post('/', productControler_1.createProduct);
productRouter.patch('/:id', productControler_1.modifyProduct);
productRouter.delete('/:id', productControler_1.deleteProduct);
// Ruta para subir imagen
productRouter.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: 'No se subió ninguna imagen' });
        return;
    }
    res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
});
exports.default = productRouter;
