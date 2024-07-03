// function first(firstname, cb) {
//     console.log(firstname);
//     cb()
// }

// function second(lastname) {
//     console.log(lastname);
// }

// first('Murodbek', function() {
//     second('Tojiboyev')
// })

const toggleBtnChange = document.getElementById('toggleBtnChange');
const toggleBtnAdd = document.getElementById('toggleBtnAdd');
const toggleBtnRemove = document.getElementById('toggleBtnRemove');
const title = document.getElementById('title');
const paragraph = document.getElementById('para')

toggleBtnChange.addEventListener('click', () => {
    title.innerHTML = 'New Title text';
    paragraph.innerHTML = 'New paragraph text';
});

const newPara = document.createElement('p');
const gap = document.createTextNode('New paragraph')
const text = document.getElementById('text')

toggleBtnAdd.addEventListener('click', () => {
    newPara.appendChild(gap)
    text.appendChild(newPara)
})

toggleBtnRemove.addEventListener('click', () => {
    newPara.remove();
})