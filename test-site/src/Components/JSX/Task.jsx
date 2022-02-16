const Task = ({task, completeTask}) => {
    /*
    ! For debugging purposes only!
    * console.log(task)
    */
    return (
        <div 
            className="task-container"
            style={
                task.completed ? {borderLeft: '6px solid #00AA0A'} : {borderLeft: '6px solid #BA0000'}
            }
        >
            <div className="task-title" onClick={() => completeTask(task.id)}>
                {task.title}
            </div>
        </div>
    );
}
 
export default Task;