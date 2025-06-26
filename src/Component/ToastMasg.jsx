import React from 'react'
import { ToastContainer, toast } from 'react-toastify';


const ToastMasg = () => {
    const handletodo = () => {
        toast("heyy")
    }
    return (
        <div>
            <h2>Todo App</h2>
            <button onClick={handletodo} className='bg-blue-600'>Add new todo</button>
            <ToastContainer/>

        </div>
    )
}

export default ToastMasg
