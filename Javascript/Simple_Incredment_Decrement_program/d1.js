



let count = 0 

let cid = document.getElementById("count")
let s_id = document.getElementById("ss")

function incr(){
    count+=1
    cid.innerText =count
}

function save(){
    let save_str = count + " - "
    s_id.textContent += save_str
    count = 0 
}