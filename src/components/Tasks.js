import Task from './Task'

const Tasks = ( { tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map( (task) => (<Task onToggle={onToggle} key={task.id} task={task} onDelete={onDelete}></Task>))}
        </>
    )
}

export default Tasks
