document.addEventListener("DOMContentLoaded", () => {
  // your code here
 
 let submitForm=document.getElementById("create-task-form");
 submitForm.addEventListener("submit",handleSubmit)
});

function handleSubmit(e){
e.preventDefault();

//retrieve the form element value
let inputVariable=document.getElementById("new-task-description").value;
//retrieve the ul element the li element will be stored under
let toDoList=document.getElementById("tasks");
//create a new list item
let listItem=document.createElement("li");
//append the new list under the ul element
let newItem=toDoList.appendChild(listItem);
//assign the new list item the input inserted into the form
listItem.textContent=inputVariable;
//reset the input value every time after inserting a variable
document.getElementById("new-task-description").value = "";

//append that new list item in the list item
listItem.appendChild(newItem);



}

function deleteList(){
  let toDoList=document.getElementById("tasks");
  toDoList.remove();

}
