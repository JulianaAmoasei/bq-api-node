import { Router } from 'express'
import TableController from '../controllers/tableController'

const router = Router()
router.get('/', TableController.getAll)
// router.post('/', AuthorController.addAuthor)
// router.get('/:id', AuthorController.getAuthor)
// router.put('/:id', AuthorController.updatedAuthor)
// router.delete('/:id', AuthorController.deleteAuthor)
export default router