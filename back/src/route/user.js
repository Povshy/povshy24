// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const { User } = require('../class/user')
const { Confirm } = require('../class/confirm')

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.post('/signup', function (req, res) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message:
          'Потрібно передати всі дані для створення користувача',
      })
    }

    const control = User.getByEmail(email)
    console.log(`ccccccccccc`, control)

    if (control) {
      return res.status(400).json({
        message: 'Користувач такий вже існує',
      })
    }

    const newUser = User.create(email, password)
    const confirmCode = Confirm.generateCode()
    newUser.id = confirmCode
    console.log('88888888', newUser)

    return res.status(200).json({
      user: {
        email: newUser.email,
        password: newUser.password,
        id: newUser.id,
      },
    })
  } catch (error) {
    return res.status(400).json({
      message: 'SignUp fuckin problem',
    })
  }
})
// ===========
// router.get('/signup-confirm', function (req, res) {
//   // const userId = req.query.id
//   // const userId = req.query
//   const { id } = req.query
//   console.log('User ID:', id)
//   console.log('Received query parameters:', req.query)

//   return res.status(200).json({
//     message: 'Реєстрація підтверджена успішно',
//   })
// })
// ===========
router.post('/signup-confirm', function (req, res) {
  try {
    const { code, id } = req.body

    console.log(`User id:`, id)
    console.log(`Code:`, code)

    if (!code || !id) {
      return res.status(400).json({
        message:
          'Потрібно передати всі дані для підтвердження реєстрації',
      })
    }

    const user = User.getById(id)

    if (!user) {
      return res.status(404).json({
        message: 'Користувача з таким ID не знайдено',
      })
    }

    console.log('Знайдений користувач:', user)

    if (code !== id) {
      return res.status(400).json({
        message: 'Неправильний код підтвердження',
      })
    }

    return res.status(200).json({
      message: 'Реєстрація підтверджена успішно',
    })
  } catch (error) {
    console.error('Помилка:', error)
    return res.status(500).json({
      message: 'Виникла помилка при обробці запиту',
    })
  }
})

// ================

// Підключаємо роутер до бек-енду
module.exports = router
