// AddTask.js
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';

function AddTask({ onAdd }) {
    const [title, setTitle] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter task title"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button type="submit" fullWidth variant="contained" color="primary">
                        Add Task
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default AddTask;
