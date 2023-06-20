let ul = document.querySelector(".ul");
let li = document.getElementsByTagName("li")
let input = document.querySelector("input")
let add = document.querySelector(".btn")
let sabtn = document.querySelector(".sabtn")
   input.addEventListener("keyup",()=>{
      if (sabtn.innerHTML == "ENTER") {
         
      }
      else{
      let filter = input.value.toUpperCase();
    for (var i = 0; i < li.length; i++) {
       let lival = li[i].innerHTML.toUpperCase();
       if (input.value == "") {
          console.log("null")
         li[i].style = "display:block;"
      }
       else if(lival.indexOf(filter) > -1) {
         li[i].style = "display:block;";
         console.log(lival.indexOf(filter))
      }else{
         console.log("NOT")
         li[i].style = `display:none;`;
      }
    }
   }})
   add.addEventListener("click",()=>{
      if(sabtn.innerHTML == "ENTER" && input.value != ""){
      let newli = document.createElement("li");
      newli.innerHTML = input.value;
      ul.appendChild(newli)
      input.value = "";
   }
      else{
         
      }
   })
   sabtn.addEventListener("click",()=>{
      if (sabtn.innerHTML == "SEARCH") {
         sabtn.innerHTML = "ENTER";
      } else {
        sabtn.innerHTML = "SEARCH"; 
      }
   })
  