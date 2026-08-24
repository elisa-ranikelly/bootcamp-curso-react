import { useState } from "react";
import Input from "./Input";
import TaskList from "./TaskList";

function Task({task}){

    return(
        <div>
            <span>{task.text}</span>
        </div>
    );
}

export default Task;