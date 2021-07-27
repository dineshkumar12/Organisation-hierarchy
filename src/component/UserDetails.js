import React from 'react';
import * as Userdata from './Userdata.json'

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const ParseData = Userdata.default

        console.log("user data is ",Userdata)
        console.log(ParseData)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id </td>
                            <td>Name </td>
                            <td>Title </td>
                        </tr>
                    </thead>
                    {
                        ParseData.Employees.map((item,index) => { 
                        return <tbody>
                            <tr key={index}>
                            <td>{item.key}</td>
                            <td>{item.name}</td>
                            <td>{item.title}</td>
                            </tr>
                        </tbody>
                        })
                    }
                </table>

                <h1>hello userdetails</h1>
            </div>
        );
    }
}


export default UserDetails;
