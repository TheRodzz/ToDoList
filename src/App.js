// App.js
import React, { useState } from 'react';
import TaskList from './components.js/TaskList';
import AddTask from './components.js/AddTask';
import { Container, Typography, CssBaseline } from '@material-ui/core';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
        const newTask = {
            title: title,
            status: "Incomplete"
        };
        setTasks([...tasks, newTask]);
    };

    const markTaskAsComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].status = "Complete";
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Typography variant="h4" align="center" gutterBottom>
              To-Do List
          </Typography>
          <AddTask onAdd={addTask} />
          <TaskList tasks={tasks} onMarkComplete={markTaskAsComplete} onRemove={removeTask} />
      </Container>
  );
}

export default App;
