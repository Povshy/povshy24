class User {
  static #list = []
  static #confirmList = []
  static #count = 100

  constructor(email, password, balance) {
    this.id = User.#count++

    this.email = String(email).toLowerCase()
    this.password = String(password)
    this.balance = balance
      ? parseFloat(balance.toFixed(2))
      : 2500
  }

  static create(email, password) {
    const newUser = new User(email, password)
    User.#list.push(newUser)

    return newUser
  }

  static getById(id) {
    return (
      User.#list.find((item) => item.id === Number(id)) ||
      null
    )
  }

  static getByEmail(email) {
    return (
      User.#list.find((item) => item.email === email) ||
      null
    )
  }

  static newUserConfirm(email, password, balance = 2500) {
    const newUser = new User(email, password, balance)
    User.#confirmList.push(newUser)

    return newUser
  }

  static createConfirm(user) {
    User.#confirmList.push(user)

    console.log('Підтверджений список:', User.#confirmList)
    console.log('Підтверджений ЮЗЕР:', user)
    return user
  }

  static getByEmailConfirm(email) {
    return (
      User.#confirmList.find(
        (item) => item.email === email,
      ) || null
    )
  }

  static getByIdConfirm(id) {
    return (
      User.#confirmList.find(
        (item) => item.id === Number(id),
      ) || null
    )
  }

  static generateCode() {
    const code = Math.floor(10000 + Math.random() * 90000)
    return code
  }

  static getConfirmList() {
    return User.#confirmList
  }

  save() {
    // Оновлюємо користувача в основному списку
    const index = User.#list.findIndex(
      (item) => item.id === this.id,
    )
    if (index !== -1) {
      User.#list[index] = this
    }

    // Оновлюємо користувача в підтвердженому списку
    const confirmIndex = User.#confirmList.findIndex(
      (item) => item.id === this.id,
    )
    if (confirmIndex !== -1) {
      User.#confirmList[confirmIndex] = this
    }
  }
}

module.exports = {
  User,
}
