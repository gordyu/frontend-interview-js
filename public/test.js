// Talk about whether using ES6 fetch and async/await is a good choice, as older browsers don't support it
const ul = document.getElementById('list');
const form = document.getElementById('form');
const inputField = document.getElementById('todo-field');

// Don't need closure from global scope. Webpack handles.
form.addEventListener('submit', async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/todo', {
        method: 'POST',
        headers: {
            Accept: "applicatio/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ todo: inputField.value })
    });
    const json = await res.json();
    const li = document.createElement('li');
    li.innerHTML = json.todo;
    ul.appendChild(li);
})