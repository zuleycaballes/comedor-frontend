import { Router, Request, Response } from 'express';
import productRoutes from './productRoutes';
import personRoutes from './personRoutes';
import comedorRoutes from './comedorRoutes';

const apiRouter:Router = Router();

apiRouter.use('/product', productRoutes);
apiRouter.use('/person', personRoutes);
apiRouter.use('/comedor', comedorRoutes);

export default apiRouter;