import { Router } from "express";
import * as Controller from './controller'

const clientRouter = Router()

clientRouter.route('/').get(Controller.findAll);

export default clientRouter;