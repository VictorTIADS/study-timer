import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { Timer } from '../components/Timer';
import { ITask } from '../types/ITask';
import style from './App.module.scss';

function App() {
    const [tasks, setTasks] = useState<ITask[] | []>([]);
    const [selected, setSelected] = useState<ITask>();

    function selectTask(selectedTask: ITask) {
        setSelected(selectedTask)
        setTasks(previousTasks => previousTasks.map(task => ({
            ...task,
            isSelected: task.id == selectedTask.id ? true : false
        })));
    }

    function finishTask() {
        if (selected) {
            setSelected(undefined)
            setTasks(previousTask => previousTask.map(
                task => {
                    if (task.id == selected.id) {
                        return {
                            ...task,
                            isSelected: false,
                            isFinished: true
                        }
                    }
                    return task;
                }
            ))
        }
    }

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks} />
            <List
                tasks={tasks}
                selectTask={selectTask}
            />
            <Timer
                selected={selected}
                onFinished={finishTask} />
        </div>
    );
}

export default App;
