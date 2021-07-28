import './App.css';
import React, { createContext, useReducer } from 'react';
import TempComponent from './component/TempComponent';
import DataUpdation from './component/DataUpdation';
import {FormatedArray} from './component/FormatData'

export const MyContext = createContext();
export const MyContextConsumer = MyContext.Consumer

const myReducer = (state,action) =>
{
  switch(action.type)
  {
    case "ADD_USER":
      {
        // console.log("+++++++++++++++++++ADD USER +++++++++++++++++")
        const childData = {}
        let parentKey = parseInt(action.data.parent)
        let childKey = parseInt(action.data.key)
        const parentData = state[parentKey]
        const finalData = {...parentData,childEmp:[...parentData.childEmp,{name:action.data.name,key:childKey,title:action.data.title}]}
        const finalDataObj = {}
        finalDataObj[parentKey] = finalData
        childData[childKey] = {name:action.data.name,key:childKey,title:action.data.title,childEmp:[],parent:parentKey}
        // console.log("this add user is clicked and run",action.data)
        const preparedData = {...state,...childData,...finalDataObj}
        // console.log("prepared data is ",preparedData)
        return preparedData
      }
    case "DELETE_USER":
      {
        // console.log("&&&&&&&&&&&&&&&&&&&&&",action.data)
        
          const deletedEmp = {...state[action.data]}
          const deletedEmpObj = {}
          deletedEmp.childEmp.forEach(element => {
            const currentDeltedObj = state[element.key]
            deletedEmpObj[element.key] = {...currentDeltedObj,parent:deletedEmp.parent}
          });
          // console.log("deleted employee list object ",deletedEmpObj )
          let parentKey = deletedEmp.parent
          const parentData = state[parentKey]

          const remainParentEmp = parentData.childEmp.filter((item)=>{
            return item.key != action.data ? true:false
          })

          // console.log("remaingParenet ",remainParentEmp)
          const finalData = {...parentData,childEmp:[...remainParentEmp,...deletedEmp.childEmp]}
          const finalDataObj = {}
          finalDataObj[parentKey] = finalData
          delete state[action.data]
          const preparedData = {...state,...deletedEmpObj,...finalDataObj}
          // console.log("deleted employee list object ",preparedData )
          return preparedData
        
      }
    case "PROMOTE_USER":
      {
        // console.log("promoting the user ",action.data)
        let parentKey = state[action.data].parent 
        let superParentKey = state[parentKey].parent
        const promotedEmp = state[action.data]
        const promotedEmpObj = {}
        promotedEmpObj[action.data] = {...promotedEmp,parent:superParentKey}

        let promoteParent = state[parentKey]

        let promoteParentChild = promoteParent.childEmp.filter((item)=>{
          return item.key != action.data ? true:false
        })

        let promoteParentObj = {}
        promoteParentObj[parentKey] = {...promoteParent,childEmp:[...promoteParentChild]}
        
        let promoteSuperParent = state[superParentKey]
        let promoteSuperParentObj = {}
        promoteSuperParentObj[superParentKey]={...promoteSuperParent,childEmp:[...promoteSuperParent.childEmp,{name:promotedEmp.name,key:promotedEmp.key,title:promotedEmp.title}]}
        const preparedData = {...state,...promotedEmpObj,...promoteParentObj,...promoteSuperParentObj}
        // console.log("^^^^^^^^^^^^^^^^^^^^^^^Promoted data is ^^^^^^^^^^^^^^^^^",preparedData)
        return preparedData
      }
    default:
      return state;
  }
}

function App() {

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


