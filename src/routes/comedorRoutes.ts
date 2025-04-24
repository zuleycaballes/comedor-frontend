import { Router } from 'express';
import { createComedor,
deleteComedor,
getAllComedores,
getComedorById,
modifyComedor,
login
} from '../controllers/comedorControler';
const personRouter:Router = Router();
personRouter.post("/login", login);
personRouter.get('/', getAllComedores);
personRouter.get('/:id', getComedorById);
personRouter.post('/', createComedor);
personRouter.patch('/:id', modifyComedor);
personRouter.delete('/', deleteComedor);
export default personRouter;