const form = document.querySelector(".form");
const firstInput = document.querySelector("#firstInput");
const addButton = document.querySelector("#addButton");
const contentContainer =document.querySelector(".contentContainer");
// const itemsH1 = document.querySelector("#items") 
const contents=document.querySelector(".contents");

// console.log(itemsH1)

addButton.addEventListener("click",(e)=>{
e.preventDefault();
let firstInputValue=firstInput.value;
// console.log(firstInputValue);
// console.log(firstInputValue)
const newDiv=document.createElement("div");
// contents.append(newDiv);

// contentContainer.append(itemsH1);
// contentContainer.append(contents);

const secondInput=document.createElement("input");
secondInput.classList.add("secondInput");
secondInput.type="text";
secondInput.value = firstInputValue;
secondInput.setAttribute("readonly","readonly");

newDiv.append(secondInput);

// console.log(secondInput);

const editSaveButton=document.createElement("button");
editSaveButton.classList.add("editSaveButton");
editSaveButton.innerText="Edit";

newDiv.append(editSaveButton);

const deleteButton = document.createElement("button");
deleteButton.classList.add("deleteButton");
deleteButton.innerText="Delete";
newDiv.append(deleteButton);


contents.append(newDiv);
// ****

editSaveButton.addEventListener("click",(e)=>{
    if(editSaveButton.innerText=="Edit"){
        editSaveButton.innerText="Save";
        secondInput.removeAttribute("readonly");
    }else{
        editSaveButton.innerText="Edit";
        secondInput.setAttribute("readonly","readonly")
    }
});

// deleteButton.addEventListener("click",(e)=>{
//         contents.removeChild(newDiv)
// });





});

contents.addEventListener('click',(e)=>{
    if(e.target.innerText==='Delete'){

        e.target.parentElement.remove();
        // console.log(e.target.parentElement.remove());
    }
})