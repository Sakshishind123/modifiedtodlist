



const open_menu = document.querySelector('.fa-bars')
const close_menu = document.querySelector('.fa-square-xmark');
const nav_active = document.querySelectorAll('.navbar');


open_menu.addEventListener('click',()=>{
    nav_active.forEach((elem)=>elem.classList.add('active'))
})


close_menu.addEventListener('click', () => {
    nav_active.forEach(elem => elem.classList.remove('active'))
})



let myleads=[]
let text = document.getElementById('input');
let button = document.getElementById('btn');
let container = document.getElementById('container');
let congo=document.getElementById('congratulations');


button.addEventListener('click',()=>{

    let content=text.value

    if(content){
       let newbox=document.createElement('div')
    //    newbox.classList.add('box')
    newbox.className="box"

    
    newbox.innerHTML = `
    <span class="task-text">${content} </span>
    <div class="task-icons">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF" class="delete-icon"><path d="M299-98q-52.43 0-90.21-37.09Q171-172.18 171-226v-461h-71v-128h260v-74h239v74h261v128h-71v460.57q0 54.55-37.09 91.49Q714.83-98 661-98H299Zm59-189h105v-339H358v339Zm140 0h105v-339H498v339Z"/></svg>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#00FF00" class="check-icon"><path d="M480-53.935q-89.57 0-168.047-33.93-78.478-33.931-137.266-92.719-58.788-58.788-92.719-137.266Q48-396.398 48-486.174q0-89.775 33.91-168.349Q115.82-733.097 174.728-791.913 233.635-850.73 312.174-884.365q78.54-33.636 168.07-33.636t168.07 33.636Q727.855-850.73 786.5-791.913q58.646 58.646 92.573 137.22 33.926 78.575 33.926 168.305 0 89.73-33.926 168.208-33.927 78.478-92.573 137.266-58.645 58.788-137.266 92.719Q569.57-53.935 480-53.935ZM442.5-309 689-555.957l-56.5-56.348L442.5-421.5 328-536.152l-56.5 56.348L442.5-309Z"/></svg>

    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FF0000" class="cross-icon"><path d="M297.348-247.478 480-430.239l182.652 182.761 56.435-56.457L536.348-486.696 719.109-669.348l-56.457-56.435L480-543.13 297.348-725.783l-56.435 56.457L423.652-486.696 241.891-304.043l56.457 56.565Z"/></svg>
`;
container.appendChild(newbox)

// newbox.querySelector('.delete-icon').addEventListener('click', () => {
//     // Remove the parent box of the clicked icon
//     newbox.remove();
// });


newbox.querySelector('.delete-icon').addEventListener('click',()=>{
    newbox.remove();
})

newbox.querySelector('.check-icon').addEventListener('click',()=>{
    newbox.style.backgroundColor="green"
    checkall();
})
newbox.querySelector('.cross-icon').addEventListener('click',()=>{
    newbox.style.backgroundColor="red"
    checkall();
})

function checkall(){

   let all=document.querySelectorAll('.box')
   let allgreen=true
   let allred=true

   all.forEach(task=>{
    if(task.style.backgroundColor!=="green"){
        allgreen=false; 
        
   }})

   all.forEach(task=>{
   if(task.style.backgroundColor!=='red')
   {
    allred=false;
   }
})

   if (allgreen === true) {
    congo.innerText = 'CONGRATULATIONS !! YOU DID IT';
   
}
if (allred === true) {
    congo.innerText = 'YOU CAN DO IT TOMMOROW';
   
}

}








// let i = document.createElement("i");
//     i.classList.add(" \uF10C")
//     container.appendChild(i)

    //    newbox.textContent=content
       


    }



})




























// const open_menu = document.querySelector('.fa-bars')
// const close_menu = document.querySelector('.fa-square-xmark');
// const nav_active = document.querySelectorAll('.navbar');


// open_menu.addEventListener('click',()=>{
//     nav_active.forEach((elem)=>elem.classList.add('active'))
// })


// close_menu.addEventListener('click', () => {
//     nav_active.forEach(elem => elem.classList.remove('active'))
// })





// let myleads = [];

// let text = document.getElementById('input');
// let button = document.getElementById('btn');
// let container = document.getElementById('container');

// button.addEventListener('click', () => {
//     let content = text.value;
//     if (content) {
//         // Create a new div element
//         let newBox = document.createElement('div');
//         newBox.classList.add('box');
//         newBox.innerText = content;

//         // Append the new box to the container
//         container.appendChild(newBox);

//         // Clear the input field
//         // text.value = "";
//     }
// });

