// Main app file.

// ----------------------------------------------
// basic functionality

// data model / persistence for todo items
var todos = [];

// add a todo, duplicates don't matter
function addTodo() {
    // event is a special object passed to event handlers in javascript from DOM api
    // filter out everything that isn't the enter key
    if ( event.keyCode !== 13 ) {
        return;
    }
    var todoText = event.currentTarget.value;
    console.log('Element received', todoText);


    // null / empty not allowed
    todos.push(todoText);
    console.log('current list', todos);
    
    // append the content
        // build some DOM fragment = element
        // example: <div><label>todoText</label></div>
        
        // append it to the todo container
        // get the element (todo container) by id or class
        // 
}


// remove a todo


// toggle a todo (complete/incomplete)


// ----------------------------------------------
// advanced functionality 

// filtering the data model 

// active items remaining count