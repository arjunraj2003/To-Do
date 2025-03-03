import { useState } from "react";
import List from "../../learn/src/List";

function ToDo(){
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");

    function handileInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
        
    }
    function deleteTask(index){
        const updateTasks=tasks.filter((_,i)=>i!==index);
        setTasks(updateTasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const updateTasks=[...tasks];
            [updateTasks[index],updateTasks[index-1]]=
            [updateTasks[index-1],updateTasks[index]];
            setTasks(updateTasks);
        }

    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updateTasks=[...tasks];
            [updateTasks[index],updateTasks[index+1]]=
            [updateTasks[index+1],updateTasks[index]];
            setTasks(updateTasks);
        }
    }
    return(
        <div className="to-do-list">
            <h1>TO-DO-List</h1>
            <div>
                <input type="text"  id="" value={newTask} placeholder="Enter the tasks" onChange={handileInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=> 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={()=>moveTaskUp(index)}>Up</button>
                    <button className="move-button" onClick={()=>moveTaskDown(index)}>Down</button>
                </li>)}
            </ol>
        </div>
    )
}
export default ToDo;