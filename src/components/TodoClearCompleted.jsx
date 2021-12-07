import React from "react";

function TodoClearCompleted(props) {
    return (
        <button 
            className="button"
            onClick={props.clearCompleted}
        >
            Clear completed
        </button>
    );
}

export default TodoClearCompleted;