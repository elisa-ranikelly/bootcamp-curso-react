import Task from "./Task";

function TaskList({tasks, removeTask}){

    return(
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <Task
                        task={task}
                    />
                    <button onClick={() => removeTask(task.id)}>Remover</button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;