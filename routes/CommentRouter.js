const Router = require('express').Router()
const controller = require('../controllers/CommentController')

// url: /api/comment
Router.get('/', controller.FindComments)

// url: /api/comment/:commentId
Router.get('/:commentId', controller.GetComment)  //not sure if we need this
Router.post('/:commentId', controller.CreateComment)
Router.put('/:commentId', controller.UpdateComment)
Router.delete('/:commentId', controller.DeleteComment)

module.exports = Router