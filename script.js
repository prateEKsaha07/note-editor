const notes_container = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll("input-box");

// console.log(notes_container);
// console.log(createBtn);
// console.log(notes);

createBtn.addEventListener("click",() =>{
    let inputBox = document.createElement("p");
    let dlt = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.innerHTML = "add your notes here !";
    dlt.className = "delete-icon";
    inputBox.setAttribute("contenteditable","true");
    dlt.src = "assets/kub-trash.png";
    notes_container.appendChild(inputBox).appendChild(dlt);
})

notes_container.addEventListener("click",function(e){
    e.target.tagname === "IMG";
    e.target.parentElement.remove();
}else if(e.target.tagname === "P"){
    notes= document.querySelectorAll(".input-box");
    notes.forEach(nt => {
        nt.onKeyUp = function(){
            updateStorage();
        }
    })
}
)