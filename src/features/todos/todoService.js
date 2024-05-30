import axios from "axios"

export const fetchTodos = async() => {
    const response = await axios.get('/api/todo');
    console.log(response);
    return response.data;
    
};


export const deleteTodo = async(id) => {
   const response = await axios.delete("/api/todo/" + id);
   return response.data;
};


export const saveTodo =async(formData) =>{
    const response = await axios.post("/api/todo" , formData)
    return response.data;
    
}

export const update = async(id ,formData)=>{
const response = await axios.put("/api/todo" + formData.id ,formData)
console.log(response.data)
}