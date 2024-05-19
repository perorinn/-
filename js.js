function addItem(){
var newItem = document.createElement("h2")
newItem.innerHTML = document.getElementById("box").value
newItem.onclick = deleteItem;
document.getElementById("list").appendChild(newItem)
}
function deleteItem(){
    document.getElementById("list").removeChild(this)
}
function Change1(){
    var box = document.getElementById("h1")
    box.style.fontSize = "30px"
}
function Change2(){
    var bib = document.getElementById("wew")
    bib.style.backgroundImage="linear-gradient(145deg, black, slateblue, orange, purple)"
}
function Change3(){
    var bob = document.getElementById("wew")
    bob.style.backgroundImage="linear-gradient(145deg, #ee82ee, slateblue, #ffd86a, purple)"
}
