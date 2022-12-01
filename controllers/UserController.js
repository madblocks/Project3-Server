const { User, Event, Comment} = require('../models')

const FindUser = async (req, res) => {
  try {
    const result = await User.findAll({
      where: {username: req.params.username},
      attributes: ['username',
                    'firstName', 
                    'lastName', 
                    'fullName',
                    'email',
                    'phoneNumber',
                    'profileImg',
                    'bio',
                    'favorites']
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    const updatedUser = await User.update(
      req.body,
      {
        where: { username: req.params.username},
        returning: true
      }
    )
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    const deletedUser = await User.destroy({
      where: {id: req.params.username},
      trunicate: true
    })
    res.send(deletedUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  FindUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
}