function GetQuery() {
    var doc=document.querySelector(".query").style.color="red"
    
    
}
function GetQueryAll() {
    var doc=document.querySelectorAll(".queryall")
    for (let i = 0; i < doc.length; i++) {
        doc[i].style.background="black"
        doc[i].style.color="white"
    }
    
    
}