import React, { useContext, useState } from 'react';
import {MyContext} from '../App'

const PromoteUser = (props) => {
    const [state, setstate] = useState('');
    const promoteContext = useContext(MyContext);
    const handlePrmote = (e) =>{
        setstate(e.target.value)
        // console.log("state value is ",state)
    }

    const closeHandle = ()=>{
        props.togglePromoteUser(false);
    }

    const promoteUser = ()=>{
        // console.log("(((((((((((((Promote user is called)))))))))))))",state)
        if(parseInt(state) === 1)
        {
            alert("HAHA, Sorry but you are on max level and can't promoted")
        } 
        else if(!promoteContext.data[state])
        {
            alert("Please enter a valid Employee key to promote as Employee with key "+ state +" is not existed")
        }  
        else if(promoteContext.data[state].parent === 1)
        {
            alert("HAHA, Sorry but you can't be promoted to CEO, Please Try another")
        }
        else{
            props.togglePromoteUser(false);
            promoteContext.changeObj({type:"PROMOTE_USER",data:state})
        }

    }

    return (
        <div className="PromoteUserDiv">
            <button className="CWCB" onClick={closeHandle}>Close Without Changes</button>
            <div className="PromoteUserCommonDiv">
                <label>Enter Employee id to promote</label>
                <input type="number" value={state} onChange={handlePrmote}/>
            </div>
            <br />
            <button onClick={promoteUser}>Prmote</button>
        </div>
    );
};

PromoteUser.propTypes = {};

export default PromoteUser;