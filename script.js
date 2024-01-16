let btn =document.getElementById("addnote");

function addnote(textarea){
    let color = document.getElementById("pickcolor").value;
    let note = document.createElement("div");
    note.classList.add("note-container");
      note.innerHTML = `<p>${textarea}</p> <button class="buttons" onclick="removeNote(this)" >X</button>`;
    note.style.backgroundColor = color;
    // console.log("k")
    document.getElementById("right-container").appendChild(note);
}
 function removeNote(button) {
   let note = button.parentNode;
   note.remove();
 }
btn.addEventListener("click",()=>{
    let textarea = document.querySelector("textarea").value;
    if (textarea == "") {
      alert("Please enter text");
    }
    else{
    addnote(textarea);
    }
});
