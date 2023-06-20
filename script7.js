const c = (msg) => {
   console.log(msg)
}

let str = "";
let items = []
const input = document.querySelector("#input");
const addbtn = document.querySelector("#add_btn");
const ul = document.querySelector(".list");
const li = document.querySelector(".list_item");
const linum = document.querySelector(".list_number");
let num = 0;
addbtn.addEventListener("click", addList)

function addList(e) {
   console.log(input.value)
   if (input.value == 0) {

   }
   else {
      ul.innerHTML += `
          <li class="list_item">
          
                <h3 class="h3" id="h31">${input.value}</h3>
                <div class="buttons">
                <button class="editbtn">${"EDIT"}</button>
                <button class="deletebtn">${"DELETE"}</button>
                </div>
           </li>`;
      input.value = "";
      input.focus();
      num++
      shownum()
   }
}
ul.addEventListener("click", (e) => {
   // c(e.target.innerHTML)
   if (e.target.innerHTML == "DELETE") {
      e.target.parentElement.parentElement.remove();
      input.value = "";
      num--;
      shownum()
      addbtn.disabled = "";
   }

   else if (e.target.innerHTML == "EDIT") {
      
      input.value = e.target.parentElement.previousElementSibling.innerHTML;
      input.focus();

      e.target.innerHTML = "";
      e.target.innerHTML = "SAVE";
      addbtn.disabled = "true";
      e.target.parentElement.style = "transform: translateX(30px)";
   }
   else if (e.target.innerHTML == "SAVE") {
      e.target.parentElement.style = "transform: translateX()";
      let prevelm = e.target.parentElement.previousElementSibling;
      prevelm.innerHTML = input.value;
      e.target.innerHTML = "EDIT";
      input.value = "";
      addbtn.disabled = "";
   }

})

const shownum = () => {
   linum.innerHTML = num;
}