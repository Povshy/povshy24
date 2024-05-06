class User {
  static #list = []
  static #count = 1

  constructor(email, password) {
    this.id = User.#count++

    this.email = String(email).toLowerCase()
    this.password = String(password)
  }

  static create(email, password) {
    const newUser = new User(email, password, id)
    this.#list.push(newUser)

    console.log(this.#list)

    return newUser
  }

  static getById(id) {
    return (
      this.#list.find((item) => item.id === Number(id)) ||
      null
    )
  }

  static getList = () => this.#list
}

module.exports = {
  User,
}
