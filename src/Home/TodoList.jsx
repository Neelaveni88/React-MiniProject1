import React, { useState, useEffect } from "react";
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Checkbox, ToggleButtonGroup, ToggleButton ,Typography,Box} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [newTask, setNewTask] = useState(""); 

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = () => {
    if (newTask === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Incomplete") return !task.completed;
    return true;
  });

  return (
    <Box
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTripVbUZx4zlIon8dRyT_DftAz-iDoDY6xvg&s')",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        paddingTop: "8%", 
      }}
    >
    <Container maxWidth="sm">
     <Typography variant="h5" color="error" align="center" padding={2} gutterBottom>
        To-Do List
      </Typography>
      <Box style={{ display: "flex", marginBottom: 20 }}>
        <TextField
          label="Add a task"
          variant="outlined"
          fullWidth
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addTask} style={{ marginLeft: 10 }}>
          Add
        </Button>
      </Box>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={(_, newFilter) => setFilter(newFilter || "All")}
        style={{ marginBottom: 20 }}
      >
        <ToggleButton value="All">All</ToggleButton>
        <ToggleButton value="Completed">Completed</ToggleButton>
        <ToggleButton value="Incomplete">Incomplete</ToggleButton>
      </ToggleButtonGroup>
      <List>
        {filteredTasks.map((task, index) => (
          <ListItem key={index} divider style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Checkbox checked={task.completed} onChange={() => toggleTask(index)} />
            <ListItemText primary={task.text} />
            <IconButton edge="end" onClick={() => deleteTask(index)}>
              <DeleteIcon color="error" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
    </Box>
  );
};

export default TodoList;
