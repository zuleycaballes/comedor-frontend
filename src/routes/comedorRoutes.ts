import { Router, Request, Response } from 'express';
 
 const comedorRouter: Router = Router();
 
 comedorRouter.get('/', (req: Request, res: Response) => {
     res.send('Get a list of comedores');
 });
 
 comedorRouter.get('/:id', (req: Request, res: Response) => {
     res.send(`Get the comedor ${req.params.id}`);
 });
 
 comedorRouter.post('/', (req: Request, res: Response) => {
     res.send(`Create a new comedor with ID: ${req.body.id}`);
 });
 
 comedorRouter.patch('/:id', (req: Request, res: Response) => {
     res.send(`Update the comedor ${req.params.id} with the values of ${req.body.name}, ${req.body.email}, and ${req.body.rol}`);
 });
 
 comedorRouter.delete('/', (req: Request, res: Response) => {
     res.send(`Deleting the comedor ${req.body.id}`);
 });
 
 export default comedorRouter;