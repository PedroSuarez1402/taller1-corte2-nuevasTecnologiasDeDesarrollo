const tareas = [];

function agregarTarea(){
    let tarea = document.getElementById("input").value;

    if(!tareas.includes(tarea)){
        tareas.push(tarea);

        actualizarTareas();
    }else{
        alert("Ya existe esta tarea");
    }
    function actualizarTareas(){
        let lista = document.getElementById("listaDatos");
        lista.innerHTML = "";

        tareas.forEach(function(tarea){
            let listaItem = document.createElement("li");
            listaItem.textContent = dato;
            lista.appendChild(listaItem);
        });
    }
}