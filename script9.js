let h3 = document.querySelector('.joke');
let nextbtn = document.querySelector('.nextbtn')
const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
let jokeobj = {
   
}
let joke = "";
  const fetchapi = async ()=>{ 
   
     let res = await fetch(url).then(data => data.json()).then((k) => jokeonj = k )
   console.log(res)
   if (res.joke) {
  h3.innerHTML = res.joke;
   }
  }
  
  nextbtn.addEventListener("click",()=>{
     fetchapi()
  })
  fetchapi()
