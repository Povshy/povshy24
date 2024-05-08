class Confirm {
  static #codes = new Map()

  static generateCode(email) {
    const code = Math.floor(1000 + Math.random() * 9000)
    this.#codes.set(email, code)

    console.log('Your Code:', code)
    return code
  }

  static verifyCode(email, code) {
    const storeCode = this.#codes.get(email)
    return storeCode === code
  }
}

module.exports = {
  Confirm,
}
