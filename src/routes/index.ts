import { Router, Request, Response } from 'express';
import productRoutes from './productRoutes';
import personRoutes from './personRoutes';

const apiRouter:Router = Router();

apiRouter.use('/product', productRoutes);
apiRouter.use('/person', personRoutes);

apiRouter.get('/', (req:Request, res: Response) => {
    res.send('Hello World!')
})

export default apiRouter;