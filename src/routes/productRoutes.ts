import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  modifyProduct
} from '../controllers/productControler';

const productRouter: Router = Router();

// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // carpeta de destino
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // nombre único
  }
});
const upload = multer({ storage });

// Rutas de productos
productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.post('/', createProduct);
productRouter.patch('/:id', modifyProduct);
productRouter.delete('/:id', deleteProduct);

// Ruta para subir imagen
productRouter.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No se subió ninguna imagen' });
    return;
  }
  res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
});

export default productRouter;
