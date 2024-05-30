import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteTodo, fetchTodos, saveTodo, update } from "./todoService";

const todoSlice = createSlice({

name: "todos",

initialState : {
    allTodos : [],
    isLoading:false,
    isSuccess:false,
    isError:false,

    edit :{
      todo :{},
      isEdit:false,  
    }
  
},

reducers:{
    remove :(state , action) =>{
        return {
            ...state,
            allTodos : state.allTodos.filter((item)=> item._id !== action.payload)
        }
    },

    edit : (state ,action) =>{
        return{
            ...state,
            edit:{
                todo :action.payload,
                isEdit:true,
            }
        }
    }
},

extraReducers: (builder) => {
    builder
    .addCase( getTodos.pending , (state , action)=>{
        state.isLoading =true
        state.isSuccess =false
        state.isError = false
    })
    .addCase( getTodos.fulfilled , (state , action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.allTodos = action.payload
    })

    .addCase( getTodos.rejected , (state , action) =>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
    })

    .addCase( removeTodo.pending   , (state , action) => {
        state.isLoading =true
        state.isSuccess= false
        state.isError = false
    })
    
    .addCase(  removeTodo.fulfilled , (state , action) => {
        state.isLoading =false
        state.isSuccess = true
        state.isError =false
    })
    .addCase(removeTodo.rejected , (state , action) => {
        state.isLoading =false
        state.isSuccess =false
        state.isError= true
    })

    .addCase(addTodo.pending , (state ,action)=>{
        state.isLoading =true
        state.isSuccess = false
        state.isError = false
    })
    .addCase(addTodo.fulfilled , (state ,action)=>{
        state.isLoading =false
        state.isSuccess =true
        state.isError =false
        state.allTodos =[action.payload ,...state.allTodos]
    })
    .addCase(addTodo.rejected , (state ,action)=>{
        state.isLoading =false
        state.isSuccess =false
        state.isError =true
        
    })

    .addCase(updateTodo.pending , (state ,action)=>{
        state.isLoading =false
        state.isSuccess = false
        state.isError = false
    })
    .addCase(updateTodo.fulfilled , (state ,action)=>{
        state.isLoading =false
        state.isSuccess =true
        state.isError =false
        state.allTodos = state.allTodos.map((item)=>item._id === action.payload._id ? action.payload : item)
        state.edit = {
            todo : {},
            isEdit :false,
        }
    })
    .addCase(updateTodo.rejected , (state ,action)=>{
        state.isLoading =false
        state.isSuccess =false
        state.isError =true
        
    })
    
    


    
    


},


})

export const {remove , edit} =todoSlice.actions;

export default todoSlice.reducer;



 export const getTodos = createAsyncThunk ("FETCH/TODOS" , async() =>{

    try {
        return await fetchTodos()
    } catch (error) {
        console.log(error)
    } 
});

export const removeTodo = createAsyncThunk ("DELETE/TODOS" , async(id) => {
try {
    return await deleteTodo(id)
} catch (error) {
    console.log(error)
}
});


export const addTodo = createAsyncThunk("ADD/TODOS" , async(formData)=>{

try {
    return await saveTodo(formData);
} catch (error) {
    console.log(error);
}
})


export const updateTodo = createAsyncThunk("UPDATE/TODO" , async(formData)=>{
    try {
        return await update(formData)
    } catch (error) {
        console.log(error);
    }
} )
