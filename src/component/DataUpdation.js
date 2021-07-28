import React from 'react';
// import UserDetails from './UserDetails';
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';
import PromoteUser from './PromoteUser';

class DataUpdation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            addUserActive: false,
            deleteUserActice: false,
            promoteUserActive: false,
            selectVal : ""
        };
    }

    addUser = (val=true)=>{
        this.setState({addUserActive: val,deleteUserActice:false,promoteUserActive:false})
        // console.log("this is adduser active statement",this.state.addUserActive)

        // console.log("this is executed")
    }

    deleteUser = (val=false)=>{
        this.setState({deleteUserActice: val,addUserActive:false,promoteUserActive:false})
        // console.log("this is delete employess statement",this.state.deleteUserActice)

        // console.log("this is executed")

    }

    promoteUser = (val=false)=>{
        this.setState({addUserActive: false,deleteUserActice:false,promoteUserActive:val})
        // console.log("this is promote active statement",this.promoteUserActive)
        // console.log("this is executed")

    }

    handleUsername = (e)=> {
        this.setState({username:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.username)
    }

    handleSelect = (e)=> {
        // console.log("handling the select")
    }
    render() {
        // console.log("$$$$$$$$$ Data updation $$$$$$$$$$")
        return (
            <div className="ThreeButton">
                {/* <UserDetails></UserDetails> */}
                {/* <AddUser></AddUser> */}
                {/* <h2>the value of adduser active {this.state.addUserActive}</h2> */}

                {
                    this.state.addUserActive && <AddUser toggleAddUser = {this.addUser}></AddUser> 
                }

                {
                    this.state.deleteUserActice && <DeleteUser toggleDeleteUser = {this.deleteUser}></DeleteUser>
                }
                {
                    this.state.promoteUserActive && <PromoteUser togglePromoteUser = {this.promoteUser}></PromoteUser> 
                }
                <div className="ThreeButton">
                <button onClick={this.addUser}>Add User</button>
                <button onClick={this.deleteUser}>Delete User</button>
                <button onClick={this.promoteUser}>Promote User</button>
                </div>
            </div>
        );
    }
}


export default DataUpdation;
