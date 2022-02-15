import { useState } from 'react';
import Tasks from './Tasks'

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

    return (
        <div className="Home">
            <div className="task-list">
                <AddTask />
                <Tasks tasks={tasks}/>
            </div>
        </div>
    );
}
 
export default Home;