
var todo=[];
document.getElementById("button").onclick= function add()
{
    var input=document.getElementById('input').value;
    todo.push(input);
    console.log(todo)
    printAll();
}




function printAll() {
    var list = document.getElementById('todolist');
    list.innerText = ""; 

    todo.forEach(function(item, index) {
        var listItem = document.createElement('li');
        listItem.textContent = item;

        var d = document.createElement('span');
        d.textContent = " X";
        d.addEventListener('click', function() {
            del(index);
        });

        var edit = document.createElement('span');
        edit.textContent = " Edit";
        edit.addEventListener('click', function() {
            editItem(index);
        });

        
        listItem.appendChild(edit);
        listItem.appendChild(d);
        list.appendChild(listItem); 
    });
}

function del(index) {
    todo.splice(index, 1);
    printAll(); 
}

function editItem(index) {
    var n = prompt("Enter the new value:");
        todo[index] = n;
        printAll();
    }


