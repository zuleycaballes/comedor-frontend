import { RequestHandler, Request, Response } from "express"; 
import { Comedor } from "../models/comedor";

export const login: RequestHandler = async (req, res): Promise<void> => {
    const { username, password } = req.body;
  
    if (password !== "123") {
        res.status(401).json({ message: "Contraseña incorrecta" });
        return;
    }
  
    const user = await Comedor.findOne({ where: { nombre: username } });
    if (!user) {
        res.status(404).json({ message: "Usuario no encontrado" });
        return;
    }
  
    res.status(200).json({ message: "Login exitoso" });
};

// Create and Save a new Comedor
export const createComedor: RequestHandler = async (req: Request, res: Response): Promise<void> => {
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
        const comedor = { ...req.body };
        const data = await Comedor.create(comedor);
        res.status(200).json({
            status: "success",
            message: "Comedor successfully created",
            payload: data,
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened creating a comedor. " + (err as Error).message,
            payload: null,
        });
    }
};

// Get all comedores using Promises
export const getAllComedores: RequestHandler = (req: Request, res: Response) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM COMEDOR in a SQL query.
    Comedor.findAll()
    .then((data: Comedor[]) => {
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

// Get comedor by Id
export const getComedorById: RequestHandler = (req: Request, res: Response) => {
    Comedor.findByPk(req.params.id)
    .then((data: Comedor | null) => {
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
}

// Modify comedor
export const modifyComedor: RequestHandler = async (req: Request, res: Response): Promise<void> => {
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
        const [isUpdated] = await Comedor.update({ ...req.body }, { where: { id: req.params.id } });
        if (isUpdated) {
            res.status(200).json({
                status: "success",
                message: "Comedor successfully updated",
                payload: { ...req.body },
            });
        } else {
            res.status(500).json({
                status: "error",
                message: "Something happened updating the comedor.",
                payload: null,
            });
        }
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a comedor. " + (err as Error).message,
            payload: null,
        });
    }
};

//Delete comedor
export const deleteComedor: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;
    try {
        await Comedor.destroy({ where: { id } });
        res.status(200).json({ message: "Comedor deleted" });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting comedor",
            error,
        });
    }
};