function addTask(){
    var inputValue = document.getElementById("todoInput");
    if(inputValue.value == ""){
        alert("Please fill the task field");
        return;
    }
    // Create LI
    var li = document.createElement("li");
    li.setAttribute("class","list-group-item d-block item");
    var liText = document.createTextNode(inputValue.value);
    li.appendChild(liText);

    // Append LI in LIST
    var list = document.getElementById("list");
    list.appendChild(li);

    // Create inner DIV
    var innerDiv = document.createElement("div");
    innerDiv.setAttribute("class","btns pull-right");
    li.appendChild(innerDiv);

    // Create edit BUTTON
    var btnEdit = document.createElement("button");
    btnEdit.setAttribute("type","button");
    btnEdit.setAttribute("class","btn btn-sm btn-info mr-1");
    btnEdit.setAttribute("onclick","editTask(this)");
    innerDiv.appendChild(btnEdit);

    // Create edit BUTTON ICON
    var btnEditIcon = document.createElement("i");
    btnEditIcon.setAttribute("class","fa fa-pencil text-white");
    btnEdit.appendChild(btnEditIcon);

    // Create delete BUTTON
    var btnDelete = document.createElement("button");
    btnDelete.setAttribute("type","button");
    btnDelete.setAttribute("class","btn btn-sm btn-danger mr-1");
    btnDelete.setAttribute("onclick","deleteTask(this)");
    innerDiv.appendChild(btnDelete);

    // Create delete BUTTON ICON
    var btnDeleteIcon = document.createElement("i");
    btnDeleteIcon.setAttribute("class","fa fa-trash");
    btnDelete.appendChild(btnDeleteIcon);

    // Create mark done BUTTON
    var btnMark = document.createElement("button");
    btnMark.setAttribute("type","button");
    btnMark.setAttribute("class","btn btn-sm btn-success");
    btnMark.setAttribute("onclick","markDone(this)");
    innerDiv.appendChild(btnMark);

    // Create mark done BUTTON ICON
    var btnMarkIcon = document.createElement("i");
    btnMarkIcon.setAttribute("class","fa fa-check");
    btnMark.appendChild(btnMarkIcon);

    // clear INPUT value
    inputValue.value = "";
}

function deleteTask(e){
    e.parentNode.parentNode.remove();
}

function deleteAll(){
    var listLi = document.getElementsByClassName("item");
    if(listLi.length < 1){
        alert("There are no tasks to delete :)");
    }
    else {
        for(var i = 0; i < listLi.length; i++){
            listLi[i].remove();
        }
        listLi[0].remove();    
    }
}

function editTask(e){
    console.log(e.parentNode.parentNode.firstChild.nodeValue)
    var editedValue = prompt("Update Task As You Want",e.parentNode.parentNode.firstChild.nodeValue);
    e.parentNode.parentNode.firstChild.nodeValue = editedValue;
}

function markDone(e){
    var x = e.parentNode.parentNode;
    x.setAttribute("class","list-group-item d-block item strike");
}