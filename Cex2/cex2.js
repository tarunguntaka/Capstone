

const inEl = document.getElementById("inEl")
const c2 = document.getElementById("ul-el")
const saveBtn = document.getElementById("save")
const p1 = document.getElementById("p1")

let mydata = []

saveBtn.addEventListener("click",boom())


function boom(){
    mydata.push(inEl.value)
}


for (let i=0; i<mydata.length;i++){
    p1.innerText +=  "lanja"+" "
}
