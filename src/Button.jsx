import React, {useState} from 'react';

function Button(){

    const [buttons, setButton] = useState([]);

    function addButton(){
        const name = document.getElementById("user-input").value
        setButton(b => [...b, name])

        document.getElementById("user-input").value = "";
    }

    function deleteTask(index){
        const updatedTask = buttons.filter((_,i) => i !== index);
        setButton(updatedTask);
    }

    return(
        <>
            <div className = "background">
                
                <input id = "user-input"className = "input" placeholder="To Do..."></input>
                <button onClick = {() => addButton()} className = "button">Add</button>
                
            </div>
            <ul className = "button-list">
                {buttons.map((button,index) => 
                    <li className = "button-comp"key = {index}>
                        <span className = "test">{button}</span>
                        <button onClick = {() => deleteTask(index)}className = "list-button">Delete</button>
                    </li>)}
            </ul>
        </>
    )
}

export default Button