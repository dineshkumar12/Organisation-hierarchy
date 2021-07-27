import * as Userdata from './Userdata.json'
    
const ParseData = Userdata.default.Employees.sort((a,b) => { 
   if(a.parent && b.parent) 
    return a.parent > b.parent ? 1 : -1
   else return 0;
})

export const FormatedArray = {}
ParseData.forEach((item) => {
    // console.log("text is ",item)
    if(item.parent)
    {
        FormatedArray[item.parent].childEmp.push({name:item.name,title:item.title,key:item.key})
        FormatedArray[item.key] = {name:item.name,title:item.title,key:item.key,childEmp:[],parent:item.parent}
    }
    else
        FormatedArray[item.key] = { name:item.name,title:item.title,key:item.key,childEmp:[]}
})

console.log("is this component called",FormatedArray)

