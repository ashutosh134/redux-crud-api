import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edit, remove, removeTodo } from '../features/todos/todoSlice'




const ListItem = ({todo}) => {

  const {isSuccess} = useSelector((state) => state.todos);

const dispatch = useDispatch()

const handleEdit = (todo)=>{
  dispatch(edit(todo))

}


  const handleDelete = (id) => {

    dispatch(removeTodo(id));
    if(isSuccess){
    dispatch(remove(id))
}

  }




  return (
    <li className="list-group-item rounded-0 p-5 mx-5">
    <h1 className="display-6 mx-3 rounded-0">{todo.title}</h1>
    <h1 className="display-6 mx-3 rounded-0">{todo.description}</h1>
    <span className='float-end'>
        <button className="btn btn-primary rounded-0 mx-5" onClick={()=>handleEdit(todo)} >edit</button>
        <button className="btn btn-danger rounded-0 " onClick={()=>handleDelete(todo._id)}>delete</button>
    </span>

  </li>
  )
}

export default ListItem
