import React, { useContext, useState } from 'react';
import {MyContext} from '../App'
const DeleteUser = (props) => {

    const [state, setstate] = useState('');
    const deleteContext = useContext(MyContext);
    const handleDelete = (e) =>{
        setstate(e.target.value)
        // console.log("state value is ",state)
    }

    const closeHandle = ()=>{
        props.toggleDeleteUser(false);
    }

    const deleteUser = ()=>{
        if(state ==='' || state===undefined || state ===null)
        {
            alert("Sorry add some Employee Key to delete")
        }
        else if(! deleteContext.data[state])
        {
            alert(`Sorry But no Emplyee existed with key ${state}, Try another`)
        }
        else if(parseInt(state) === 1 )
        {
            alert("Sorry can't delete CEO, Try another")
        }
        else{
            // console.log("(((((((((((((Delete user is called)))))))))))))",state)
            props.toggleDeleteUser(false);
            deleteContext.changeObj({type:"DELETE_USER",data:state})
        }

    }

  

    return (
        <div className="DeleteUserDiv">
            <button className="CWCB" onClick={closeHandle}>Close Without Changes</button>
            <div className="DeleteUserCommonDiv">
            <label>Enter Employee id to delete</label>
            <input type="number" value={state} onChange={handleDelete}/>
            </div>
            <br />

            <button onClick={deleteUser}>Delete</button>
        </div>
    );
};


export default DeleteUser;