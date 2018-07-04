const User = (function() {
  return class {
    constructor(user) {
      this.id = user.id
      this.name = user.name
      this.notes = user.notes // THIS IS AN ARRAY
    }

    renderEl() {
      return `<p>${this.id} | ${this.name} | ${this.notes}</p>`
    }
  }
})()
