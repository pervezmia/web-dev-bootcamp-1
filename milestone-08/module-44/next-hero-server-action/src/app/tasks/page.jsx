import TasksCard from '@/components/TasksCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks();
    console.log(tasks);
    return (
        <div>
            <h2 className='text-center mt-10'>tasks: {tasks.length}</h2>

            <div className='grid grid-cols-3 gap-3.5 max-w-[80%] mx-auto'>
                {
                    tasks.map(task => <TasksCard key={task.id} task = {task}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;
