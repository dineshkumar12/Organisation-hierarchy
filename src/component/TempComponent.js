import React, { useContext } from 'react'
import { MyContext} from '../App'
import TreeComponent from './TreeComponent';



const TempComponent = () =>{
    const listStyleNone = {border: "none"}
    const parsedData = useContext(MyContext);
    // console.log("*********TempComponent********")
    return (
        <div className="org_tree">
        <ul>
            <li style={listStyleNone}>
                {"[" + parsedData.data[1].name + "," + parsedData.data[1].title + "]"}
                <TreeComponent data={{currentData:parsedData.data[1].childEmp,wholeData: parsedData.data}}></TreeComponent>
            </li>
            </ul>
          </div>)

}

export default TempComponent