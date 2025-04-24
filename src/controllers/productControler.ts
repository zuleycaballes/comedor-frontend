import { RequestHandler, Request, Response } from "express";
import { Product } from "../models/product";

//Create new product
export const createProduct: RequestHandler = async (req: Request, res: Response): Promise<void> => {
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
        const {
            nombre,
            descripcion,
            inventario,
            id_comedor,
            imagen
        } = req.body;

        const product = {
            nombre,
            descripcion,
            inventario,
            id_comedor,
            imagen
        };
        console.log("Creando producto con:", product); 
        const data = await Product.create(product);
        res.status(200).json({
            status: "success",
            message: "Product successfully created",
            payload: data,
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened creating a product. " + (err as Error).message,
            payload: null,
        });
    }
};

// Get all products using Promises
export const getAllProducts: RequestHandler = (req: Request, res: Response) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query.
    Product.findAll()
    .then((data: Product[]) => {
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

// Get products by Id
export const getProductById: RequestHandler = (req: Request, res: Response) => {
    Product.findByPk(req.params.id)
    .then((data: Product | null) => {
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
}

// Modify product
export const modifyProduct: RequestHandler = async (req: Request, res: Response): Promise<void> => {
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
        const [isUpdated] = await Product.update({ ...req.body }, { where: { id: req.params.id } });
        if (isUpdated) {
            res.status(200).json({
                status: "success",
                message: "Product successfully updated",
                payload: { ...req.body },
            });
        } else {
            res.status(500).json({
                status: "error",
                message: "Something happened updating the product.",
                payload: null,
            });
        }
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a product. " + (err as Error).message,
            payload: null,
        });
    }
};

//Delete product
export const deleteProduct: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await Product.destroy({ where: { id } });
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting products",
            error,
        });
    }
};