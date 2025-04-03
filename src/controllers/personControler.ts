import { RequestHandler, Request, Response } from "express"; 
import { Person } from "../models/person";

// Create and Save a new Person
export const createPerson: RequestHandler = async (req: Request, res: Response): Promise<void> => {
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
        const person = { ...req.body };
        const data = await Person.create(person);
        res.status(200).json({
            status: "success",
            message: "Person successfully created",
            payload: data,
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened creating a person. " + (err as Error).message,
            payload: null,
        });
    }
};

// Get all people using Promises
export const getAllPeople: RequestHandler = (req: Request, res: Response) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PERSON in a SQL query.
    Person.findAll()
    .then((data: Person[]) => {
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

// Get person by Id
export const getPersonById: RequestHandler = (req: Request, res: Response) => {
    Person.findByPk(req.params.id)
    .then((data: Person | null) => {
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
}

// Modify person
export const modifyPerson: RequestHandler = async (req: Request, res: Response): Promise<void> => {
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
        const [isUpdated] = await Person.update({ ...req.body }, { where: { id: req.params.id } });
        if (isUpdated) {
            res.status(200).json({
                status: "success",
                message: "Person successfully updated",
                payload: { ...req.body },
            });
        } else {
            res.status(500).json({
                status: "error",
                message: "Something happened updating the person.",
                payload: null,
            });
        }
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a person. " + (err as Error).message,
            payload: null,
        });
    }
};

//Delete person
export const deletePerson: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;
    try {
        await Person.destroy({ where: { id } });
        res.status(200).json({ message: "Person deleted" });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting person",
            error,
        });
    }
};
