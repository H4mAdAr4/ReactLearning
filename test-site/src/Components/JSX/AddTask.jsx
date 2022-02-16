import { useState } from 'react';
import Button from "./Button";

const AddTask = ({addTask}) => {
    const [inputData, setInputData] = useState('')
    const handleInputChange = (e) => {
        /* 
        ! For debugging purposes only!
        * console.log(e.target.value)
        */
        setInputData(e.target.value);
    }
    const handleTaskAdditionOnClick = () => {
        addTask(inputData);
        setInputData("");
    }

    return (
        <div className="add-task-container">
            <input 
                className="add-task-input" 
                id="task-input" 
                type="text" 
                placeholder="Input your task here:"
                onChange={handleInputChange}
                value={inputData}
            />
            <Button onClick={handleTaskAdditionOnClick}>
                Add Task
            </Button>
        </div>
    );
}
 
export default AddTask;