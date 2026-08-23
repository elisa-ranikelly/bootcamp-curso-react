function TaskList(){

    const tasks = [
        {id: 1, text: "Comprar leite"},
        {id: 2, text: "Comprar maça"}
    ]

    return(
        tasks.length === 0 ? (
            <p>Não há tarefas para mostrar!</p>
        ) : (
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.text}</li>
                ))}
            </ul>
        )
    );
}
export default TaskList;