import Button from "./Button";

const AddTask = () => {
    return (
        <div className="add-task-container">
            <input 
                className="add-task-input" 
                id="task-input" 
                type="text" 
                placeholder="Input your task here:" 
            />
            <Button>
                Add Task
            </Button>
        </div>
    );
}
 
export default AddTask;