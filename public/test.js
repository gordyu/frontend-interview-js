// Connect the js file to the css file to prevent css mutations
const ul = document.querySelector("[data-js=list]");
const clickCatcher = document.querySelector("[data-js=sidebar-slick-catcher]");
const openButton = document.querySelector("[data-js=open-sidebar]");
const themeButton = document.querySelector("[data-js=theme-button]");
const sidebar = document.querySelector("[data-js=sidebar]");
const form = document.querySelector("[data-js=form]");
const inputField = document.querySelector("[data-js=todo-field]");

// Talk about whether using ES6 fetch and async/await is a good choice, as older browsers don't support it
// Don't need closure from global scope. Webpack handles.
form && //this line is a guard
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
    });

// If element is missing, rent of script still runs
openButton &&
    openButton.addEventListener("click", e => {
        e.preventDefault();
        sidebar.classList.toggle("sidebar--open");
    });

clickCatcher &&
    clickCatcher.addEventListener("click", e => {
        e.preventDefault();
        sidebar.classList.toggle("sidebar--open");
    })

themeButton &&
    themeButton.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.toggle("body--themed");
    });

// error checking at end
if (!ul) throw new Error("Could not find [data-js=list]");
if (!clickCatcher) throw new Error("Could not find [sidebar-click-catcher]");
if (!openButton) throw new Error("Could not find [data-js=open-sidebar]");
if (!themeButton) throw new Error("Could not find [data-js=theme-button]");
if (!sidebar) throw new Error("Could not find [data-js=sidebar]");
if (!form) throw new Error("Could not find [data-js=form]");
if (!inputField) throw new Error("Could not find [data-js=todo-field]");