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

    const newUser = User.create(email, password)
    const confirmCode = Confirm.generateCode()
    newUser.confirmCode = confirmCode
    console.log('88888888', newUser)

    // return res.redirect(`/signup-confirm/${newUser.id}`)

    return res.status(200).json({
      user: {
        email: newUser.email,
        password: newUser.password,
        id: newUser.id,
      },
    })
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    })
  }
})
// ===========
// router.get('/signup-confirm', function (req, res) {
//   const userId = req.query.id
//   const userId = req.query
//   console.log('User ID:', userId)
//   console.log('Received query parameters:', req.query)

//   return res.status(200).json({
//     message: 'Реєстрація підтверджена успішно',
//   })
// })
// ===========
router.post('/signup-confirm', function (req, res) {
  try {
    const { code, id } = req.body
    // const { code } = req.body
    // const { id } = req.query

    console.log(`uuuuuuser`, id)

    if (!code) {
      return res.status(400).json({
        message:
          'Потрібно передати всі дані для підтвердження реєстрації',
      })
    }

    const user = User.getById(id)
    console.log(`uuuuuuser`, user)

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
