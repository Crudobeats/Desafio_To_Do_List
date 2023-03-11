const nuevaTarea = document.querySelector("#nuevaTarea");
const agregarTarea = document.querySelector("#agregarTarea");
const tareasAgregadas = document.querySelector("#tareasAgregadas");
const totalTareas = document.querySelector("#totalTareas");
const realizadas = document.querySelector("#realizadas");

const tareas = [];

tareas.push({ id: 1, nombre: "Tarea 1" });
tareas.push({ id: 2, nombre: "Tarea 2" });
tareas.push({ id: 3, nombre: "Tarea 3" });

renderContador();

totalTareas.textContent = `Total de Tareas: ${tareas.length}`;

function renderContador() {
  let html = "";
  for (let tarea of tareas) {
    html += `<tr>
                  <td>${tarea.id}</td>
                  <td>${tarea.nombre}</td>
                  <td>
                  <input type="checkbox" class="form-check-input" onclick="marcarRealizada(${tarea.id})"></td>
                  <td><button onclick="borrar(${tarea.id})" class="btn btn-outline-danger"> X </button></td>
              </tr>`;
  }
  tareasAgregadas.innerHTML = html;
}

function marcarRealizada(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  const tarea = tareas[index];
  realizadas.innerHTML += `<li>${tarea.nombre}</li>`;
  tareas.splice(index, 1);
  renderContador();
  totalTareas.textContent = `Total de Tareas: ${tareas.length}`;
}

agregarTarea.addEventListener("click", (e) => {
  e.preventDefault();
  const nombreTarea = nuevaTarea.value;
  if (!nombreTarea){
    alert("Ingresa tu tarea que quieres agregar por favor");
    return;
  }
  tareas.push({ id: Date.now(), nombre: nombreTarea });
  nuevaTarea.value = "";
  renderContador();
  totalTareas.textContent = `Tareas Agregadas: ${tareas.length}`;
});

function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  const tarea = tareas[index];
  if (realizadas.innerHTML.includes(tarea.nombre)) {
    realizadas.innerHTML = realizadas.innerHTML.replace(
      `<li>${tarea.nombre}</li>`,
      ""
    );
  }
  tareas.splice(index, 1);
  renderContador();
  totalTareas.textContent = `Total de Tareas: ${tareas.length}`;
}