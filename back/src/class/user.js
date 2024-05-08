class User {
  static #list = []
  static #count = 1

  constructor(email, password) {
    this.id = User.#count++

    this.email = String(email).toLowerCase()
    this.password = String(password)
    this.confirmCode = ''
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
}

module.exports = {
  User,
}
