const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function countList() {
  let nodeList = list.childNodes
  itemCountSpan.innerText = nodeList.length;

  let countCheck = 0;
  nodeList.forEach((item)=> {
    !item.childNodes[0].checked ? countCheck ++ : countCheck;
  })

  uncheckedCountSpan.innerText = countCheck
}


function newTodo() {
  // alert('New TODO button clicked!')
  const todo = window.prompt("Add your todo");

  if(todo){
    // text component
    let paragraph = document.createElement('b');
    paragraph.className = classNames.TODO_TEXT
    paragraph.append(todo);

    // delete component
    let deleteImg = document.createElement('img');
    deleteImg.className = classNames.TODO_DELETE;

    deleteImg.style.width = '25px';
    deleteImg.style.height = '25px';
    deleteImg.style.alignContent = 'bottom';
    deleteImg.style.cursor = 'pointer';

    deleteImg.src = 'delete_trash.svg';
    deleteImg.onclick = (event)=> {
      let parent = event.target.parentNode;
      parent.remove();
      countList();
    }
    
    // checkbox component
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.className = classNames.TODO_CHECKBOX;
    // input checkbox action
    input.onchange = (event)=> {
      let parent = event.target.parentNode;
      if(event.target.checked){
        parent.style.color = 'red';
        parent.style.textDecoration = 'line-through';
        parent.style.textDecorationColor = 'black';
      }else{
        parent.style.color = 'black';
        parent.style.textDecoration = 'none';
      }
      countList();
    }

    
    
    // li element that contains the todo item
    let li = document.createElement('li');
    li.className = classNames.TODO_ITEM
    li.append(input, paragraph, deleteImg);

    list.appendChild(li);

    countList();
  }
}

/*   
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
*/