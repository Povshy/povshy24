class User {
  static #list = []
  static #confirmList = []
  static #count = 1

  constructor(email, password) {
    this.id = User.#count++

    this.email = String(email).toLowerCase()
    this.password = String(password)
  }

  static create(email, password) {
    const newUser = new User(email, password)
    User.#list.push(newUser)

    console.log(User.#list)

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

  static getList() {
    return User.#list
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
}

module.exports = {
  User,
}
