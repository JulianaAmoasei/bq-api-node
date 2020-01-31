import { Router } from 'express'
import orderItemsController from '../controllers/orderItemsController'

const router = Router()
// router.get('/', OrdersController.getAll)
router.post('/', orderItemsController.addOrderItem)
// router.get('/:id', AuthorController.getAuthor)
// router.put('/:id', AuthorController.updatedAuthor)
// router.delete('/:id', AuthorController.deleteAuthor)
export default router