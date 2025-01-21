let full=document.querySelector("#container");
let list =document.querySelector("#list");
let clicker=document.querySelector("#item2");
clicker.addEventListener('click',()=>{
    alert(list.textContent);
    console.log(list.firstChild,list.lastChild);
})
