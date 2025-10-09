import React from "react";
import TaskItem from "../../molecules/TaskItem/TaskItem";

export default function({tasks, onDelete, onToggle}){

    if (tasks.length === 0) {
        return null;
    }
    
    return (
        <div className="listadoTareas">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    />
            ))}
        </div>
    )
}