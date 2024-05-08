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
    const confirmCode = Confirm.generateCode()
    newUser.confirmCode = confirmCode
    console.log(newUser.confirmCode)

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
router.post('/signup-confirm', function (req, res) {
  try {
    const { email, code } = req.body

    if (!email || !code) {
      return res.status(400).json({
        message:
          'Потрібно передати всі дані для підтвердження реєстрації',
      })
    }

    const user = User.getByEmail(email)

    // Перевірка коду підтвердження
    // const isConfirmed = Confirm.verifyCode(email, code)

    if (code !== user.confirmCode) {
      return res.status(400).json({
        message: 'Неправильний код підтвердження',
      })
    }

    // Якщо код підтвердження вірний, можна виконати подальші дії, наприклад, підтвердження реєстрації користувача

    return res.status(200).json({
      message: 'Реєстрація підтверджена успішно',
    })
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    })
  }
})

// ================

// Підключаємо роутер до бек-енду
module.exports = router
