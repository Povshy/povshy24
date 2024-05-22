class Finance {
  static #transactions = []

  static deposit(user, amount) {
    user.balance += amount
    Finance.#transactions.push({
      type: 'deposit',
      userId: user.id,
      amount,
    })
    return user.balance
  }

  static transfer(sender, recipientEmail, amount) {
    const recipient = User.getByEmail(recipientEmail)

    if (!recipient) {
      throw new Error('Recipient not found')
    }

    if (sender.balance < amount) {
      throw new Error('Insufficient funds')
    }

    sender.balance -= amount
    recipient.balance += amount

    Finance.#transactions.push({
      type: 'transfer',
      from: sender.id,
      to: recipient.id,
      amount,
    })

    return {
      senderBalance: sender.balance,
      recipientBalance: recipient.balance,
    }
  }

  static getTransactions() {
    return Finance.#transactions
  }
}

module.exports = {
  Finance,
}
