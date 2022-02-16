import Task from "./Task";

const Tasks = ({tasks, completeTask}) => {
    /*
    ! For debugging purposes only!
    * console.log(tasks)
    */
    return (
        <>
            {tasks.map(task => (
                <Task task={task} completeTask={completeTask}/>
            ))}
        </>
    );
}
 
export default Tasks;