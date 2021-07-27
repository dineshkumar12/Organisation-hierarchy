import React from 'react';

const TreeComponent = (props) => {
    const currentData = props.data.currentData
    const wholeData = props.data.wholeData
    return (
        <>
            <ul>
                {
                    currentData.map((item)=>{
                        return (<>
                        <li className="card">{"["+ item.key + "]"}
                        {/* <li className="card">{ "[" + item.name + "," + item.title + "]"} */}
                        {
                            wholeData[item.key].childEmp.length > 0 && <TreeComponent data={{currentData:wholeData[item.key].childEmp,wholeData:wholeData}}/>
                        }
                        </li>
                        </>)
                    })
                }
            </ul>
        </>
    );
};


export default TreeComponent;