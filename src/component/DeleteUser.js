import React, { useContext, useState } from 'react';
import {MyContext} from '../App'
const DeleteUser = (props) => {

    const [state, setstate] = useState('');
    const deleteContext = useContext(MyContext);
    const handleDelete = (e) =>{
        setstate(e.target.value)
        console.log("state value is ",state)
    }

    const deleteUser = ()=>{
        console.log("(((((((((((((Delete user is called)))))))))))))",state)
        props.toggleDeleteUser(false);
        deleteContext.changeObj({type:"DELETE_USER",data:state})
    }

  

    return (
        <div>
            <label>Enter Employee id to delete</label>
            <input type="number" value={state} onChange={handleDelete}/>
            <button onClick={deleteUser}>Delete</button>
        </div>
    );
};


export default DeleteUser;