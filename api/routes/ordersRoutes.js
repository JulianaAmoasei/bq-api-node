import { Router } from 'express'
import OrdersController from '../controllers/ordersController'

const router = Router()
router.get('/', OrdersController.getAll)
router.post('/', OrdersController.addOrder)
// router.get('/:id', AuthorController.getAuthor)
// router.put('/:id', AuthorController.updatedAuthor)
// router.delete('/:id', AuthorController.deleteAuthor)
export default router