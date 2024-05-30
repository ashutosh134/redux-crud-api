import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../features/todos/todoSlice';






const Form = () => {

  const {edit} = useSelector((state)=>state.todos)

  const dispatch =useDispatch()

const [title , setTitle] = useState("");
const [description , setDescription] = useState("");







const handleSubmit = (e) =>{
  e.preventDefault()


  edit.isEdit ? dispatch(updateTodo({
    id:edit.todo._id,
    title,
    description
  })) :  dispatch(addTodo({title , description}));




  dispatch(addTodo({title , description}));

  setTitle("")
  setDescription("")

}

useEffect(()=>{
setTitle(edit.todo.title)
setDescription(edit.todo.description)
},[edit])






  return (
    <form action="" className='my-5 p-5' onSubmit={(e)=>handleSubmit(e)}  >

        <input type="text" className="form-control rounded-0 my-3" placeholder="text" 
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        required
        />

        <textarea className='form-cntrol rounded-0 my-3 w-100 'placeholder='description'
        onChange={(e)=>setDescription(e.target.value)}
        value={description}
        required
        
        ></textarea>
        <button className="btn btn-success rounded-0 w-100">save</button>
    </form>
  )
}

export default Form
