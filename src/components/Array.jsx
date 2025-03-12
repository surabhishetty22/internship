import React from 'react'

export default function Array() {
    let fruits = ['apple','banana','orange','kiwi'];
let mapping = fruits.map((item,index)=><h1>{++index}. {item}</h1>)
let vehicles = ["bmw","ford","audi","mustang"]
let studentDetails = [
    {name:"rahul",class:"10th",rollNo:20},
    {name:"surabhi",class:"10th",rollNo:21},
    {name:"smitha",class:"10th",rollNo:22},
    {name:"rakshitha",class:"10th",rollNo:23},
]
// let employeeDetails =[
//     {name:"Rahul",designation:"developer",salary:40000,skills:["html","css","js"]},


// ]
  return (
    <div>
        <h1>This is array method</h1>
        <h3>{fruits}</h3>
        {mapping}
        {vehicles.map((item,index)=><h1>{++index}. {item}</h1>)}
        {studentDetails.map((item)=>{
        return(
    <div>
    <h1>{item.name} {item.class} {item.rollNo}</h1>
    </div>
            )
        })}
        <table border={1}>
            <tr>
                <th>SL.</th>
                <th>Name</th>
                <th>Class</th>
                <th>Roll No</th>
            </tr>
            {studentDetails.map((item,index)=> {
                return (
                    <tr>
                        <th>{++index}.</th>
                        <th>{item.name}</th>
                        <th>{item.class}</th>
                        <th>{item.rollNo}</th>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}
