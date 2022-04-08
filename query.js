//sequelize model:generate --name user --attributes username:string,email:string,password:string
//sequelize model:generate --name post --attributes userId:integer,content:string
//sequelize model:generate --name comment --attributes postId:integer,content:string

const { user, comment, post, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const createUser = async () => {
  const res = await user.create({
    username: 'Tak',
    email: 'Tak@gmail.com',
    password: '123456789'
  })
  stringify(res)
}

const findAllUser = async () => {
  const res = await user.findAll()
  stringify(res)
}

const findOneUser = async () => {
  const res = await user.findOne({
    where: { username: 'InsaneTak' }
  })
  stringify(res)
}

const updateUser = async () => {
  await user.update(
    { username: 'InsaneTak' },
    {
      where: {
        username: 'Tak'
      }
    }
  )
}

const deleteUser = async () => {
  await user.destroy({
    where: { username: 'InsaneTak' }
  })
}

const createPost = async () => {
  const res = await post.create({
    userId: 1,
    content: 'Hello'
  })
  stringify(res)
}

const findAllPost = async () => {
  const res = await post.findAll()
  stringify(res)
}

const findOnePost = async () => {
  const res = await post.findOne({
    where: { content: 'Hello!!!' }
  })
  stringify(res)
}

const updatePost = async () => {
  await post.update(
    { content: 'Hello!!!' },
    {
      where: {
        content: 'Hello'
      }
    }
  )
}

const deletePost = async () => {
  await post.destroy({
    where: { content: 'Hello!!!' }
  })
}

const createComment = async () => {
  const res = await comment.create({
    postId: 1,
    content: 'Hello'
  })
  stringify(res)
}

const findAllComment = async () => {
  const res = await comment.findAll()
  stringify(res)
}

const findOneComment = async () => {
  const res = await comment.findOne({
    where: { content: 'Hello!!!' }
  })
  stringify(res)
}

const updateComment = async () => {
  await comment.update(
    { content: 'Hello!!!' },
    {
      where: {
        content: 'Hello'
      }
    }
  )
}

const deleteComment = async () => {
  await comment.destroy({
    where: { content: 'Hello!!!' }
  })
}

async function main() {
  try {
    // await createUser()
    // await updateUser()
    // await findOneUser()
    // await deleteUser()
    // await createPost()
    // await updatePost()
    // await findOnePost()
    // await deletePost()
    await createComment()
    await updateComment()
    await findOneComment()
    await deleteComment()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
