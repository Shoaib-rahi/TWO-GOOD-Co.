
let searchBtn = document.querySelector(".searchBtn");
let iputbox = document.getElementById("inputBox");
let ullist = document.querySelector("#lists");




searchBtn.addEventListener("click",() => {

    console.log(iputbox.value)
let list = document.createElement("li");

list.innerHTML = `
   <p>${iputbox.value}</p>
            <button id="deletetask" onclick = "deletetasked()">Delete</button>
`
ullist.appendChild(list);
iputbox.value = ""
})

function deletetasked(){
  ullist.innerHTML = ""
}

