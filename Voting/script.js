function vote() {
    var age= document.querySelector(".age").value;
    elig="Eligible for voting"
    notelig="Not Eligible for voting"
    nameis= document.querySelector(".name").value
    
    if(age>=18)
    {
        // var doc=document.getElementsByClassName("e")
        // for (let i = 0; i < doc.length; i++) {
        //     doc[i].style.background="black"
        //     doc[i].style.color="white"
            
        // }
        alert(`Eligible`)
        
        document.querySelector(".en").innerHTML=nameis+" is "+elig;
        console.log("Eligible for Voting");
        clear(age)
    }
    else{
        // var doc=document.getElementsByClassName("n")
        // for (let i = 0; i < doc.length; i++) {
        //     doc[i].style.background="black"
        //     doc[i].style.color="white"
            
        // }
        alert('not eligible for voting')
        document.querySelector(".en").innerHTML=notelig;
        console.log("Not Eligible for Voting");
        clear(age)
       
        
    }
    
}