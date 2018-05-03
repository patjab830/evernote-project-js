### Possible First Steps

* Figure out how to get the seeded data to appear in the Note List upon page load
* Set up your Create New Note form and add a form submit event listener to it
* Set up your Note and User classes


### Object-Oriented

If you decide to follow the object-oriented paradigm, consider the following:

  * Create a store variable for your classes in order to store the instances of each class
  * You can use the store in your index.js file to easily retrieve specific instances of Note or all instances of Note
  * Place your event listeners in your index.js file. Most of your other functionality will go into your classes. (i.e. render and your CRUD functionality)

### Checklist

1. Allow seeded data to appear upon page load
2. Allow user to create new notes via form submission
3. Allow user to edit existing notes via form submission
4. Allow user to delete notes via button click
5. The sidebar should contain a list of note previews
6. When a user clicks on a note preview, that event should render a full view of the note title and content
7. Any changes should be communicated to the API via fetch requests

### Cheat Sheet

* The basic syntax of a fetch request is:

  fetch("INSERT URL HERE", {
    method: 'INSERT GET/POST/PATCH/DELETE',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(INSERT DATA YOUR WANT TO SEND TO THE API)
  }).then(response => response.json())

* The header and body arguments are not necessary for GET and DELETE fetch requests
* The basic syntax of an event listener is:

  INSERT SOME HTML ELEMENT.addEventListener('INSERT EVENT TYPE', function(event){

  })

* Remember to use event.preventDefault() on form submit events

.
