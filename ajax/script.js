//new HTTP Request
var request=new XMLHttpRequest()
//open request file
request.open('get','https://jsonplaceholder.typicode.com/todos')
//sending request 
request.send()
//ready state function
request.onreadystatechange=()=>{
    //readystate is always 4
    if (request.readyState==4){
        if(request.status>199 && request.status<300)
        {
            console.log(request.responseText);
            let todos=JSON.parse(request.responseText)
            console.log(todos);
            DisplayData(todos)
        }

        
    }

}
//display data to html
function DisplayData(todos) {
    htmlData=''
    for (let todo of todos) {
        htmlData=`<div class="card text-center mb-3" style="width: 18rem;" >
        <div class="card-body" style="background-color: rgb(0, 225, 255);
        color: rgb(183, 22, 22);" >
            <a>USER ID-</a>${todo.userId} <br>
            <a>id-</a>${todo.id} <br>
            <a>Title-</a>${todo.title} <br>
            <a>Completed-</a>${todo.completed}
            </div>
        </div>`

        resultofapicalling.innerHTML+=htmlData
    }
    
}
