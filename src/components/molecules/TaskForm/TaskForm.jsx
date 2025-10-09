import React from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { useState } from 'react';

export default function TaskForm({task, onChange, onSubmit}){
    const [taskText, setTaskText] = useState("")
    return (
        <div className = "agregarTarea">
            <Input
                className="inputTarea"
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
            />
            <Button
                className = "botonAgregar"
                type = "button"
                onClick={() => {
                    onSubmit(taskText);
                    setTaskText("");
                }}
            >
                ✓
            </Button>
        </div>
    )
}