// Contains functions that render data from the models classes (User and Note)

class NoteUser {
  renderPreview(note) {
    const newNote = new Note(note)
    const bodyEl = document.querySelector("#note-list")
    bodyEl.innerHTML += newNote.renderPreview()
  }

  renderNote(note) {
    const foundNote = new Note(note)
    const mainEl = document.querySelector("#main")
    mainEl.innerHTML = foundNote.renderFullText()
    return foundNote
  }

  renderNewForm() {
    const mainEl = document.querySelector("#main")
    mainEl.innerHTML = Note.renderNewForm()
  }

  renderUpdateForm(note) {
    const mainEl = document.querySelector("#main")
    mainEl.innerHTML = Note.renderUpdateForm(note)
  }
}
