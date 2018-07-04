// Manages the connection from Rails API for manipulation in the controllers
class Adapter {
  getNotes() {
    const baseURL = `http://localhost:3000/api/v1/notes`
    return fetch(baseURL).then(r => r.json())
  }

  getNote(id) {
    const baseURL = `http://localhost:3000/api/v1/notes/${id}`
    return fetch(baseURL).then(r => r.json())
  }

  newNote(data) {
      const baseURL = `http://localhost:3000/api/v1/notes/`
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      return fetch(baseURL, options)
        .then(r => r.json())

  }

  updateNote(data) {
      const baseURL = `http://localhost:3000/api/v1/notes/${data.id}`
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      return fetch(baseURL, options)
        .then(r => r.json())

  }

  deleteNote(id) {
    const baseURL = `http://localhost:3000/api/v1/notes/${id}`
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(data)
    }
    return fetch(baseURL, options)
      .then(r => r.json())

}

}
