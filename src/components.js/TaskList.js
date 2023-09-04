// TaskList.js
import React from 'react';
import Task from './Task';
import { List } from '@material-ui/core';

function TaskList({ tasks, onMarkComplete, onRemove }) {
    return (
        <List>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onMarkComplete={() => onMarkComplete(index)} onRemove={() => onRemove(index)} />
            ))}
        </List>
    );
}

export default TaskList;
