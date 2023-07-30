import React, { useState } from "react";
import './todo.css'

const Todo = () => {
    const [value, setValue] = useState("")
    const [todo, setTodo] = useState([])
    const [editId, setEditId] = useState(null)

    return (
        <div className="todos">
            <h1 className="title">Todo</h1>
            <div className="inpBtn">
                <input type="text" placeholder="Add a Todo..." value={value} onChange={(event) => {
                    setValue(event.target.value)
                }} />
                <button className="addBtn" onClick={() => {
                    if (!editId && value.trim()) {
                        setTodo([...todo, { id: Math.random(), element: value }]);
                    } else if (value.trim()) {
                        todo.find(val => val.id === editId).element = value;
                    }
                    setValue("")
                    setEditId(null)
                }}>{editId ? "Edit" : "Add"}</button>
            </div>
            {
                todo.map(({ id, element }) => {
                    return (
                        <div key={id} className="item">
                            {element}
                            <button className="deleteBtn" onClick={() => {
                                setTodo(todo.filter(val => val.id !== id));
                            }}>Delete</button>
                            <button className="editBtn" onClick={() => {
                                setValue(element)
                                setEditId(id)
                            }}>
                                Edit
                            </button>
                        </div>
                    );
                })
            }
        </div>
    )
}
export default Todo






