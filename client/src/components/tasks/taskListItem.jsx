import React from "react";
import {Link} from "react-router-dom";

export function TaskListItem({
                                 task: {id, completed, description},
                                 onCompleted,
                                 onChange
                             }) {
    return <div>
        <label>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => onCompleted(id)}
            />
            {description} <a href={"#"} onClick={(e) => {
            e.preventDefault();
            onChange(id);
        }}>[update]</a> - <Link to={`/tasks/${id}`}>[details]</Link>
        </label>
    </div>;
}