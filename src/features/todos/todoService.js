import axios from "axios"

export const fetchTodos = async() => {
    const response = await axios.get('https://crud-api-mlhz.onrender.com/api/todo');
    console.log(response);
    return response.data;
    
};


export const deleteTodo = async(id) => {
   const response = await axios.delete("https://crud-api-mlhz.onrender.com/api/todo/" + id);
   return response.data;
};


export const saveTodo =async(formData) =>{
    const response = await axios.post("https://crud-api-mlhz.onrender.com/api/todo" , formData)
    return response.data;
    
}

export const update = async(id ,formData)=>{
const response = await axios.put("https://crud-api-mlhz.onrender.com/api/todo" + formData.id ,formData)
console.log(response.data)
}