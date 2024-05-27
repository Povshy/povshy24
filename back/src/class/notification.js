class Notification {
  static #notifications = []

  static note_inTrans(user) {
    Notification.#notifications.push({
      type: 'New incoming transaction',
      name: 'Announcement',
      time: new Date().toISOString(),
      id: user.id,
    })
  }

  static note_outTrans(user) {
    Notification.#notifications.push({
      type: 'New outgoing transaction',
      name: 'Announcement',
      time: new Date().toISOString(),
      id: user.id,
    })
  }

  static note_Email(user) {
    Notification.#notifications.push({
      type: 'New Email change',
      name: 'Warning',
      time: new Date().toISOString(),
      id: user.id,
    })
  }

  static note_Password(user) {
    Notification.#notifications.push({
      type: 'New Password change',
      name: 'Warning',
      time: new Date().toISOString(),
      id: user.id,
    })
  }

  static getById(id) {
    return Notification.#notifications.filter(
      (item) => item.id == id,
    )
  }
}

module.exports = {
  Notification,
}
