function createInput() {
    const firstInput = document.getElementById('f-input').value;
    const newInputContain = document.getElementById('new-input-contain');

    const newInputDiv = document.createElement('ul');
    const newInput = document.createElement('li');
    newInput.textContent = firstInput;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
        newInput.classList.toggle('delete');
    };

    const removeInputBtn = document.createElement('button');
    removeInputBtn.textContent = 'Remove';
    removeInputBtn.onclick = () => {
        newInputDiv.remove();
    };

    newInputDiv.appendChild(newInput);
    newInputDiv.appendChild(deleteBtn);
    newInputDiv.appendChild(removeInputBtn);

    newInputContain.appendChild(newInputDiv);
}