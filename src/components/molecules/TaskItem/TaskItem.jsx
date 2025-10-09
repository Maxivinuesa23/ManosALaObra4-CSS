import React from "react";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Text from "../../atoms/Text/Text";

export default function({task, onToggle, onDelete}){
    return(
        <div className="tarea-item">
            <div className="tarea-content">
                <Checkbox
                    className="checkBox"
                    checked={task.completed}
                    onChange={() => {
                        onToggle(task.id)
                    }}
                >
                </Checkbox>
                <Text
                    className={`textoTarea ${task.completed ? 'completed' : ''}`}
                >
                    {task.text}
                </Text>
            </div>
            <Button
                className="botonBorrar"
                onClick={() => {
                    onDelete(task.id)
                }}
            >
                🗑️
            </Button>
        </div>
    )
}