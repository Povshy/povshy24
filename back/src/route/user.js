// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const { User } = require('../class/user')
const { Session } = require('../class/session')
const { Finance } = require('../class/finance')

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
    const confirmCode = User.generateCode()
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

    const confirmUser = User.createConfirm(user)
    const session = Session.create(confirmUser)

    if (!confirmUser) {
      return res.status(400).json({
        message: 'Користувача не знайдено',
      })
    }

    return res.status(200).json({
      id: confirmUser.id,
      message: 'Реєстрація підтверджена успішно',
      session,
    })
  } catch (error) {
    console.error('Помилка:', error)
    return res.status(400).json({
      message: 'Виникла помилка при обробці запиту',
    })
  }
})

// ================

router.post('/signin', function (req, res) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message:
          'Потрібно передати всі дані для створення користувача',
      })
    }

    const confirmUser = User.getByEmailConfirm(email)
    const session = Session.create(confirmUser)

    if (!confirmUser) {
      return res.status(400).json({
        message: 'Користувача не знайдено',
      })
    }

    if (password !== confirmUser.password) {
      return res.status(400).json({
        message: 'Пароль введено не вірно',
      })
    }

    return res.status(200).json({
      id: confirmUser.id,
      message: 'Вхід виконаний успішно',
      session,
    })
  } catch (error) {
    return res.status(400).json({
      message: 'SignUp fuckin problem',
    })
  }
})

// ================
router.post('/recovery', function (req, res) {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({
        message: 'Потрібно передати email',
      })
    }

    const control = User.getByEmailConfirm(email)
    console.log(`ccccccccccc`, control)

    if (!control) {
      return res.status(400).json({
        message: 'Користувача не знайдено',
      })
    }

    return res.status(200).json({
      id: control.id,
      message: 'Код відправлено',
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Recovery fuckin problem',
    })
  }
})
// ===========

router.post('/recovery-confirm', function (req, res) {
  try {
    const { code, id, password } = req.body

    console.log(`User id:`, id)
    console.log(`Code:`, code)

    if (!code || !id || !password) {
      return res.status(400).json({
        message:
          'Потрібно передати всі дані для зміни паролю',
      })
    }

    const user = User.getByIdConfirm(id)

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

    user.password = password

    const session = Session.create(user)

    if (!user) {
      return res.status(400).json({
        message: 'Користувача не знайдено',
      })
    }

    return res.status(200).json({
      id: user.id,
      message: 'Пароль успішно змінено',
      session,
    })
  } catch (error) {
    console.error('Помилка:', error)
    return res.status(400).json({
      message: 'Виникла помилка при обробці запиту',
    })
  }
})

// ================
router.get('/balance', function (req, res) {
  try {
    const { id } = req.query

    const user = User.getByIdConfirm(id)

    if (!user) {
      return res.status(400).json({
        message: 'Користувача не знайдено',
      })
    }

    return res.status(200).json({
      message: 'Вхід виконаний успішно',
      balance: user.balance,
      email: user.email,
    })
  } catch (error) {
    console.error('Помилка:', error)
    return res.status(400).json({
      message: 'Виникла помилка при обробці запиту',
    })
  }
})
// ================
router.post('/change-email', function (req, res) {
  try {
    const { id, email, password } = req.body

    const user = User.getByIdConfirm(id)

    if (!user) {
      return res.status(400).json({
        message: 'Користувача не знайдено',
      })
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: 'Невірний пароль',
      })
    }

    user.email = email
    return res.status(200).json({
      message: 'Email успішно змінено',
    })
  } catch (error) {
    console.error('Помилка:', error)
    return res.status(400).json({
      message: 'Виникла помилка при обробці запиту',
    })
  }
})
// ================
router.post('/change-password', function (req, res) {
  try {
    const { id, oldPassword, newPassword } = req.body

    const user = User.getByIdConfirm(id)

    if (!user) {
      return res.status(400).json({
        message: 'Користувача не знайдено',
      })
    }

    if (user.password !== oldPassword) {
      return res.status(400).json({
        message: 'Невірний старий пароль',
      })
    }

    user.password = newPassword
    return res.status(200).json({
      message: 'Пароль успішно змінено',
    })
  } catch (error) {
    console.error('Помилка:', error)
    return res.status(400).json({
      message: 'Виникла помилка при обробці запиту',
    })
  }
})
// ================

// Підключаємо роутер до бек-енду
module.exports = router
