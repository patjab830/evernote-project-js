// Contains event listeners and model manipulation

document.addEventListener("DOMContentLoaded", function() {
  const noteUser = new NoteUser()
  const adapter = new Adapter()
  adapter.getNotes().then(data => {
    data.forEach((note)=>noteUser.renderPreview(note))
  })

  const sidebarEl = document.querySelector("#sidebar")
  sidebarEl.addEventListener('click', (e) => {
    if ( e.target.id.includes('note-') ) {
      adapter.getNote(e.target.id.substring(5, e.target.id.length)).then(note => noteUser.renderNote(note)).then((note) => {
        let editButtonEl = document.querySelector("#editButton")
        editButtonEl.addEventListener('click', (e) => {
          e.preventDefault();
          noteUser.renderUpdateForm(note)

          // PATCH REQUEST - FOR EDITING
          const editFormEl = document.querySelector("#editForm")
          editFormEl.addEventListener('submit', (e)=>{
            e.preventDefault()
            const inputs = document.querySelectorAll(".editFormElements")
            const data = {}
            data["title"] = inputs[0].value
            data["body"] = inputs[1].value
            data["id"] = inputs[2].value
            adapter.updateNote(data)
          })

          // DELETE REQUEST
          const deleteButtonEl = document.querySelector("#deleteButton")
          deleteButtonEl.addEventListener('click', (e) => {
            const noteIdEl = document.querySelector("#noteId")
            adapter.deleteNote(noteIdEl.value)
          })
        })
      })
    }

  })

  const newNoteButtonEl = document.querySelector("#newBtn")
  newNoteButtonEl.addEventListener('click', (e) => {
    noteUser.renderNewForm()
    const newForm = document.querySelector("#newForm")

    newForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {}
      const inputs = document.querySelectorAll(".newFormElements")
      data["title"] = inputs[0].value
      data["body"] = inputs[1].value
      adapter.newNote(data)
    })

  })


});
