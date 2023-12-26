function GetTag()
{
    var doc=document.getElementsByTagName("p")
    for (let i = 0; i < doc.length; i++) {
        doc[i].style.background="black"
        doc[i].style.color="white"
    }
}