let inp=document.getElementById('addinp')
let btn=document.getElementById('addbtn')
let listContainer=document.getElementById('listContainer')


let table = document.createElement('table')



btn.onclick=()=>{
    addTask()
}
function addTask() {
    if (inp.value==='') {
        alert('please enter the task')
    }
    else{
        let li=document.createElement('li')
        let div = document.createElement('div')
        div.innerHTML=inp.value;
        li.appendChild(div)
        listContainer.appendChild(li)
        let completebtn=document.createElement('button')
        li.appendChild(completebtn)
        completebtn.innerHTML='Complete';
        completebtn.setAttribute("id","Complete")
        let incompletebtn=document.createElement('button')
        li.appendChild(incompletebtn)
        incompletebtn.innerHTML='Incomplete';
        incompletebtn.setAttribute("id","inComplete")
        // completebtn.setAttribute("type","button")
        // completebtn.setAttribute("value","Complete")
        let deletebtn=document.createElement('button')
        li.appendChild(deletebtn)
        deletebtn.innerHTML='Delete';
        deletebtn.setAttribute("id","Delete")
    }
    inp.value=''
    saveTasks()
}

listContainer.addEventListener("click",(e)=>{
    if (e.target.innerHTML=='Complete') {
        let task = e.target.previousSibling;
        task.setAttribute('class','checked');
        e.target.classList.toggle('checked');
        saveTasks()
    }
    else if (e.target.innerHTML=='Incomplete') {
        let task=e.target.parentElement;
        task.firstChild.removeAttribute('class','checked')
    }
    else if (e.target.innerHTML=='Delete') {
        e.target.parentElement.remove()
        // console.log('n');
        saveTasks()
    }
},false)

function saveTasks() {
    localStorage.setItem("Data",listContainer.innerHTML)
}
function showTasks() {
    listContainer.innerHTML=localStorage.getItem("Data")
}
showTasks()