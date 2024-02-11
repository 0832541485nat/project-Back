const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const todoController = require('../controllers/todo-controller')

router.get('/', authenticate, todoController.getByUser)
router.post('/', authenticate, todoController)
router.put('/:id', authenticate, ()=>{} )
router.delete('/:id', authenticate, ()=>{} )

module.exports = router