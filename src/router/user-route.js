import { Router } from 'express';
import {
  register,
  create,
  readAll, 
  readById, 
  updateById, 
  deleteById 
} from '../controller';

const routes = Router();
  
//register page
routes.route('/users/register')
  .get(register)
  .post(create);

//route group
routes.route('/users')
 .get(readAll)
 .post(create);

//route parameter
routes.route('/users/:id')
 .get(readById)
 .put(updateById)
 .delete(deleteById);

export { routes };
