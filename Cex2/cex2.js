

const c1 = document.getElementById("inEl")
const c2 = document.getElementById("ul-el")
const c3 = document.getElementById("save")

let mydata = []

c3.addEventListener("click",boom())


function boom(){
    mydata.push(c1.value)
    console.log(mydata)
}


for (let i=0; i<mydata.length;i++){
    c2.textContent += "<li>"+ mydata[i] +"</li>"
}
