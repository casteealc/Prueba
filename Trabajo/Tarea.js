
        // Array para almacenar las tareas
        const tasks = [];

        // Función para agregar una tarea
        function addTask(taskText) {
            const taskId = Date.now(); // Generamos un ID único
            const task = {
                id: taskId,
                text: taskText,
                completed: false,
                dateCreated: new Date().toLocaleString()
            };
            tasks.push(task);
            updateTaskList();
        }

        // Función para eliminar una tarea
        function deleteTask(taskId) {
            const index = tasks.findIndex(task => task.id === taskId);
            if (index !== -1) {
                tasks.splice(index, 1);
                updateTaskList();
            }
        }

        // Función para marcar una tarea como completada
        function completeTask(taskId) {
            const task = tasks.find(task => task.id === taskId);
            if (task) {
                task.completed = true;
                updateTaskList();
            }
        }

        // Función para actualizar la tabla de tareas
        function updateTaskList() {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';

            tasks.forEach(task => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${task.text}</td>
                    <td>${task.completed ? 'Completada' : 'Pendiente'}</td>
                    <td>
                        <button class="btn btn-success" onclick="completeTask(${task.id})">Completar</button>
                        <button class="btn btn-danger" onclick="deleteTask(${task.id})">Eliminar</button>
                    </td>
                `;
                taskList.appendChild(row);
            });
        }

        // Manejador de envío del formulario
        document.getElementById('taskForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const taskText = document.getElementById('taskText').value;
            if (taskText.trim() !== '') {
                addTask(taskText);
                document.getElementById('taskText').value = ''; // Limpiamos el campo de entrada
            }
        });

        // Actualizamos la lista de tareas inicialmente
        updateTaskList();
