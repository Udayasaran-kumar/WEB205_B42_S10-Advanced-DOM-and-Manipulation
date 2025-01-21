
let gparent= document.getElementById('gparent');
let parent = document.getElementById('parent');
let child = document.getElementById('child');
let button=document.getElementById('button');
// bubbling
// gparent.addEventListener('click',()=>{
//     alert('grandparent clicked');
// });
// parent.addEventListener('click', () => {
//     alert('Parent clicked ');
// });

// child.addEventListener('click', () => {
//   alert('child clicked');
// });
// button.addEventListener('click', () => {
//     alert('button clicked');
//   });
  
// capturing
// gparent.addEventListener('click',()=>{
//     alert('grandparent clicked');
// },true);
// parent.addEventListener('click', () => {
//     alert('Parent clicked ');
// },true);

// child.addEventListener('click', () => {
//   alert('child clicked');
// },true);
// button.addEventListener('click', () => {
//     alert('button clicked');
//   });
  
// stop propagation
gparent.addEventListener('click',()=>{
    alert('grandparent clicked');
});
parent.addEventListener('click', () => {
    alert('Parent clicked ');
});

child.addEventListener('click', () => {
  alert('child clicked');
});
button.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('button clicked');
  });
//   Here,all propagation are explained with a button.
// for bubbling it goes from target element to source.
// for captiuring it goes to source and travels to target element.
// to stop propagation the stopPropagation method is added.
