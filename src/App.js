import './App.css';
import React, { createContext, useReducer } from 'react';
import TempComponent from './component/TempComponent';
import DataUpdation from './component/DataUpdation';
import {FormatedArray} from './component/FormatData'

export const MyContext = createContext();
export const MyContextConsumer = MyContext.Consumer

function App() {
  const myReducer = (state,action) =>
  {
    switch(action.type)
    {
      case "ADD_USER":
        {
          const childData = {}
          let parentKey = parseInt(action.data.parent)
          let childKey = parseInt(action.data.key)
          const parentData = state[parentKey]
          const finalData = {...parentData,childEmp:[...parentData.childEmp,{name:action.data.name,key:childKey,title:action.data.title}]}
          const finalDataObj = {}
          finalDataObj[parentKey] = finalData
          childData[childKey] = {name:action.data.name,key:childKey,title:action.data.title,childEmp:[],parent:parentKey}
          console.log("this add user is clicked and run",action.data)
          const preparedData = {...state,...childData,...finalDataObj}
          console.log("prepared data is ",preparedData)
          return preparedData
        }
      case "DELETE_USER":
        {
          console.log("delete user in app component",action.data)
          if(state[action.data])
          {
            const deletedEmp = {...state[action.data]}
            const deletedEmpObj = {}
            deletedEmp.childEmp.forEach(element => {
              const currentDeltedObj = state[element.key]
              deletedEmpObj[element.key] = {...currentDeltedObj,parent:deletedEmp.parent}
            });
            console.log("deleted employee list object ",deletedEmpObj )
            let parentKey = deletedEmp.parent
            const parentData = state[parentKey]
  
            const remainParentEmp = parentData.childEmp.filter((item)=>{
              return item.key != action.data ? true:false
            })
  
            console.log("remaingParenet ",remainParentEmp)
            const finalData = {...parentData,childEmp:[...remainParentEmp,...deletedEmp.childEmp]}
            const finalDataObj = {}
            finalDataObj[parentKey] = finalData
            delete state[action.data]
            const preparedData = {...state,...deletedEmpObj,...finalDataObj}
            console.log("deleted employee list object ",preparedData )
            return preparedData
          }
          else
          {
            console.log(state)
            return state
          }
          
        }
      case "PROMOTE_USER":
        return state
      default:
        return state;
    }
  }
  // console.log("formation of my data ",FormatedArray)
  const initialState = FormatedArray
  const [state, dispatch] = useReducer(myReducer, initialState);
  return (
    <div className="App">
      <MyContext.Provider value={{data:state,changeObj:dispatch}}>
      <TempComponent />
      <DataUpdation />
      </MyContext.Provider>

    </div>
  );
}

export default React.memo(App);
