let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

btn.addEventListener('click', function() {
    addItem();
});

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    let li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
}