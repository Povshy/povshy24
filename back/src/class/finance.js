const { User } = require('./user')

class Finance {
  static #transactions = []

  static deposit(user, amount, name) {
    user.balance += amount
    Finance.#transactions.push({
      type: 'Receipt',
      userEmail: user.email,
      amount,
      name,
      date: new Date().toLocaleString(),
      id: User.generateCode(),
    })
    return user.balance
  }

  static transfer(sender, recipientEmail, amount) {
    const recipient = User.getByEmailConfirm(recipientEmail)

    if (!recipient) {
      throw new Error('Такий отримувач не знайдений')
    }

    if (sender.balance < amount) {
      throw new Error('Не достатньо коштів')
    }

    sender.balance -= amount
    recipient.balance += amount

    sender.save()
    recipient.save()

    Finance.#transactions.push({
      type: 'Sending',
      userEmail: sender.email,
      name: recipientEmail,
      amount,
      date: new Date().toLocaleString(),
      id: User.generateCode(),
    })

    return {
      senderBalance: sender.balance,
      recipientBalance: recipient.balance,
    }
  }

  static getTransactions(userEmail) {
    return Finance.#transactions.filter(
      (item) =>
        item.userEmail === userEmail ||
        item.name === userEmail,
    )
  }

  static getById(id) {
    return Finance.#transactions.find(
      (item) => item.id === id,
    )
  }
}

module.exports = {
  Finance,
}
