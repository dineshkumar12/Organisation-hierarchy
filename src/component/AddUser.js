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
        console.log("handling the select")
        this.setState({title:e.target.value})
    }

    handleLOP = ()=>{
        console.log("this kjajdjf jasljd lfjasl;dj ;fjasd;lj fjlasdj jfl;kasdj fl;kasdj jfdas;lj sdkjk")
    }
    // handleAddUser = ()=> { 
    //     console.log("state are",this.state.name,this.state.title,this.state.key);
    //     this.props.toggleAddUser(false);
    //     this.state.presentData.changeObj({type:"ADD_USER",data:{name:this.state.name,title:this.state.selectVal,key:this.state.key,parent:this.state.parent}})
    // }

    render() {
        console.log("%%%%%%%%%%%%%%ADD USER %%%%%%%%%%%%%")
        return (
            <MyContextConsumer>
                {
                    (presentData) =>{
                        return <div>
                
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>
                        <label>Key</label>
                        <input type="number" value={this.state.key} onChange={(e)=> this.setState({key:e.target.value})}/>
                        <label>parent</label>
                        <input type="number" value={this.state.parent} onChange={(e)=> this.setState({parent:e.target.value})}/>
                        <label>Title</label>
                        <select value={this.state.title} onChange={this.handleSelect}>
                            {
                                designationArray.map((item)=> <option value={item}>{item}</option>)
                            }
                        </select>
                        <button onClick={()=> { console.log("state are",this.state.name,this.state.title,this.state.key);
                                                this.props.toggleAddUser(false);
                                                this.handleLOP();
                                                 presentData.changeObj({type:"ADD_USER",data:{name:this.state.name,title:this.state.title,key:this.state.key,parent:this.state.parent}})}}>submit</button>
                    </div>
                    }
                }
                </MyContextConsumer>
        );
    }
}


export default AddUser;
