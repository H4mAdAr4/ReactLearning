import { useState } from 'react';
import Tasks from './Tasks'
import {v4 as uuidv4} from 'uuid'

import './../CSS/Home.css'
import AddTask from './AddTask';

const Home = () => {
    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: 'Task 1',
            completed: false,
        },
        {
            id: '2',
            title: 'Task 2',
            completed: true,
        },
        {
            id: '3',
            title: 'Task 3',
            completed: false,
        },
    ]);
    const handleTaskAddition = (taskTitle) => {
        const newTasks = [...tasks, {
            title: taskTitle,
            id: uuidv4(),
            completed: false
        }];
        setTasks(newTasks);
    }
    const handleTaskCompletion = (taskId) => {
        const newTasks = tasks.map(task => {
            if(task.id === taskId){
                return {
                    ...task, completed: !task.completed
                };
            }else{
                return task;
            }
        })
        setTasks(newTasks);
    }

    return (
        <div className="Home">
            <div className="task-list">
                <AddTask addTask={handleTaskAddition}/>
                <Tasks tasks={tasks} completeTask={handleTaskCompletion}/>
            </div>
        </div>
    );
}
 
export default Home;