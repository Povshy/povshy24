// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const { User } = require('../class/user')

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.post('/signup', function (req, res) {
  console.log(req.body)
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message:
          'Потрібно передати всі дані для створення користувача',
      })
    }

    const newUser = User.create(email, password)

    return res.status(200).json({
      post: {
        email: newUser.email,
        password: newUser.password,
      },
    })
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    })
  }
})
// ===========

// ================

// Підключаємо роутер до бек-енду
module.exports = router
