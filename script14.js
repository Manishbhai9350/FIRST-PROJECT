const c = (msg) => {
   console.log(msg)
}

let note_name = document.querySelector("#notename")
let addbtn = document.querySelector(".addbtn")
let description = document.querySelector("#textarea")
let note_area = document.querySelector(".note_area")
let floatingarea = document.querySelector(".floatingarea")


const viewnote = (e) => {
   //c(e)
}
const deletenote = (e) => {
   e.parentElement.parentElement.remove()
}


const addnote = () => {


   if (note_name.value.length < 1) {
      alert("Note name is required ")
      
   }
   else {
   note_area.innerHTML += `  
               <h6 class="note-time" style="display:none;"></h6>
               <div class="note">
            <div class="names">
               <h2 class="title" id="title">${note_name.value}</h2>
               <h4 class="description" id="description">${description.value}</h4>
            </div>
            <div class="btns">
               <button class="viewbtn btn" style="--bcg--:skyblue">VIEW</button>
               <button class="editbtn btn" style="--bcg--: #116F29">EDIT</button> <button class="deletebtn btn" style="--bcg--:RED">DELETE</button>
            </div>
         </div>`;

   note_name.value = null;
   description.value = null;
}}

const noteclicked = (e) => {
   let nt_time = document.querySelector(".note-time");
   let date = new Date()
   let time = date.getTime();
   let month = date.getMonth();
   let year = date.getFullYear();
   let day = date.getDay();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   
   nt_time.innerHTML = `${year} |  ${month} ${hours}:${minutes}`;
   if (e.innerHTML == "ADD") {
      addnote();
   }
   else if (e.innerHTML == "VIEW") {
      let parent = e.parentElement.parentElement;
      
      let fa_time = parent.querySelector(".fa-time");
      
      fa_time.innerHTML = `${nt_time}`;
      
      floatingarea.style = `
      top: 50%;
      left: 50%;
   transform: translate(-50%,-50%);
   display:flex;
   ;
      `;
      let fa_title = floatingarea.querySelector("#fa-title");

      let main_title = e.parentElement.parentElement.querySelector(".title");
      fa_title.innerHTML = main_title.innerHTML;

      let fa_desc = floatingarea.querySelector(".fa-description");

      let main_desc = e.parentElement.parentElement.querySelector(".description");
      fa_desc.innerHTML = main_desc.innerHTML;

   }
   else if (e.innerHTML == "EDIT") {
      let parent = e.parentElement.parentElement;
      let title_edit = parent.querySelector(".title").innerHTML;
      let desc_edit = parent.querySelector(".description").innerHTML;

      note_name.value = title_edit;
      description.value = desc_edit;
      note_name.focus();
      parent.style = "background-color:#919298;";
      e.innerHTML = "SAVE";
   }
   else if (e.innerHTML == "SAVE") {
      let parent = e.parentElement.parentElement;
      parent.querySelector(".title").innerHTML = note_name.value;
      parent.querySelector(".description").innerHTML = description.value;
      e.innerHTML = "EDIT";
      parent.style = "background-color:white;";
      note_name.value = "";
      description.value = "";
   }
   else if (e.innerHTML == "DELETE") {
      deletenote(e)
   }
   else if (e.innerHTML == "CLOSE") {
      floatingarea.style = `
      top: 50%;
      left: 50%;
   transform: translate(-200%,-200%)
   display:none;
   ;
   
      `;
   }
}
document.addEventListener('click', (e) => {
   noteclicked(e.target)
})