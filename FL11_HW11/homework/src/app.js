let rootNode = document.getElementById('root');

const maxListTask = 10;

let inputTask = document.getElementById('new-action');
let addButton = document.getElementById('add-btn');
addButton.disabled = true;
addButton.onclick = addTask;
let taskList = document.getElementById('task-list');

let dragAndDrop = null;

inputTask.addEventListener('input', function() {
  if (inputTask.value) {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
});

function createTask(task) {
  let list = document.createElement('li');
  list.setAttribute('draggable', true);
  addDragHand(list);
  
  let checkBox = document.createElement('button');
  checkBox.className = 'material-icons checkbox';
  checkBox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
  
  let label = document.createElement('label');
  label.innerText = task;
  
  let input = document.createElement('input');
  input.type = 'Text';
  
  let editButton = document.createElement('button');
  editButton.className = 'material-icons edit';
  editButton.innerHTML = '<i class="material-icons">edit</i>';
  
  let deleteButton = document.createElement('button');
  deleteButton.className = 'material-icons delete';
  deleteButton.innerHTML = '<i class="material-icons">delete</i>';

  list.appendChild(checkBox);
  list.appendChild(label);
  list.appendChild(input);
  list.appendChild(editButton);
  list.appendChild(deleteButton);

  deleteButton.addEventListener('click', deleteTask);
  editButton.addEventListener('click', editTask);
  checkBox.addEventListener('click', finishTask);

  return list;
}

function addTask() {
  if (taskList.children.length <= maxListTask) {
    let newTask = createTask(inputTask.value);
    taskList.appendChild(newTask);
    inputTask.value = '';
    addButton.disabled = true;
  } else {
    let error = 'Maximum item per list are created';
    alert(error);
  }
}

function editTask() {
  let editButton = this;
  let list = this.parentNode;
  let label = list.querySelector('label');
  let input = list.querySelector('input[type="text"');
  let containsClass = list.classList.contains('edit');

  if (containsClass) {
    label.innerText = input.value;
    editButton.className = 'material-icons edit';
    editButton.innerHTML = '<i class="material-icons">edit</i>';
  } else {
    input.value = label.innerText;
    editButton.className = 'material-icons save';
    editButton.innerHTML = '<i class="material-icons">save</i>';
  }
  list.classList.toggle('edit');
}

function deleteTask() {
  let list = this.parentNode;
  let ul = list.parentNode;
  ul.removeChild(list);
}

function finishTask() {
  let list = this.parentNode;
  let checkBox = list.querySelector('button.checkbox');
  checkBox.className = 'material-icons checkbox';
  checkBox.innerHTML = '<i class="material-icons">check_box</i>'
}

function dragStart(e) {
  dragAndDrop = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);
  this.classList.add('dragElem');
}

function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  this.classList.add('over');
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragRemove() {
  this.classList.remove('over');
}

function dragDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragAndDrop !== this) {
    this.parentNode.removeChild(dragAndDrop);
    let dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    let dropElem = this.previousSibling;
    addDragHand(dropElem);
  }
  this.classList.remove('over');
  return false;
}

function dragEnd() {
  this.classList.remove('over');
}

function addDragHand(elem) {
  elem.addEventListener('dragstart', dragStart, false);
  elem.addEventListener('dragover', dragOver, false);
  elem.addEventListener('dragleave', dragRemove, false);
  elem.addEventListener('drop', dragDrop, false);
  elem.addEventListener('dragend', dragEnd, false);
}