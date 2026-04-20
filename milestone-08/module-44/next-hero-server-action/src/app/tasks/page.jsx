import { AddTask } from '@/components/AddTask';
import TasksCard from '@/components/TasksCard';
import { createATask } from '@/lib/action';
import { getTasks } from '@/lib/tasks';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks();
    // console.log(tasks);
    return (
        <div>
            <div className='flex flex-col items-center justify-center mt-8 space-y-2'>
                <h2 className=''>tasks: {tasks.length}</h2>
            <AddTask createATask = {createATask}></AddTask>
            <Link href={"/tasks/new"}>
                <Button variant='solid'>Add task</Button>
            </Link>
            </div>

            <div className='grid grid-cols-3 gap-3.5 max-w-[80%] mx-auto pt-8'>
                {
                    tasks.map(task => <TasksCard key={task.id} task = {task}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;
