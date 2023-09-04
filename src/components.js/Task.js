// Task.js
import React from 'react';
import { Button, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

function Task({ task, onMarkComplete, onRemove }) {
    return (
        <ListItem>
            <ListItemText primary={task.title} secondary={task.status} />
            <ListItemSecondaryAction>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={onMarkComplete}
                    disabled={task.status === "Complete"} // Disable button if task is already complete
                >
                    Complete
                </Button>
                <Button variant="contained" color="secondary" onClick={onRemove} style={{ marginLeft: '10px' }}>
                    Remove
                </Button>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Task;
