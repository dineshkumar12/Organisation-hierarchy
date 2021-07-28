import React from 'react';
import {MyContextConsumer} from '../App'

const designationArray = ["CEO","VP Engineering","VP Marketing/Sales","Marketing","Sales","Sales Rep",
"Engineering","Manufacturing","Quality","Process","Project Mgr","Events Mgr","Hardware","Testing","Software"]

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            key:"",
            parent:"",
            title:"Sales"
        };
    }

    handleSelect = (e)=> {
        // console.log("handling the select")
        this.setState({title:e.target.value})
    }

     closeHandle = ()=>{
        this.props.toggleAddUser(false);
    }


    render() {
        // console.log("%%%%%%%%%%%%%%ADD USER %%%%%%%%%%%%%")
        return (
            <MyContextConsumer>
                {
                    (presentData) =>{

                        const handleAddUser =  ()=>{
                            // console.log("state are",this.state.name,this.state.title,this.state.key);
                            if(!this.state.key)
                            {
                                alert("Sorry, but Key field must not be empty")
                            }
                            else if(!presentData.data[this.state.key] && presentData.data[this.state.parent])
                            {
                                this.props.toggleAddUser(false);
                                presentData.changeObj({type:"ADD_USER",data:{name:this.state.name,title:this.state.title,key:this.state.key,parent:this.state.parent}})    
                            }
                            else if(this.state.key<=1)
                            {
                                alert("Sorry but new Added Employee must have key greater than 1, Please try another")
                            }
                            else{
                                alert("sorry but either Employee with key =  " + this.state.key + " already existed Or Boss for New Employee with key = " + this.state.parent +" is not Existed, Please try another")
                            } 
                        }
                        return <div className="AddUSerDiv">
                        <button className="CWCB" onClick={this.closeHandle}>Close Without Changes</button>
                
                        <div className="AddUserCommonDiv">
                            <label>Name</label>
                            <input type="text" value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>
                        </div>
                        <br/>
                        <div className="AddUserCommonDiv">
                            <label>Key</label>
                            <input type="number" value={this.state.key} onChange={(e)=> this.setState({key:e.target.value})}/>
                        </div>
                        <br/>
                        <div className="AddUserCommonDiv">
                            <label>parent</label>
                            <input type="number" value={this.state.parent} onChange={(e)=> this.setState({parent:e.target.value})}/>
                        </div>
                        <br/>
                        <div className="AddUserCommonDiv">
                        <label>Title</label>
                        <select value={this.state.title} onChange={this.handleSelect}>
                            {
                                designationArray.map((item)=> <option value={item}>{item}</option>)
                            }
                        </select>
                        </div>
                        <br/>
                        <button onClick={handleAddUser}>AddUSer</button>
                        {/* <button onClick={()=> { 
                                                this.props.toggleAddUser(false);
                                                 presentData.changeObj({type:"ADD_USER",data:{name:this.state.name,title:this.state.title,key:this.state.key,parent:this.state.parent}})}}>Add User</button> */}
                    </div>
                    }
                }
                </MyContextConsumer>
        );
    }
}


export default AddUser;
