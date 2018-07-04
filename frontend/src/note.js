const Note = (function() {
  return class {
    constructor(note) {
      this.id = note.id
      this.user = note.user // THIS IS AN OBJECT
      this.title = note.title
      this.body = note.body
    }

    renderFullText() {
      return `<p>${this.id} | ${this.user.name} | ${this.user.id} | ${this.title} | ${this.body}</p><br/>
      <button type="submit" id="editButton">Edit</button>`
    }

    renderPreview() {
      let length = 10
      let body = this.body
      let truncated = body.substring(0, length)
      return `${this.user.name} | <a id="note-${this.id}">${this.title}</a> | ${truncated}</p>`
    }

    static renderNewForm() {
      return `<h2>Note</h2>
      <form action="POST" id="newForm">
        <label>Title:</label> <input type="text" id="newTitle" class="newFormElements" data-name="title"/><br/>
        <label>Body:</label> <textarea id="newBody" class="newFormElements" data-name="body"></textarea><br/>
        <input type="submit" id="newSubmit"/>
      </form>`
    }

    static renderUpdateForm(note) {
      return `<h2>Note</h2>
      <form action="PATCH" id="editForm" style="display: inline-block;"">
        <label>Title:</label> <input type="text" id="editTitle" class="editFormElements" data-name="title" value="${note.title}"/><br/>
        <label>Body:</label> <textarea id="editBody" class="editFormElements" data-name="body">${note.body}</textarea><br/>
        <input type="hidden" id="noteId" class="editFormElements" value="${note.id}"/>
        <input type="submit" id="editSubmit"/>
      </form>
      <button id="deleteButton" style="display: inline-block;">Delete</button>
      `
    }
  }
})()


// Use the notes static method to establish an array of user notes in the user model
