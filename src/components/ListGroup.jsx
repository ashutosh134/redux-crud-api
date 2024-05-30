import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../features/todos/todoSlice';


const ListGroup = () => {
  

const {allTodos , isLoading , isError} = useSelector((state)=>state.todos); 


const dispatch = useDispatch()





useEffect(()=>{
dispatch(getTodos())
},[])



if(isError){
  return(
    <h1 className="display-6 my-3 text-center">somthing went wrong</h1>
  )
}


if(isLoading){
  return(
    <h1 className="display-6 text-center my-3">Loading....</h1>
  )
}


if(allTodos.length === 0){

  return(
  <h1 className="display-3 text-center my-3">No todos yet...</h1>
)
}




  return (
  <ul className="list-group">
    

        {
          allTodos.map((todo)=> (
            <ListItem key={todo._id} todo={todo}/>
          ))
        }



  </ul>
  );
}

export default ListGroup;
