import React, { useContext } from 'react'
import { MyContext} from '../App'
import TreeComponent from './TreeComponent';


const TempComponent = () =>{
    const parsedData = useContext(MyContext);
    console.log("*********TreeComponent********")
    return (
        <div className="org_tree">
        <ul>
            <li>
                {"[" + parsedData.data[1].name + "," + parsedData.data[1].title + "]"}
                <TreeComponent data={{currentData:parsedData.data[1].childEmp,wholeData: parsedData.data}}></TreeComponent>
            </li>
            </ul>
          </div>)

}

export default TempComponent