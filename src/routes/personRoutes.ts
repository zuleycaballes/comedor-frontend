import { Router } from 'express';
import { createPerson,
deletePerson,
getAllPeople,
getPersonById,
modifyPerson
} from '../controllers/personControler';
const personRouter:Router = Router();
personRouter.get('/', getAllPeople);
personRouter.get('/:id', getPersonById);
personRouter.post('/', createPerson);
personRouter.patch('/:id', modifyPerson);
personRouter.delete('/', deletePerson);
export default personRouter;
